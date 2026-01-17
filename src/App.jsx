import './App.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from './components/Navbar';
gsap.registerPlugin(useGSAP);



function App() {
 

  return (
    <>
      <main>
        <Navbar/>
      </main>
    </>
  )
}

export default App
