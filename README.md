> **Warning**
> This app is a work in progress

## WeListen
An open-souce media player that allows you to listen to music with friends.

![application](https://i.imgur.com/Y5oam77.png)

## Listening with Friends

WeListen would extend the existing player with real-time listening rooms, so friends can join the same session and hear the same song at roughly the same point in time. The audio itself wouldn't pass through our server. Each client would stream the song from its existing `songUrl`, while a WebSocket connection carries the small bits of information needed to keep everyone in sync: which song is playing, whether it's paused, the playback position, and when that position was last updated.

Socket.IO would handle the real-time connection. A user creates a room and shares an invite with friends, and everyone who joins subscribes to that room's events. The host controls the queue and playback; pressing play, pausing, seeking, or switching songs sends a command to the server, which validates that the sender is allowed to control the room and broadcasts the new state to its members. NextAuth provides the identity for each connection, and Prisma/Postgres stores room membership and invitations so private sessions stay private.

We wouldn't broadcast the current playback position every second. Instead, the server sends a timestamped snapshot whenever something changes. Each client can calculate where the song *should* be playing based on the snapshot and the elapsed time:

```ts
type PlaybackState = {
  songId: string | null;
  positionSeconds: number;
  isPlaying: boolean;
  updatedAt: number; // server timestamp in milliseconds
};

function expectedPosition(state: PlaybackState, now = Date.now()) {
  const elapsed = state.isPlaying
    ? Math.max(0, (now - state.updatedAt) / 1000)
    : 0;

  return state.positionSeconds + elapsed;
}
```

For example, if the host starts a song at `01:20` and another listener receives that event 200 milliseconds later, their player can start near `01:20.2` rather than blindly starting at `01:20`. In production, we'd also estimate the difference between the client's clock and the server's clock using ping/round-trip measurements; the example above assumes those clocks are closely aligned.

On the backend, the Socket.IO server would keep each connection in its room and broadcast authoritative playback updates. This is a simplified version of the event flow; `socket.data.userId` is populated by authentication middleware, `isRoomMember` and `isRoomHost` query the room records in Prisma, and the in-memory map is only for demonstration.

```ts
// realtime/rooms.ts (illustrative Socket.IO server handlers)
import type { Server } from "socket.io";

type Control =
  | { roomId: string; type: "play" | "pause" }
  | { roomId: string; type: "seek"; positionSeconds: number }
  | { roomId: string; type: "song"; songId: string };

const states = new Map<string, PlaybackState>();

export function registerRoomHandlers(io: Server) {
  io.on("connection", (socket) => {
    const userId = socket.data.userId as string;

    socket.on("room:join", async (roomId: string) => {
      if (!(await isRoomMember(userId, roomId))) return;

      await socket.join(roomId);
      const state = states.get(roomId);
      if (state) socket.emit("room:state", state);
    });

    socket.on("room:control", async (command: Control) => {
      if (!(await isRoomHost(userId, command.roomId))) return;

      const previous = states.get(command.roomId);
      if (!previous) return;

      const now = Date.now();
      const next: PlaybackState = { ...previous };

      switch (command.type) {
        case "play":
          next.positionSeconds = expectedPosition(previous, now);
          next.isPlaying = true;
          break;
        case "pause":
          next.positionSeconds = expectedPosition(previous, now);
          next.isPlaying = false;
          break;
        case "seek":
          if (!Number.isFinite(command.positionSeconds) || command.positionSeconds < 0) return;
          next.positionSeconds = command.positionSeconds;
          break;
        case "song":
          // Validate that the requested song exists and is accessible.
          next.songId = command.songId;
          next.positionSeconds = 0;
          next.isPlaying = true;
          break;
      }

      next.updatedAt = now;
      states.set(command.roomId, next);
      io.to(command.roomId).emit("room:state", next);
    });
  });
}
```

On the frontend, the listening room would subscribe to `room:state` and apply those updates to the same player already used throughout the app. A song change would still dispatch `changeSong` to Redux after resolving the song's metadata; the actual play, pause, and seek operations would be applied to the audio element underneath `react-h5-audio-player`.

```tsx
// listening-room.tsx (simplified client-side synchronization)
import type AudioPlayer from "react-h5-audio-player";

const playerRef = useRef<AudioPlayer>(null);

useEffect(() => {
  const onRoomState = (state: PlaybackState) => {
    const audio = playerRef.current?.audio.current;
    if (!audio) return;

    // The room's songId must already be resolved to a songUrl,
    // and the audio source should be loaded before seeking.
    const target = expectedPosition(state);
    const drift = Math.abs(audio.currentTime - target);

    // Correct noticeable drift without constantly resetting playback.
    if (drift > 0.5) audio.currentTime = target;

    if (state.isPlaying) {
      void audio.play().catch(() => {
        // Browsers may require a user gesture before autoplay.
      });
    } else {
      audio.pause();
    }
  };

  // Joining on every connection also handles automatic reconnects.
  const joinRoom = () => socket.emit("room:join", roomId);
  socket.on("connect", joinRoom);
  socket.on("room:state", onRoomState);
  if (socket.connected) joinRoom();

  return () => {
    socket.off("connect", joinRoom);
    socket.off("room:state", onRoomState);
  };
}, [roomId, socket]);

// When the host presses pause:
socket.emit("room:control", { roomId, type: "pause" });
```

The result is a shared listening experience without building our own audio streaming infrastructure. Joining late or reconnecting would simply request the room's latest playback snapshot and line the local player back up with everyone else. Small differences in timing could be corrected with occasional drift checks, rather than repeatedly forcing the playhead to jump.

For deployment, the WebSocket connection needs a persistent server (or a managed real-time service), not just a short-lived Next.js App Router route handler. We'd keep rooms and their authoritative playback state in Postgres or Redis rather than only in memory, authenticate each socket using the user's NextAuth session, and recheck permissions for room events. That also lets the feature grow into shared queues, host handoffs, invite-only rooms, presence indicators, and synchronized reactions without changing the basic player architecture.

## Acknowledgements
[shadcn ui](https://ui.shadcn.com/docs/components/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License
MIT
