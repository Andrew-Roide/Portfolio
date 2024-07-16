import { useContext } from 'react';
import { ActiveContext } from './ActiveContext';

export default function NavBar() {
  const context = useContext(ActiveContext);

  if (!context) {
    throw new Error("NavBar must be used within an ActiveContextProvider");
  }

  const { setActive } = context;

  return (
    <nav className="text-customBlue">
      <ul>
        <li>
          <a href="/" onClick={() => setActive("Home")}>
            Home
          </a>
        </li>
        <li>
          <a href="/about-me" onClick={() => setActive("About Me")}>
            About Me
          </a>
        </li>
        <li>
          <a href="/skills" onClick={() => setActive("Skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="/projects" onClick={() => setActive("Projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="/contact-me" onClick={() => setActive("Section 5")}>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};
