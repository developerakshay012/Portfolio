
import { useEffect } from 'react'
import './App.css'
import { initialTheme } from './Utils/theme'
import AnimateBg from './Components/AnimateBg'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Project from './Components/Project'
import Skill from './Components/Skill'
import Exprence from './Components/Exprence'
import Education from './Components/Education'
import About from './Components/About'
import Contact from './Components/Contact'
import { ToastContainer } from 'react-toastify'

function App() {
  
  useEffect(() => {
    initialTheme()
  }, [])

  return (
    <>
      <div className='min-h-screen grid-pattern html.dark .grid-pattern'>
          <ToastContainer
  position="top-right"
  autoClose={3000}
  theme="colored"
  newestOnTop
  style={{ zIndex: 999999 }} // <-- Forces it above fixed headers/navbars
/>
     
          <AnimateBg/>
          <Header/>

          <main>
            <Hero/>
             <Skill/>
             <Exprence/>
            <Project/>  
            <Education/>
            <About/>
            <Contact/>
           
            
          </main>

      </div>
    </>
  )
}

export default App
