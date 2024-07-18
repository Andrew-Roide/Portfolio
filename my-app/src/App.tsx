import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
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
    </ActiveContextProvider>
  );
}

export default App;
