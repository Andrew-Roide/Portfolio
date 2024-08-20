import "./CustomScrollBar.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import ActiveContextProvider from "./components/ActiveContext";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";

function App() {
  return (
    <ActiveContextProvider>
      <ParticleBackground />
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
    </ActiveContextProvider>
  );
}

export default App;
