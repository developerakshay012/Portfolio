import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { navItems  } from './Work'
import { FaMoon, FaSun } from 'react-icons/fa'
import { toggleTheme } from '../Utils/theme'


const Header = () => {


      const [isDark , setIsDark] = useState(true)


      const toggleButton = () =>{ 
        toggleTheme()
        setIsDark(!isDark)
      }


  return (
    <>
        {/* navbar */}
    
        <motion.nav
          initial = {{ y: -50 , opacity:0 ,backdropFilter:'blur(0px)' }}
          animate ={{y:0 , opacity:1 , backdropFilter:'blur(20px)'}}
          transition={{
            duration:0.6,
            ease:"easeInOut"
          }}

          className='fixed w-full z-50 shadow-xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-white/20 dark:border-white/10'
        >

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-4'>
            <div className='flex justify-between items-center'>

              <motion.span
                initial={{opacity:0 , x:-20}}
                animate={{opacity:1, x:0}}
                transition={{duration:0.7}}
                whileHover={{scale:1.05}}
                className='text-2xl font-bold cursor-pointer gradient-text'
              >
                      AKSHAY
              </motion.span>


              {/* menu items of desktop */}

                <div className='hidden  lg:flex items-center  space-x-10'>
                    {
                      navItems.map((item , index) => (
                        <motion.a
                          key={item.label}
                          href={item.href}
                          className='relative group hover:text-neo-secondary'
                          initial={{opacity:0 , y:-15}}
                          animate={{opacity:1 , y:0}}
                          transition={{
                            type:"spring",
                            stiffness:120
                          }}
                          whileHover={{y:-3}}
                        >
                          {item.label}
                        </motion.a>

                      ))
                    }

                    {/* reume buttom */}

                    <motion.button
                    whileHover={{
                      scale:1.03,
                      boxShadow:"0 0 10px rgba(255, 215, 0, 0.6)"
                    }}

                    className='px-4 py-1 rounded-full border dark:border-gray-300 font-semibold cursor-pointer'
                    >
                      Resume
                    </motion.button>


                    {/* theme toggle button */}
                    <motion.button
                    className='w-10 h-10 rounded-full glass dark:glass flex items-center  justify-center '
                    >
                      {isDark ? (<FaSun className='h-5 w-5 text-yellow-300 cursor-pointer' />) : ( <FaMoon/>) }
                      
                     
                      
                    </motion.button>

                </div>





            </div>
          </div>

        </motion.nav>



    </>
  )
}

export default Header