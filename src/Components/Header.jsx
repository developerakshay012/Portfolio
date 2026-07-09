import React from 'react'
import { motion } from 'framer-motion'



const Header = () => {
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

            </div>
          </div>

        </motion.nav>



    </>
  )
}

export default Header