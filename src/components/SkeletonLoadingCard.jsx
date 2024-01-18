export default function SkeletonLoadingCard() {
  return (
    <div className="flex flex-col items-center justify-between rounded-[20px] bg-white md:flex-row">
      <div className="w-full px-4 pt-5 md:w-[390px] md:px-0 md:py-[26px] md:pl-[26px] lg:w-[610px] lg:p-7">
        <div className="mb-[20px] h-4 animate-pulse rounded-md bg-gray-300 lg:mb-[30px]"></div>

        <div className="mb-4 h-[80px] animate-pulse rounded-md bg-gray-300 md:mb-[10px] lg:mb-[10px]"></div>

        <div className="mb-4 h-4 animate-pulse rounded-md bg-gray-300 md:mb-[10px] lg:mb-[10px]"></div>
      </div>

      <div className="flex h-[180px] w-full animate-pulse items-center justify-center overflow-hidden rounded-b-[10px] bg-gray-300 md:m-4 md:h-[170px] md:w-[210px] md:rounded-[10px] lg:m-7 lg:h-[210px] lg:w-[300px]">
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  );
}
