import PlayNav from "@/components/play-nav";
import NowPlaying from "@/components/now-playing";
import Providers from "@/store/provider";
import "./normalize.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

interface PlayLayoutProps {
  children: React.ReactNode;
}
export default async function PlayLayout({ children }: PlayLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }

  if (session)
    return (
      <div className="h-screen flex flex-col">
        <Providers>
          <PlayNav />
          <div className="flex-1 overflow-auto">{children}</div>
          <NowPlaying />
        </Providers>
      </div>
    );
}
