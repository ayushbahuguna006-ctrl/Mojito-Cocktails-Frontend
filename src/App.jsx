import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'
import Cocktails from './components/Cocktails';
import About from './components/About';
import Rightleaf from './components/Rightleaf';
import Art from './components/Art';




function App() {
 

  return (
    <>
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <Rightleaf/>
        <Cocktails/>
        <About/>
        <Art/>

      </main>

    </>
  )
}

export default App
