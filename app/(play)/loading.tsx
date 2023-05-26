import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="flex flex-col p-5 px-7 gap-4">
        <Skeleton className="h-6 w-[250px]" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridAutoRows: "auto",
            gridGap: "1rem",
            placeContent: "center",
          }}
        >
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
        </div>
      </div>

      <div className="flex flex-col p-5 px-7 gap-4">
        <Skeleton className="h-6 w-[250px]" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridAutoRows: "auto",
            gridGap: "1rem",
            placeContent: "center",
          }}
        >
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
          <Skeleton className="w-[200px] h-[250px] rounded-sm" />
        </div>
      </div>
    </div>
  );
}
