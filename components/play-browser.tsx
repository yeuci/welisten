import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Icons } from "./icons";
import Link from "next/link";
import { Button } from "./ui/button";
import { Circle } from "lucide-react";

interface PlayerBrowserProps {}

export default function PlayBrowser({}: PlayerBrowserProps) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Browse</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={"/play"}>Home</Link>
            <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Link href={"/play/artists"}>Artists</Link>
            <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Friends</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="friends">
            <MenubarSub>
              <MenubarSubTrigger>
                <Circle
                  className="w-3 h-3 mr-2 text-[#2ECD71]"
                  fill="#2ECD71"
                />
                Comporting
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <Link className="w-full" href={"/play/user/me"}>
                    Profile
                  </Link>
                </MenubarItem>
                <MenubarItem>Invite to Party</MenubarItem>
                <MenubarItem>Remove Friend</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger>
                <Circle
                  className="w-3 h-3 mr-2 text-[#95A4A7]"
                  fill="#95A4A7"
                />
                Wayne
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <Link className="w-full" href={"/play/user/me"}>
                    Profile
                  </Link>
                </MenubarItem>
                <MenubarItem>Invite to Party</MenubarItem>
                <MenubarItem>Remove Friend</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem className="cursor-pointer" inset>
            Add Friend
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Party</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="party">
            <MenubarItem>Me</MenubarItem>
            <MenubarItem>Comporting</MenubarItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem className="cursor-pointer" inset>
            Add User
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
