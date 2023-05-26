import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarDays } from "lucide-react";
interface HoverInfoProps {
  artist: string;
}

import { Skeleton } from "./ui/skeleton";

export default function HoverInfo({ artist }: HoverInfoProps) {
  // const [data, setData] = React.useState<object | null>();
  // const [loading, setLoading] = React.useState<boolean>(false);
  // React.useEffect(() => {
  //   setLoading(true);
  //   fetch("https://hub.dummyapis.com/delay?seconds=3")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((e) => setLoading(false));
  // }, []);

  // if (loading)
  //   return (
  //     <HoverCard>
  //       <HoverCardTrigger asChild>
  //         <Button className="px-0 py-0 my-0 mx-0 h-5" variant="link">
  //           <p className="text-left block w-full">{artist}</p>
  //         </Button>
  //       </HoverCardTrigger>
  //       <HoverCardContent className="w-80">
  //         <div className="flex space-x-4">
  //           <Avatar>
  //             <Skeleton className="h-full w-full" />
  //           </Avatar>
  //           <div className="space-y-1">
  //             <Skeleton className="h-5 w-[230px]" />
  //             <Skeleton className="h-5 w-[180px]" />
  //             <Skeleton className="h-5 w-[130px]" />
  //           </div>
  //         </div>
  //       </HoverCardContent>
  //     </HoverCard>
  //   );

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="px-0 py-0 my-0 mx-0 h-5" variant="link">
          <p className="text-left block w-full">{artist}</p>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>{artist[0] + artist[1]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@{artist}</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
