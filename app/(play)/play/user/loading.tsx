import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <div>
      <Skeleton className="h-[400px] w-full"></Skeleton>
      <Skeleton className="w-[360px] h-8 m-5"></Skeleton>
      <Skeleton className="w-[310px] h-8 m-5"></Skeleton>
      <Skeleton className="w-[260px] h-8 m-5"></Skeleton>
    </div>
  );
}
