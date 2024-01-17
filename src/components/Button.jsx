export default function Button({
  children = "Button",
  weight = "w-[97px]",
  heigth = "h-[44px]",
  color = "bg-slate-800",
  display = "hidden",
  hover = "hover:bg-darkHover",
  textColor = "text-white",
}) {
  return (
    <button
      className={`${display} ${weight} ${heigth} rounded-lg ${color} text-sm font-semibold ${textColor} transition-all ease-in ${hover} lg:block`}>
      {children}
    </button>
  );
}
