export default function Button({ children = "Button" }) {
  return (
    <button className="bg-darkPrimary hover:bg-darkHover hidden h-[44px] w-[97px] rounded-lg text-sm font-semibold text-white transition-all ease-in lg:block">
      {children}
    </button>
  );
}
