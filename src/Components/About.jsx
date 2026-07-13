import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../lottieYellow.json'
import { motion } from 'framer-motion'
import { MdDownload } from "react-icons/md";

const About = () => {
  return (

    <section className='py-20  md:py-5 relative z-10 mt-10'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>

            <motion.div
            initial= 'hidden'
            whileInView='show'
            viewport={{once:false , amount:0.2}}
            className='flex flex-col lg:flex-row gap-8 md:gap-12 items-center '>

                <motion.div className='lg:w-1/2'
                    variants={{
                        hidden:{opacity:0 , x:-50},
                        show:{opacity:1 , x:0 ,transition:{duration:0.8}}
                    }}
                >

                    <div className='holographic rounded-2xl md:rounded-3xl overflow-hidden p-6  md:p-8 glass dark:glass border border-neo-primary/20'>
                        <div className='relative aspect-square'>
                            <Lottie
                            className='bg-transparent'
                            loop
                            animationData={lottieJson}
                            play
                            style={{width:'100%' , height:'100%'}}
                            />
                        </div>
                    </div>

                </motion.div>

                <motion.div
                variants={{
                        hidden:{opacity:0 , x:-50},
                        show:{opacity:1 , x:0 ,transition:{duration:0.8}}
                    }}
                className='lg:w-1/2'>
                   <h1 className="w-fit mx-auto px-4 py-2 glass dark:glass rounded-full text-amber-400 font-medium mb-4">
  MY JOURNEY
</h1>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 w-fit mx-auto'><span className='gradient-text'>ABOUT ME</span></h2>
                    <p className='text-md md:text-xl mb-2 md:mb-6'>I'm a passionate MERN Stack Developer eager to build modern, responsive, and user-friendly web applications. As a fresher, I have developed a strong foundation in MongoDB,</p>

                    <p className='text-md md:text-xl mb-2 md:mb-8'>I enjoy solving real-world problems with clean, efficient code and am always excited to explore new technologies and best practices. My goal is to create scalable, </p>
                

                {/* button */}

                <div className='flex flex-wrap gap-3 md:gap-4'>
                    <motion.a
                    href='#'
                    whileHover={{scale:1.05}}
                    className='bg-linear-to-r font-bold from-[#ff8a00] via-[#ffb300] via-50% to-[#ffd54f] px-6 md:px-8 py-3 rounded-full'
                    >
                        Lets Collaboreate
                    </motion.a>

                    <motion.a 
                    href='#'
                      whileHover={{scale:1.05}}
                    className='px-6 md:px-8 py-3 glass dark:glass rounded-full font-bold flex justify-between items-center gap-2'>
                        DownLoad CV
                        <MdDownload className='h-5 w-5' />
                    </motion.a>

                </div>


                </motion.div>

            </motion.div>

        </div>

    </section>

  )
}

export default About