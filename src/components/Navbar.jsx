import { useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  {
    id: "1",
    link: "/",
    name: "Terbaru",
  },
  {
    id: "2",
    link: "/",
    name: "Invesment",
  },
  {
    id: "3",
    link: "/",
    name: "Market",
  },
  {
    id: "4",
    link: "/",
    name: "Enterpreneur",
  },
  {
    id: "5",
    link: "/",
    name: "Tech",
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  const menuVars = {
    initials: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        eased: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        eased: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const mobileHeaderVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

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
            className="text-base font-medium text-slate-800"
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
