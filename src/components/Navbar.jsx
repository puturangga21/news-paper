import { useState } from "react";
import Button from "./Button";

const navItems = [
  {
    id: "1",
    link: "/",
    name: "Daily Digest",
  },
  {
    id: "2",
    link: "/",
    name: "Design Tools",
  },
  {
    id: "3",
    link: "/",
    name: "Tutorials",
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <nav className="shadow-navbar flex items-center justify-between px-4 py-[22px] md:px-[37px] md:py-[32px] lg:px-[70px] lg:py-[30px]">
      <a href="/">
        <img
          src="./personally-logo.svg"
          alt="Logo"
          className="w-[99px] md:w-full"
        />
      </a>

      {/* Desktop & Tablet */}
      <div className="hidden gap-[100px] md:flex md:items-center">
        <ul className="flex gap-[30px]">
          {navItems.map((item) => (
            <li
              className="text-darkPrimary text-base font-medium"
              key={item.id}
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <Button>Subscribe</Button>
      </div>

      {/* Mobile navigation icon */}
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? (
          <div className="mx-auto flex h-[16px] w-[28px] items-center justify-center">
            <img src="./close.svg" alt="Close" />
          </div>
        ) : (
          <div className="flex h-[16px] w-[24px]">
            <img src="./hamburger.svg" alt="Hamburger" />
          </div>
        )}
      </div>

      {/* Mobile navigation menu */}
      <ul
        className={
          nav
            ? "border-r-darkPrimary fixed left-0 top-0 h-full w-[60%] border-r bg-white duration-500 ease-in-out md:hidden"
            : "fixed bottom-0 left-[-100%] top-0 w-[60%] duration-500 ease-in-out"
        }
      >
        {/* Mobile logo */}
        <a href="/">
          <img
            src="./personally-logo-mobile.svg"
            alt="Logo"
            className="px-4 py-[22px]"
          />
        </a>

        {/* Mobile navigation items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="text-darkPrimary border-b p-4 text-base font-medium"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
