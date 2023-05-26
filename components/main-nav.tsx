"use client";

import * as React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, getInitials } from "@/lib/utils";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";
import PlayNavDropdown from "./play-nav-dropdown";

export function MainNav() {
  const { data: session } = useSession();
  const name = session?.user?.name;
  const email = session?.user?.email;

  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="items-center space-x-2 flex">
            <Icons.logo />
            <span className="font-bold sm:inline-block">WeListen</span>
          </Link>
        </div>
        <nav className="hidden gap-6 md:flex justify-center items-center">
          {/* <MainBrowser /> */}
        </nav>
        <nav>
          {session?.user ? (
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
          ) : (
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
