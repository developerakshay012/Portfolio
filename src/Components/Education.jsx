import React from 'react'
import { motion } from 'framer-motion'
import { experiences } from './Work'
import { education } from './Work'


const Education = () => {


  const skillVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.3, type: 'spring', stiffness: 200 }
  })
}

  return (

    <section id='education' className='py-20 pb-5  px-[12vw] md:px-[7vw] lg:px-[16vw]'>

        {/* exprience title */}

        <motion.div
         initial={{opacity:0 , scale:0.8}}
                  whileInView={{opacity:1 , scale:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false , amount:0.3}}
        className='text-center mb-16'>
            <h2 className='uppercase lg:text-4xl md:text-2xl text-5xl font-bold gradient-text'>Education</h2>
            <div className='w-30  mx-auto h-1 bg-yellow-300  rounded-sm'></div>
            <p className='text-[17px] pt-3 font-semibold'>
             The educational milestones that have strengthened my foundation in computer science, technology, and software development.
            </p>
        </motion.div>

        <motion.div className='relative'>

          <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1  h-full bg-yellow-300'>
          </div>

          {
            // exprience entries
            education.map((edu , index) => (
              <motion.div
              initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{delay:0.6 , duration:0.8}}
            viewport={{once:false, amount:0.3}}

            initial={{opacity:0 , scale:0.8}}
                  whileInView={{opacity:1 , scale:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false , amount:0.3}}
              className={`flex  rela flex-col sm:flex-row items-center mb-16 ${index %2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
              key={index}>

              {/* timelinw circlw */}
                <div className='absolute sm:left-1/2 left-0  transform -translate-x-1/2 bg-gray-400 border-4 border-amber-400/80 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 '>
                  <img
                   src={edu.img} 
                   alt={edu.school} 
                  className='w-full h-full object-cover rounded-full'/>
                </div>

                {/* content section */}
                <div className={`w-full sm:max-w-md p-4 sm:p-4 rounded-2xl shadow-2xl border border-glass dark:glass backdrop-blur-md ${index %2 === 0 ? "sm:ml-0" : "sm:mr-0" }   transition transform duration-300`}>

                {/* flex container img nd text */}

                    <div className={`flex items-center `}>

                        <div className='w-16 h-16 rounded-md overflow-hidden flex '>
                            <img src={edu.img} alt={edu.school}  className='w-full h-full object object-cover'/>
                        </div>


                        <div className='flex flex-col justify-between'>

                              <div className='lg:m-2'>
                                <h3 className='text-xl sm:text-2xl font-semibold'>{edu.school}</h3>
                                <h4 className='text-md sm:text-sm'>{edu.date}</h4>
                              </div>

                              {/* exp date */}

                              <p className='sm:text-md text-sm mt-2'>{edu.grade}</p>

                        </div>
                    </div>


                    <p className='sm:p-2'>{edu.description}</p>

                    

                   

                </div>


              </motion.div>

            ))
          }


        </motion.div>


    </section>

  )
}

export default Education