import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from './Work'
import { GiSkullCrossedBones } from "react-icons/gi";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = (imge) => {
    setSelectedProject(imge)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  // Orchestrates the staggered entry of children cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  // Animation for individual project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', duration: 0.6 } 
    },
    hover: {
      y: -8,
      boxShadow: "0px 10px 30px rgba(250, 204, 21, 0.2)",
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  }

  // Spring animation for buttons and link clicks
  const buttonVariants = {
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
    tap: { scale: 0.95 }
  }

  return (
    <>
      <section id='project' className='py-10 md:py-20 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

          {/* Header section with text fade-in */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
             transition={{delay:0.6 , duration:0.8}}
            viewport={{once:false, amount:0.3}}

            initial={{opacity:0 , scale:0.8}}
                  whileInView={{opacity:1 , scale:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false , amount:0.3}}
            className='text-center mb-12 md:mb-16'
          >
            <span className='inline-block px-4 py-2 glass dark:glass rounded-full gradient-text uppercase text-[15px] font-bold tracking-wider'>
              project
            </span>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mt-3 gradient-text'>
              Interactive Projects
            </h2>
            <p className='font-bold text-sm md:text-xl lg:text-md mt-3'>
              Building scalable MERN applications with clean code and modern technologies.
            </p>
          </motion.div>

          {/* Project Grid with Staggered Load */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
             transition={{delay:0.6 , duration:0.8}}
           
            className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          >
            {projects.map((imge, index) => (
              <motion.div

              initial={{opacity:0 , scale:0.8}}
                  whileInView={{opacity:1 , scale:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false , amount:0.3}}

                variants={cardVariants}
                whileHover={{scale:1.02}}
                transition={{delay:0.6 , duration:0.8}}
            
                onClick={() => handleOpenModal(imge)}
                className='rounded-xl backdrop-blur-md overflow-hidden cursor-pointer glass dark:glass flex flex-col justify-between px-5 py-10'
                key={imge.id || index} // Fixed key tracking bug
              >
                <div>
                  <motion.div 
                  whileHover={{scale:1.04}}
                  transition={{delay:0. , duration:0.8}}
            
                  className='p-4'>
                    <img src={imge.image} alt={imge.title} className='rounded-xl w-full object-cover aspect-video' />
                  </motion.div>

                  {/* Description Section */}
                  <div className='p-4 pt-0'>
                    <h3 className='text-[18px] font-bold text-center text-yellow-400'>{imge.title}</h3>
                    <p className='mb-4 pt-3 text-sm line-clamp-2 opacity-90'>{imge.description}</p>
                    
                    <div className='flex flex-wrap gap-1 mb-2'>
                      {imge.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className='inline-block text-xs text-yellow-300 rounded-full px-2 py-1 glass'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className='p-4 pt-0 flex gap-3 mt-auto'>
                  <motion.a 
                    href={imge.github} 
                    target='_blank' 
                    rel='noreferrer'
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={(e) => e.stopPropagation()} // Prevents opening modal when clicking the button
                    className='w-1/2 glass dark:glass text-yellow-400 lg:px-3 lg:py-2 px-2 py-1 rounded-xl lg:text-md text-sm font-semibold text-center block'
                  >
                    View Code
                  </motion.a>
                  <motion.a 
                    href={imge.webapp} 
                    target='_blank' 
                    rel='noreferrer'
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={(e) => e.stopPropagation()} // Prevents opening modal when clicking the button
                    className='w-1/2 glass dark:glass text-yellow-400 lg:px-3 lg:py-2 px-2 py-1 rounded-xl lg:text-md text-sm font-semibold text-center block'
                  >
                    Live Preview
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal Container with AnimatePresence for smooth exit animations */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className='fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm px-4'
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside it
                className='glass dark:glass rounded-xl shadow-2xl lg:w-[80%] w-[90%] max-w-lg relative flex flex-col max-h-[90vh] mt-20 overflow-hidden '
              >
                {/* Close Button Row */}
                <div className='flex items-center justify-end p-4 absolute top-0 right-0 z-10'>
                  <motion.button
                    initial={{scale:0}}
                        animate={{scale:1}}
                        whileHover={{
                          rotate:180,
                          scale:1.1
                        }}
                    onClick={handleCloseModal}
                    className='glass dark:glass p-2 rounded-full text-3xl font-bold hover:text-yellow-300'
                  >
                    <GiSkullCrossedBones className='w-5 h-5 text-yellow-400 cursor-pointer'/>
                  </motion.button>
                </div>

                <div className='overflow-y-auto p-6 pt-16'>
                  <div className='w-full flex justify-center mb-6'>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className='w-full max-h-[250px] object-cover rounded-xl shadow-2xl' 
                    />
                  </div>

                  <div className='flex flex-col'>
                    <h3 className='lg:text-2xl text-xl font-bold text-center text-yellow-400 mb-3'>
                      {selectedProject.title}
                    </h3>

                    <p className='mb-6 lg:text-base text-sm opacity-90 leading-relaxed max-h-[50px] overflow-y-hidden pr-1'>
                      {selectedProject.description}
                    </p>

                    <div className='flex flex-wrap gap-2 mb-6'>
                      {selectedProject.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className='inline-block text-xs text-yellow-300 rounded-full px-2 py-1 glass'>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className='flex gap-4 mt-auto'>
                      <motion.a 
                        href={selectedProject.github} 
                        target='_blank' 
                        rel='noreferrer'
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className='w-1/2 glass dark:glass text-yellow-400 lg:px-6 lg:py-2.5 px-2 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center block'
                      >
                        View Code
                      </motion.a>
                      <motion.a 
                        href={selectedProject.webapp} 
                        target='_blank' 
                        rel='noreferrer'
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className='w-1/2 glass dark:glass text-yellow-400 lg:px-6 lg:py-2.5 px-2 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center block'
                      >
                        Live Preview
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>  
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

export default Project