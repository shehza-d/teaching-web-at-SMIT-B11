import { Skeleton } from "./ui/Skeleton";

export default function ProductSkeleton() {
  return (
    <div className="group p-3 drop-shadow-md border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 min-h-[350px]">
      <Skeleton className="w-full bg-gray-300 h-64"></Skeleton>

      <Skeleton className="font-medium bg-gray-300 h-5 w-36 group-hover:text-primary transition-all duration-300"></Skeleton>

      <Skeleton className="font-medium h-4 w-20 bg-gray-300"></Skeleton>
    </div>
  );
}
