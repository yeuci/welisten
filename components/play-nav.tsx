"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PlayNavDropdown from "./play-nav-dropdown";
import PlayNavNotiDropdown from "./play-nav-noti-dropdown";
import { BellRing } from "lucide-react";
import PlayBrowser from "./play-browser";
import { useSession } from "next-auth/react";
import { getInitials } from "@/lib/utils";

export default function PlayNav() {
  const [open, setOpen] = React.useState<boolean>(false);
  const { data: session } = useSession();

  const name = session?.user?.name;
  const email = session?.user?.email;

  console.log(session);

  //   React.useEffect(() => {
  //     const down = (e: KeyboardEvent) => {
  //       if (e.key === "j") {
  //         setOpen((open) => !open);
  //       }
  //     };

  //     document.addEventListener("keydown", down);
  //     return () => document.removeEventListener("keydown", down);
  //   }, []);

  return (
    <header className="supports-backdrop-blur:bg-background/60 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center w-full">
        <div className="flex h-20 items-center justify-between py-6 w-full">
          <div className="flex gap-6 md:gap-10">
            <Link href="/play" className="items-center space-x-2 flex">
              <Icons.logo />
              <span className="font-bold sm:inline-block">WeListen</span>
            </Link>
          </div>

          <nav className="hidden gap-6 md:flex">
            <PlayBrowser />
          </nav>

          <nav className="flex items-center gap-6">
            <div>
              <button
                type="button"
                className={`flex items-center justify-between gap-10 ${cn(
                  buttonVariants({ variant: "outline" })
                )}`}
                onClick={() => setOpen((p) => !p)}
              >
                <span className="text-sm text-muted-foreground">
                  Search music...
                </span>
                <p className="text-sm text-muted-foreground">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>J
                  </kbd>
                </p>
              </button>

              <Search open={open} setOpen={setOpen} />
            </div>
            <PlayNavNotiDropdown>
              <BellRing className="cursor-pointer" />
            </PlayNavNotiDropdown>
            <PlayNavDropdown>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={session?.user?.image || ""}
                  alt="Profile picture"
                />
                <AvatarFallback>
                  {getInitials(name || "") || getInitials(email || "") || ""}
                </AvatarFallback>
              </Avatar>
            </PlayNavDropdown>
          </nav>
        </div>
      </div>
    </header>
  );
}
