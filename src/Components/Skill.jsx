import React from 'react'
import { SkillsInfo } from './Work'
import { motion } from 'framer-motion'

const Skill = () => {
  // Parent container variants for staggered children load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays the appearance of each card slightly for a clean cascade effect
      },
    },
  }

  // Individual card animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 60, damping: 15 } 
    },
  }

  // Individual skill pill hover animation
  const pillHover = {
    hover: {
      scale: 1.05,
      backgroundColor: 'rgba(251, 191, 36, 0.1)', // Light amber tint on hover
      borderColor: '#fbbf24',
      transition: { duration: 0.2 },
    },
  }

  return (
    <section 
      id='skills' 
      className='py-20 pb-24 px-[6vw] sm:px-[8vw] lg:px-[10vw] overflow-hidden'
    >
      {/* Header Section */}
      <motion.div 
      
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}

        
      >
          <motion.div  initial={{opacity:0 , scale:0.8}}
                  whileInView={{opacity:1 , scale:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false , amount:0.3}}>
            <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold gradient-text'>
          Skills
        </h2>
        <div className='w-24 h-1 bg-yellow-400 mx-auto mt-2'></div>

        <p className='text-glass font-semibold text-center text-base sm:text-lg mt-4 max-w-2xl mx-auto opacity-90'>
          My technical toolkit, refined through continuous learning, practical projects, and real-world development.
        </p>
          </motion.div>

      </motion.div>

      {/* Skills Container Grid */}
      <motion.div 

        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 py-12'
      >
        {SkillsInfo.map((skill, index) => (
          <motion.div     

          initial={{opacity:0 , scale:0.8}}
                  whileInView={{opacity:1 , scale:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false , amount:0.3}}

         whileHover={{
  y: -10,
  scale: 1.01,
  transition: {
    duration: 0.35,
    ease: "easeOut",
  },
}}

            key={index}
            variants={cardVariants}
            className='glass dark:glass backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-100/20 shadow-xl flex flex-col justify-between'
          >
            <h3 className='text-xl sm:text-2xl font-bold text-center mb-6 text-glass dark:glass'>
              {skill.title}
            </h3>

            {/* Sub-grid for internal items */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
              {skill.skills.map((tool) => (
                <motion.div 
                  key={tool.name} 
                  variants={pillHover}
                  whileHover="hover"
                  className='flex items-center justify-start space-x-3 bg-transparent border  rounded-2xl py-2.5 px-3 cursor-pointer'
                >
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name}`}
                    className='w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0'
                  />
                  <span className='text-xs sm:text-sm font-medium text-glass dark:glass truncate'>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skill