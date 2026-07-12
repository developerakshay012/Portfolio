
import { useEffect } from 'react'
import './App.css'
import { initialTheme } from './Utils/theme'
import AnimateBg from './Components/AnimateBg'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Project from './Components/Project'
import Skill from './Components/Skill'

function App() {
  
  useEffect(() => {
    initialTheme()
  }, [])

  return (
    <>
      <div className='min-h-screen grid-pattern html.dark .grid-pattern'>
          <AnimateBg/>
          <Header/>

          <main>
            <Hero/>
            <Project/>  
            <Skill/>
          </main>

      </div>
    </>
  )
}

export default App
