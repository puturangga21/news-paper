import Button from "./Button";

export default function HeadingNews({
  title = "Title News",
  textColor = "text-white",
}) {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <p className="font-display text-[26px] font-bold text-slate-800">
        {title}
      </p>

      <Button
        weight="w-[78px]"
        heigth="h-[36px]"
        color="bg-white"
        textColor="text-slate-800"
        display="block"
        hover="hover:bg-[#e2e8f0]"
      >
        <a className={`${textColor}`}>View all</a>
      </Button>
    </div>
  );
}
