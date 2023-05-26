"use client";

import * as React from "react";
import MusicPlayer from "./music-player";
import Image from "next/image";
import image from "../public/images/home-hero.jpg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface NowPlayingProps {}

export default function NowPlaying({}: NowPlayingProps) {
  const { url, title, artist, img } = useSelector(
    (state: RootState) => state.currentSong
  );

  return (
    <div className="flex supports-backdrop-blur:bg-background/60 bottom-0 w-full border-t bg-background/95 backdrop-blur">
      <div className="flex items-center justify-center gap-3 w-[15rem]">
        <div
          style={{
            backgroundImage: `url(${img})`,
            width: "60px",
            height: "60px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "block",
            borderRadius: "10px",
          }}
        />
        <div className="flex flex-col">
          <span className="select-none font-semibold sm:inline-block">
            {title}
          </span>
          <span className="select-none text-sm sm:inline-block">{artist}</span>
        </div>
      </div>
      <div className="flex-1">
        <MusicPlayer url={url} />
      </div>
    </div>
  );
}
