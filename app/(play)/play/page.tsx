import { Metadata } from "next";
import SongCard from "@/components/song-card";
import { Icons } from "@/components/icons";
import BannerHero from "@/components/banner-hero";

export const metadata: Metadata = {
  title: "WeListen | Play",
};

async function sleep(milliSeconds: number) {
  var startTime = new Date().getTime(); // get the current time
  while (new Date().getTime() < startTime + milliSeconds); // hog cpu until time's up
  return 1;
}

export default async function Play() {
  // const data = await sleep(5000);
  return (
    <div>
      <section className="p-5 px-7 lg:p-7 lg:px-9 max-w-[1700px] ml-auto mr-auto">
        {/* <div className="flex flex-wrap gap-5"> */}
        <BannerHero />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-2">
          Most Popular
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridAutoRows: "auto",
            gridGap: "1rem",
            placeContent: "center",
          }}
        >
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110874261519880202/XXXTENTACION_-_BAD_Audio.mp3"
            }
            title={"BAD"}
            artist={"XXXTENTACION"}
            img={
              "https://i.ytimg.com/vi/P1t9T1TAOBI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2HZzNB9ZyX72QiSUzHHFbBm98oA"
            }
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110871180807778364/SpotifyMate.com_-_Shadow_Wizard_Money_Gang_-_GhostInTheWall.mp3"
            }
            title={"Shadow Wizard"}
            artist={"SWMG"}
            img={
              "https://i.scdn.co/image/ab67616d00001e02471c69a2a9a86ee10c04c7d8"
            }
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110871180807778364/SpotifyMate.com_-_Shadow_Wizard_Money_Gang_-_GhostInTheWall.mp3"
            }
            title={"Shadow Wizard"}
            artist={"SWMG"}
            img={
              "https://i.scdn.co/image/ab67616d00001e02471c69a2a9a86ee10c04c7d8"
            }
          />{" "}
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110249955827920916/Juice_WRLD_-_Toxic_Humans_AI.mp3"
            }
            title={"Toxic Humans"}
            artist={"Juice WRLD"}
            img={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110249925280792737/image.png"
            }
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110249955827920916/Juice_WRLD_-_Toxic_Humans_AI.mp3"
            }
            title={"Toxic Humans"}
            artist={"Juice WRLD"}
            img={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110249925280792737/image.png"
            }
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1109622214967435335/ytmp3free.cc_aot-hardstyle-my-soldiers-rage-hiroyuki-sawano-maul-bootleg-youtubemp3free.org.mp3"
            }
            title={"Erwins Speech"}
            artist={"AOT"}
            img={
              "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-anime-video-music-album-cover-design-template-70bf413b3c1cf99db9e7a40aec385183_screen.jpg"
            }
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1109622214967435335/ytmp3free.cc_aot-hardstyle-my-soldiers-rage-hiroyuki-sawano-maul-bootleg-youtubemp3free.org.mp3"
            }
            title={"Erwins Speech"}
            artist={"AOT"}
            img={
              "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-anime-video-music-album-cover-design-template-70bf413b3c1cf99db9e7a40aec385183_screen.jpg"
            }
          />
        </div>
      </section>

      <section className="p-5 px-5 lg:p-5 lg:px-9 max-w-[1700px] ml-auto mr-auto">
        {/* <div className="flex flex-wrap gap-5"> */}
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-2">
          New Releases
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridAutoRows: "auto",
            gridGap: "1rem",
            placeContent: "center",
          }}
        >
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110253426870325389/golden_hour_cover.mp3"
            }
            title={"Golden Hour"}
            artist={"Mosh"}
            img={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110251885027405824/image.png"
            }
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110253426870325389/golden_hour_cover.mp3"
            }
            title={"Golden Hour"}
            artist={"Mosh"}
            img={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1110251885027405824/image.png"
            }
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1109622214967435335/ytmp3free.cc_aot-hardstyle-my-soldiers-rage-hiroyuki-sawano-maul-bootleg-youtubemp3free.org.mp3"
            }
            title={"Erwins Speech"}
            artist={"AOT"}
            img={"https://i.ebayimg.com/images/g/D7AAAOSw0-liB6sN/s-l1600.jpg"}
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1109622214967435335/ytmp3free.cc_aot-hardstyle-my-soldiers-rage-hiroyuki-sawano-maul-bootleg-youtubemp3free.org.mp3"
            }
            title={"Erwins Speech"}
            artist={"AOT"}
            img={"https://i.ebayimg.com/images/g/D7AAAOSw0-liB6sN/s-l1600.jpg"}
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1109622214967435335/ytmp3free.cc_aot-hardstyle-my-soldiers-rage-hiroyuki-sawano-maul-bootleg-youtubemp3free.org.mp3"
            }
            title={"Erwins Speech"}
            artist={"AOT"}
            img={"https://i.ebayimg.com/images/g/D7AAAOSw0-liB6sN/s-l1600.jpg"}
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1109622214967435335/ytmp3free.cc_aot-hardstyle-my-soldiers-rage-hiroyuki-sawano-maul-bootleg-youtubemp3free.org.mp3"
            }
            title={"Erwins Speech"}
            artist={"AOT"}
            img={"/images/home-hero.jpg"}
          />
          <SongCard
            url={
              "https://cdn.discordapp.com/attachments/1107138233365692467/1109622214967435335/ytmp3free.cc_aot-hardstyle-my-soldiers-rage-hiroyuki-sawano-maul-bootleg-youtubemp3free.org.mp3"
            }
            title={"Erwins Speech"}
            artist={"AOT"}
            img={"/images/home-hero.jpg"}
          />
        </div>
      </section>
    </div>
  );
}
