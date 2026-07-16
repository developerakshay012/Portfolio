import React from 'react'
import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'


const Contact = () => {

    const contactInfo  = [
      {icon: <MdEmail className='w-6 h-6'/> ,title:'Email', value:"720akshaykumar@gmail.com"},
      {icon: <MdPhone className='w-6 h-6'/> ,title:'Email', value:"720akshaykumar@gmail.com"},
      {icon: <MdLocation className='w-6 h-6'/> ,title:'Email', value:"720akshaykumar@gmail.com"}
    ]

  return (
    <section className='py-16 md:py-20 relative z-10'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>

            <motion.div 
            initial={{opacity:0 , y:20}}
            whileInView={{opacity:1 , y:0 ,transition:{duration:0.8}}}
            viewport={{once:false}}
            className='text-center mb-12 md:mb-16'>

                    <span className='inline-block px-4 py-2 glass dark:glass rounded-full'>GET IN TOUCH</span>

                    <h2 className='lg:text-5xl md:text-4xl text-3xl font-bold mb-5 mt-5 gradient-text'>Let's Work Together</h2>

                    <p className='lg:text-lg md:text-md sm:text-xl font-medium'>I'm always open to new opportunities, collaborations, and learning experiences. Feel free to reach.</p>

            </motion.div>

        </div>
    </section>
  )
}

export default Contact