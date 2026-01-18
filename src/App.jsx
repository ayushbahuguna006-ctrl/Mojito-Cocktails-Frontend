import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'
import Cocktails from './components/Cocktails';





function App() {
 

  return (
    <>
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <div className='min-h-screen bg-black'></div>
      </main>

    </>
  )
}

export default App
