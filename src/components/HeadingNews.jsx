import { Link } from "react-router-dom";
import Button from "./Button";

export default function HeadingNews({
  title = "Title News",
  textColor = "text-white",
  link,
}) {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <p className="font-display text-[26px] font-bold text-slate-800">
        {title}
      </p>

      <Link to={link}>
        <Button
          weight="w-[78px]"
          heigth="h-[36px]"
          color="bg-white"
          textColor="text-slate-800"
          display="block"
          hover="hover:bg-[#e2e8f0]">
          <p className={`${textColor}`}>View all</p>
        </Button>
      </Link>
    </div>
  );
}
