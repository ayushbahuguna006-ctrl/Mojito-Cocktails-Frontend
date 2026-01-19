import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'
import Cocktails from './components/Cocktails';
import About from './components/About';
import Leftleaf from './components/Leftleaf';




function App() {
 

  return (
    <>
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <Leftleaf/>
        <Cocktails/>
        <About/>
      </main>

    </>
  )
}

export default App
