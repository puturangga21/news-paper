export default function Button({
  children = "Button",
  weight = "w-[97px]",
  heigth = "h-[44px]",
  color = "bg-slate-800",
  display = "hidden",
  hover = "hover:bg-darkHover",
}) {
  return (
    <button
      className={`${display} ${weight} ${heigth} rounded-lg ${color} text-sm font-semibold text-white transition-all ease-in ${hover} lg:block`}
    >
      <a>{children}</a>
    </button>
  );
}
