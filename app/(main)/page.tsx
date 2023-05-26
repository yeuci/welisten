"use client";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import "./animation.css";

export default function Home() {
  return (
    <>
      {/* 
      <div className="max-w-[400px] md:max-w-[560px] ml-auto mr-auto mt-4">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            WeListen is in beta! Features may not function correctly.
          </AlertDescription>
        </Alert>
      </div>
      */}

      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="animated container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            WeListen is officially in beta!
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            The only music player you&apos;ll ever need
          </h1>

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Discover, connect, and share the rhythm of life with friends on our
            immersive music-sharing platform
          </p>
          <div className="space-x-4 flex items-center ">
            <Link
              href="/play"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Icons.logo className="mr-2 h-4 w-4" />
              Listen
            </Link>
            <Link href={"/play"} className={cn(buttonVariants({ size: "lg" }))}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Link>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center container">
        <div className="b-banner flex items-center justify-center text-center p-10 w-full max-w-[1000px]">
          <span className="text-white font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            Vibe with others
          </span>
        </div>
      </section>
    </>
  );
}
