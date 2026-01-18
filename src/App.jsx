import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'





function App() {
 

  return (
    <>
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <div className='min-h-screen'></div>
      </main>

    </>
  )
}

export default App
