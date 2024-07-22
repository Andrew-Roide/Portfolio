import { useContext, useState } from "react";
import { ActiveContext } from "./ActiveContext";

export default function NavBar() {
  const context = useContext(ActiveContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!context) {
    throw new Error("NavBar must be used within an ActiveContextProvider");
  }

  const { setActive } = context;

  function handleLinkClick(section) {
    setActive(section);
    if (isOpen) {
      setIsOpen(false); // Close the menu after a link is clicked on smaller screens
    }
  }

  return (
    <header className="relative">
      <nav className="text-customBlue mt-10">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end gap-12 text-2xl font-slab font-bold text-shadow-customNav">
          <li>
            <a href="#home" onClick={() => handleLinkClick("Home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" onClick={() => handleLinkClick("About Me")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleLinkClick("Skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleLinkClick("Projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact-me" onClick={() => handleLinkClick("Contact Me")}>
              Contact Me
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-customBlue focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 shadow-lg rounded-lg px-4 py-6 z-50">
            <ul className="flex flex-col gap-4 text-xl font-slab font-bold text-customBlue text-shadow-customNav">
              <li>
                <a href="#home" onClick={() => handleLinkClick("Home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about-me" onClick={() => handleLinkClick("About Me")}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => handleLinkClick("Skills")}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => handleLinkClick("Projects")}>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact-me"
                  onClick={() => handleLinkClick("Contact Me")}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
