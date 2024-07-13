import { useContext } from 'react';
import { ActiveContext } from './ActiveContext';

export default function NavBar(){
  const context = useContext(ActiveContext);

  if (!context) {
    throw new Error("NavBar must be used within an ActiveContextProvider");
  }

  const { setActive } = context;

  return (
    <nav>
      <h1>Andrew John Roide</h1>
      <ul>
        <li><a href="#about-me" onClick={() => setActive('Section 1')}>About Me</a></li>
        <li><a href="#projects" onClick={() => setActive('Section 2')}>Projects</a></li>
        <li><a href="#skills" onClick={() => setActive('Section 3')}>Skills</a></li>
        <li><a href="#contact-me" onClick={() => setActive('Section 2')}>Contact Me</a></li>
      </ul>
    </nav>
  );
};
