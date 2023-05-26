"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface PlayNavNotiDropdownProps {
  children: React.ReactNode;
}

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },

  // {
  //   title: "Your call has been confirmed.",
  //   description: "1 hour ago",
  // },
  // {
  //   title: "You have a new message!",
  //   description: "1 hour ago",
  // },
  // {
  //   title: "Your subscription is expiring soon!",
  //   description: "2 hours ago",
  // },

  // {
  //   title: "Your call has been confirmed.",
  //   description: "1 hour ago",
  // },
  // {
  //   title: "You have a new message!",
  //   description: "1 hour ago",
  // },
  // {
  //   title: "Your subscription is expiring soon!",
  //   description: "2 hours ago",
  // },
];

export default function PlayNavNotiDropdown({
  children,
}: PlayNavNotiDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[380px] max-h-[500px]">
        <Card className={cn("w-[380px] shadow-none border-none rounded-none")}>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <Switch />
            </div>
            <div className="overflow-auto max-h-[225px]">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          </CardFooter>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
