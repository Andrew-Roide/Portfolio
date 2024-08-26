import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ActiveContext } from "./ActiveContext";
import React from "react";

export default function NavBar() {
  const context = useContext(ActiveContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!context) {
    throw new Error("NavBar must be used within an ActiveContextProvider");
  }

  const { setActive } = context;

  function handleLinkClick(section:any) {
    setActive(section);
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  const menuItems = [
    { label: "About Me", section: "About Me" },
    { label: "Projects", section: "Projects" },
    { label: "Skills", section: "Skills" },
    { label: "Contact Me", section: "Contact Me" },
  ];

  return (
    <header className="relative">
      <nav className="flex items-center justify-end gap-12 text-customBlue mt-10 px-4 font-orbitron">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-xl font-slab font-bold text-shadow-customNav items-center">
          {menuItems.map((item) => (
            <motion.li
              key={item.section}
              className="relative"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`#${item.section.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => handleLinkClick(item.section)}
                className="duration-300 whitespace-nowrap"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/andrew-roide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-10 h-10 transition bg-customGrey rounded-full hover:scale-110">
                <FaLinkedinIn className="absolute text-xl top-2.5 left-2.5 text-main" />
              </div>
            </a>
            <a
              href="https://github.com/andrew-roide"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-10 h-10 transition bg-white rounded-full hover:scale-110">
                <FaGithub className="absolute text-xl top-2.5 left-2.5 text-main" />
              </div>
            </a>
          </motion.div>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden absolute right-4 top-4 text-customBlue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-16 right-0 mx-4 my-6 z-50 w-64"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navList}
          >
            <motion.ul
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              exit="hidden"
              variants={navList}
            >
              {menuItems.map((item) => (
                <motion.li
                  key={item.section}
                  variants={navItem}
                  className="text-customBlue text-2xl pb-7 font-bold"
                >
                  <a
                    href={`#${item.section.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => handleLinkClick(item.section)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
