"use client";

import Image from "next/image";
import * as React from "react";
import { Icons } from "./icons";
import HoverInfo from "./hover-info";
import { useDispatch } from "react-redux";
import { changeSong } from "@/store/features/currentSong/currentSongSlice";

import "./styles/song-card.css";

interface SongCardProps {
  url: string;
  title: string;
  artist: string;
  img: string;
}

export default function SongCard({ url, title, artist, img }: SongCardProps) {
  const dispatch = useDispatch();

  return (
    // <div className="flex flex-col min-h-[250px] max-w-[200px]">
    <div className="flex flex-col min-h-[260px]">
      <div
        style={{ backgroundImage: `url(${img})` }}
        onClick={() => dispatch(changeSong({ url, title, artist, img }))}
        className="hover-blob transition cursor-pointer flex-1 bg-cover bg-center bg-no-repeat rounded-md flex justify-center items-center"
      >
        <span className="w-[50px] h-[50px] hover-blob__text transition cursor-pointer flex items-center justify-center">
          <Icons.play className="fill-white text-white" />
        </span>
      </div>

      {/* <Image
        alt="Cover"
        width={100}
        height={100}
        src={"/images/home-hero.jpg"}
        className="hover-blob transition cursor-pointer flex-1 bg-cover bg-center bg-no-repeat rounded-md flex justify-center items-center"
      /> */}
      <div className="flex flex-col">
        <span className="leading-7 [&:not(:first-child)]:mt-6 font-semibold">
          {title}
        </span>

        <HoverInfo artist={artist} />
      </div>
    </div>
  );
}
