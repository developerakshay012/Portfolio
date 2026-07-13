import React from 'react'
import { motion } from 'framer-motion'


const Contact = () => {
  return (
    <section className='py-16 md:py-20 relative z-10'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>

            <motion.div className='text-center mb-12 md:mb-16'>

                    <span className='inline-block px-4 py-2 glass dark:glass rounded-full'>GET IN TOUCH</span>

                    <h2 className='lg:text-5xl md:text-4xl text-3xl font-bold mb-5 mt-5 gradient-text'>Let's Work Together</h2>

                    <p>Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.</p>

            </motion.div>

        </div>
    </section>
  )
}

export default Contact