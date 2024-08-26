import "./CustomScrollBar.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import ActiveContextProvider from "./components/ActiveContext";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";
import React from "react";

function App() {
  return (
    <ActiveContextProvider>
      <ParticleBackground />
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </ActiveContextProvider>
  );
}

export default App;
