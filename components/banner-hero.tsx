"use client";

import * as React from "react";

import { Icons } from "./icons";
import "./styles/banner.css";

interface SpotlightSong {
  image: string;
  link: string;
  number: number;
  cover: boolean;
  bg: string;
}

const bannerSpotlight: SpotlightSong[] = [
  {
    image: "https://i.redd.it/s4kqi949yhb21.jpg",
    link: "",
    number: 1,
    cover: false,
    bg: "#000000",
  },
  {
    image:
      "https://dslv9ilpbe7p1.cloudfront.net/0VH94olEE09RbXXFe8cshg_store_banner_image.jpeg",
    link: "",
    number: 2,
    cover: false,
    bg: "#662E91",
  },
  {
    image:
      "https://i.pinimg.com/originals/bc/fe/6c/bcfe6c7593dd15c2743acbba04bf45f2.jpg",
    link: "",
    number: 3,
    cover: false,
    bg: "#000000",
  },
  {
    image: "https://i1.sndcdn.com/visuals-000638003958-50RIFk-t1240x260.jpg",
    link: "",
    number: 4,
    cover: true,
    bg: "#000000",
  },
];

interface BannerHeroProps {}

export default function BannerHero({}: BannerHeroProps) {
  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentSpotlight((p) => {
        const n: number = p + 1;
        console.log(n);
        if (n >= bannerSpotlight.length) return 0;
        return n;
      });
      return () => clearInterval(id);
    }, 15000);
  }, []);

  const [currentSpotlight, setCurrentSpotlight] = React.useState<number>(0);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerSpotlight[currentSpotlight].image})`,
        backgroundSize: bannerSpotlight[currentSpotlight].cover
          ? "cover"
          : "contain",
        backgroundColor: bannerSpotlight[currentSpotlight].bg,
      }}
      className="mb-7 relative w-full h-[280px] rounded-md bg-center bg-no-repeat"
    >
      <div className="flex items-center gap-2 justify-end p-6">
        <Icons.logo className="text-white h-6 w-6" />
        <h4 className="scroll-m-20 select-none text-xl font-semibold tracking-tight text-white">
          Spotlight
        </h4>
      </div>
      <div className="banner-animation bg-white w-[100px] h-2 absolute bottom-6 right-6 rounded-2xl" />
      <div className="absolute top-6 left-6 h-5 w-5 text-white font-bold">
        #{bannerSpotlight[currentSpotlight].number}
      </div>
    </div>
  );
}
