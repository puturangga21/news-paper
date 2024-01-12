import { useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { menuVars, containerVars, mobileLinkVars } from "../utils/framerVars";

const navItems = [
  {
    id: "1",
    link: "/",
    name: "Terbaru",
  },
  {
    id: "2",
    link: "/",
    name: "Market",
  },
  // {
  //   id: "3",
  //   link: "/",
  //   name: "Market",
  // },
  // {
  //   id: "4",
  //   link: "/",
  //   name: "Enterpreneur",
  // },
  // {
  //   id: "5",
  //   link: "/",
  //   name: "Tech",
  // },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <>
      {/* Navbar desktop & tablet */}
      <nav className="shadow-navbar navbar-glass fixed top-0  flex w-full items-center justify-between px-4 py-[22px] md:px-[37px] md:py-[32px] lg:px-[70px] lg:py-[30px]">
        <a href="/">
          <img
            src="./personally-logo.svg"
            alt="Logo"
            className="w-[99px] md:w-full"
          />
        </a>

        <div className="hidden gap-[100px] md:flex md:items-center">
          <ul className="flex gap-[30px]">
            {navItems.map((item) => (
              <li
                className="text-base font-medium text-slate-800"
                key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <Button>Subscribe</Button>
        </div>

        <div className="block md:hidden">
          <p
            className="cursor-pointer text-base font-medium text-slate-800"
            onClick={handleNav}>
            Menu
          </p>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={menuVars}
            initial="initials"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-[999] h-screen w-full origin-top bg-slate-900 px-4 py-[22px] text-white">
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex h-full flex-col">
              <div className="overflow-hidden">
                <motion.div
                  variants={mobileLinkVars}
                  className="flex items-center justify-between">
                  <a href="/">
                    <img
                      src="./personally-logo-white.svg"
                      alt="Logo"
                      className="w-[99px]"
                    />
                  </a>
                  <p
                    className="cursor-pointer text-base font-medium text-white"
                    onClick={handleNav}>
                    Close
                  </p>
                </motion.div>
              </div>

              <div className="flex h-full flex-col items-center justify-center gap-9">
                {navItems.map((item) => (
                  <div className="overflow-hidden" key={item.id}>
                    <motion.div
                      variants={mobileLinkVars}
                      className="font-display text-4xl font-semibold uppercase text-white">
                      <a href={item.link}>{item.name}</a>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
