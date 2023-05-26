import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="flex flex-col bg-slate-100 p-4 pt-8 pb-8 items-center">
      <div className="flex items-center gap-2">
        <Icons.logo className="mx-auto h-7 w-7" />
        <span className="font-bold sm:inline-block">WeListen</span>
      </div>
      <nav className="flex flex-col gap-4 mt-[5rem]">
        <Link
          href={"#"}
          className={cn(
            "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
          )}
        >
          <Icons.home className="mr-2 h-6 w-7" />
          Home
        </Link>
        <Link
          href={"#"}
          className={cn(
            "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
          )}
        >
          <Icons.library className="mr-2 h-6 w-7" />
          My Library
        </Link>
      </nav>
      <div className="mt-auto">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">
              <Icons.logout className="mr-2 h-6 w-7" />
              Logout
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
