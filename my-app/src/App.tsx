import NavBar from './components/NavBar';
import About from './components/About';
import ActiveContextProvider from './components/ActiveContext';
import './App.css'

function App() {


  return (
    <ActiveContextProvider>
      <NavBar />
      <About />
    </ActiveContextProvider>
  )
}

export default App
