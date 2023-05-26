"use client";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface MusicPlayerProps {
  url: string;
}

export default function MusicPlayer({ url }: MusicPlayerProps) {
  return (
    <AudioPlayer
      autoPlay
      src={url}
      onPlay={(e) => console.log("onPlay")}

      // other props here
    />
  );
}
