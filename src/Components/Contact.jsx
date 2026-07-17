import React from 'react'
import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { MdPhone } from 'react-icons/md'
import { MdLocationOn } from "react-icons/md";
import { socialPlatforms } from './Work';


const Contact = () => {

    const contactInfo  = [
      {icon: <MdEmail className='w-6 h-6'/> ,title:'Email', value:"720akshaykumar@gmail.com"},
      {icon: <MdPhone className='w-6 h-6'/> ,title:'Phone', value:"8252608790"},
      {icon: <MdLocationOn className='w-6 h-6'/> ,title:'Location', value:"Mohali  , Punjab"}
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

            <motion.div>
                <div className="max-w-4xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden glass dark:glass border border-amber-300">
                      <div className='grid grid-cols-1 lg:grid-cols-2'>
                            
                            <motion.div className='p-6 md:p-8 lg:p-12  glass dark:glass'>
                                  <h1 className='text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center'>
                                    Contact Information
                                  </h1>

                                <div className='space-y-4 md:space-y-6'>
                                  {contactInfo.map((item,index) => (
                                    <motion.div 
                                    key={index}
                                    whileHover={{scale:1.05}}
                                    className='flex items-start'>
                                      <div className='mt-2 shrink text-yellow-500'>{item.icon} </div>
                                      <div className='ml-3 md:ml-4 '>
                                        <h4 className='text-base md:text-lg font-medium'>{item.title}</h4>
                                     
                                      <p className='text-sm  md:text-md'>{item.value}</p>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
 
                                <div className='mt-8 md:mt-12'>
                                    <h4 className='text-lg md:text-md font-bold mb-3 md:mb-4'>
                                      FOLLOW ME
                                    </h4>

                                  <div className='flex items-start gap-4'>
                                    {socialPlatforms.map((platForm) => (
                                      <motion.a
                                      whileHover={{scale:1.03}}
                                      key={platForm}
                                      className='w-8 h-8  md:w-10 rounded-full glass dark:glass flex items-center justify-center '
                                      href={platForm.href}>   
                                       <platForm.icon/>
                                      </motion.a>
                                    ))}
                                  </div>

                                </div>
                                  
                            </motion.div>

                            {/* contact infor mation */}

                            <motion.div className='p-6 md:p-8 lg:p-12 ' 
                            initial={{opacity:0,x:50}}
                            whileInView={{opacity:1 , x:0 , transition:{duration:0.8}}}
                            viewport={{once:false}}
                            >

                                    <form action="" className='flex flex-col space-x-6 space-y-5 '>

                                      <div>
                                        
                                      </div>
                                     

                                      <motion.button
                                      whileHover={{scale:1.03}}
                                      type='submit'
                                      className='w-full px-6 py-5 rounded-full font-bold
                                      bg-gradient-to-r font-bold from-[#ff8a00] via-[#ffb300] via-50% to-[#ffd54f]
                                      '
                                      >
                                          Send Message
                                      </motion.button>

                                    </form>

                            </motion.div>

                      </div>
                </div>
            </motion.div>

        </div>
    </section>
  )
}

export default Contact