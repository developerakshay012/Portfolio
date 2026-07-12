import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from './Work'
import { GiSkullCrossedBones } from "react-icons/gi";



const Project = () => {

  const [selectedProject , setSelectedProject] = useState(null)

  const handleOpenModal = (imge) => {
      setSelectedProject(imge)
  } 

  const handleCloseModal = (imge) =>{
    setSelectedProject(null)
  }

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

            <motion.div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                  {
                    projects.map((imge , index) => (
                      <motion.div
                       onClick={() => handleOpenModal(imge)}
                      className='rounded-xl backdrop-blur-md  overflow-hidden cursor-pointer glass dark:glass'
                      key={index.id}
                      >
                       <div className='p-4 '>
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

                  {/* modal container */}

                  {selectedProject && (
                    <div className='fixed inset-0 z-50 flex  items-center  justify-center glass dark:glass bg-opacity-90 '>

                      <div className='glass dark:glass rounded-xl  shadow-2xl lg:w-[80%] w-[90%] max-w-2xl overflow-hidden relative'>
                            <div className='flex items-center justify-end p-4'>
                                <motion.button
                                onClick={handleCloseModal}
                                className='glass dark:glass text-3xl font-bold hover:text-yellow-300'
                                >
                                  <GiSkullCrossedBones className='w-5 h-5 text-yellow-400 cursor-pointer'/>
                                </motion.button>
                            </div>

                        <div className='flex flex-col '>
                          <div className='w-full flex  justify-center '>
                                <img src={selectedProject.image} 
                                alt={selectedProject.title} 
                                className='lg:w-[80%] w-[90%]  rounded-xl shadow-2xl' />
                          </div>

                          <div className='lg:p-8 p-6'>
                                <h3 className='lg:text-xl mb-4 text-md font-bold text-center'>
                                  {selectedProject.title}
                                </h3>

                                <p className='mb-5 lg:text-base text-xs'>
                                  {selectedProject.description}
                                </p>
                          </div>

                        </div>

                      </div>

                    </div>  
                  )}

      </section>


          
    </>
    
  )
}

export default Project