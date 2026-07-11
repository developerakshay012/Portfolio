import React from 'react'
import { motion } from 'framer-motion'
import { projects } from './Work'

const Project = () => {

  const varient = {
    hiddem:{},
    show:{
      transition:{
        straggerChildren:0.15
      }
    }
  }

  const cardVerient = {
    hidden:{opacity:0,y:60},
    show:{opacity:1 , y:0 , transition:{duration:0.6}}
  }

  const linkVarient = {
    hover:{x:6 , transition: {type:'spring' , stiffness:300}},
  }


  const buttonVerient = {
    hover:{scale:1.06 , transition:{type:'spring' , stiffness:300}}
  }

  return (
    
    <>
      <section id='word'
      className='py-10 md:y-20 relative z-10'>
        <div className='max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8'>

          <motion.div
          className='text-center mb-12 md:mb-16'
          >
            <span className='inline-block px-4 py-2 glass dark:glass rounded-full text-yellow-300 uppercase'>project</span>
                  <h2 className='text-3xl sm:4xl md:text-5xl font-bold mt-3 text-yellow-400'>
                        Intrective Project
                  </h2>
              <p className='font-bold text-sm md:text-xl lg:text-md mt-3 '>
                Building scalable MERN applications with clean code and modern technologies.
              </p>

          </motion.div>

          {/* project image  */}

            <motion.div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                  {
                    projects.map((imge , index) => (
                      <motion.div
                      className='border-2 border-yellow-300 rounded-xl backdrop-blur-md  overflow-hidden cursor-pointer glass dark:glass'
                      key={index}
                      >
                       <div className='p-4'>
                         <img src={imge.image} alt=""  className='rounded-xl '/>
                       </div>

                      {/* description section */}
                       <div className='p-4'>
                            <h3 className='text-[18px] font-bold text-center '>{imge.title}</h3>

                            <p className='mb-4 pt-5 line-clamp-2'>{imge.description}</p>

                        <div className='p-4'>
                          {
                            imge.tags.map((tag,index) => (
                              <motion.span className='inline-block text-xs text-yellow-300 rounded-full px-2 py-1 mr-2 mb-2 glass'>
                                  {tag}
                              </motion.span>
                            ))
                          }
                        </div>

                       </div>
                      </motion.div>
                    ))
                  }
            </motion.div>


        </div>
      </section>


          
    </>
    
  )
}

export default Project