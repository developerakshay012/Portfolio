import React from 'react'
import { motion } from 'framer-motion'

const Exprence = () => {
  return (
    <section id='exprience' className='py-10 pb-5  px-[12vw] md:px-[7vw] lg:px-[16vw]'>

        {/* exprience title */}

        <motion.div
         initial={{opacity:0 , scale:0.8}}
                  whileInView={{opacity:1 , scale:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false , amount:0.3}}
        className='text-center mb-16'>
            <h2 className='uppercase lg:text-4xl md:text-2xl sm:text-5xl font-bold text-yellow-300 '>Exprience</h2>
            <div className='w-50 h-1 mx-auto pt-2 bg-yellow-300 mt-2 rounded-sm'></div>
            <p className='text-[17px] pt-3 font-semibold'>
              A timeline of my work experience, highlighting the roles, responsibilities, and achievements throughout my career.
            </p>
        </motion.div>


    </section>
  )
}

export default Exprence