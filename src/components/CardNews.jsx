import { Link } from "react-router-dom";

export default function CardNews({ date, title, description, img, link }) {
  return (
    <Link to={link}>
      <div className="flex flex-col items-center justify-between rounded-[20px] bg-white md:flex-row">
        <div className="px-4 pt-5 md:w-[390px] md:px-0 md:py-[26px] md:pl-[26px] lg:w-[610px] lg:p-7 ">
          <p className="mb-[20px] font-display text-xs font-medium uppercase text-gray-500 lg:mb-[30px]">
            {date}
          </p>

          <h1 className="mb-4 font-display text-lg font-semibold leading-[25px] text-slate-800 md:mb-[10px] md:text-[22px] lg:mb-[10px] lg:text-[26px] lg:leading-[33px]">
            {title}
          </h1>

          <p className="hidden text-lg leading-[27px] text-slate-600 md:block md:text-base">
            {description}
          </p>
        </div>

        <div className="h-[180px] overflow-hidden rounded-b-[10px] md:m-4 md:h-[170px] md:w-[210px] md:rounded-[10px] lg:m-7 lg:h-[210px] lg:w-[300px]">
          <img
            src={img}
            alt="Thumbnail"
            className="w-full object-cover md:h-full"
          />
        </div>
      </div>
    </Link>
  );
}
