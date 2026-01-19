import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'
import Cocktails from './components/Cocktails';
import About from './components/About';





function App() {
 

  return (
    <>
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <div><img src="/hero-right-leaf.png" className='rightleaf absolute right-0 h-[20vh] top-80' alt="" /></div>
        <Cocktails/>
        <About/>
      </main>

    </>
  )
}

export default App
