import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoadingCard({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-between rounded-[20px] bg-white md:flex-row">
        <div className="w-full px-4 pt-5 md:w-[390px] md:px-0 md:py-[26px] md:pl-[26px] lg:w-[610px] lg:p-7">
          <Skeleton className="mb-2 h-10 rounded-md " count={4} />
        </div>

        <div className="flex h-[180px] w-full animate-pulse items-center justify-center overflow-hidden rounded-b-[10px] bg-gray-300 md:m-4 md:h-[170px] md:w-[210px] md:rounded-[10px] lg:m-7 lg:h-[210px] lg:w-[300px]">
          <Skeleton height={180} />
        </div>
      </div>
    ));
}
