import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { socialPlatforms } from "./Work";
import Akshay from '../assets/akshay.png'
import Lottie from "react-lottie-player";
import lottieJson from '../lottieYellow.json'



const Hero = () => {
  return (
    <section
      className="min-h-screen relative z-10  flex items-center pt-10 "
      id="home"
    >
      {/* container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* left */}
          <div className="order-2 lg:order-1  text-center lg:text-left ">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="inline-block px-4 py-2 glass dark:glass rounded-full text-yellow-200 font-medium mb-4"
            >
              SOFTWERE DEVELOPER
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-3"
            >
              <span className="text-yellow-600">Hi, I'm Akshay </span>
              <span className="block">MERN Developer</span>
            </motion.h1>

            <motion.p 
            initial={{ opacity: 0,}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="font-semibold text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 "
              >
            Passionate Full Stack Developer crafting responsive, scalable modern technologies
            </motion.p>

            {/* buttons */}

            <motion.div 
            initial={{opacity:0 , y:30}}
            whileInView={{opacity:1 , y:0}}
            transition={{delay:0.3 , duration:0.8}}
            viewport={{once:false, amount:0.3}}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">

              <motion.a 
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
              href="#work"
              className="bg-gradient-to-r from-gray-700 to-yellow-400 px-6 py-3 flex font-bold items-center rounded-full cursor-pointer">
                View My Work
                <FaArrowRight className="ml-2"/>
                </motion.a>

               <motion.a
               whileHover={{scale:1.08}}
              whileTap={{scale:0.95}}
              href="#contact"
               className="border-2 border-yellow-300 hover:bg-gradient-to-r from-gray-700 to-yellow-400 px-6 py-3 font-bold flex items-center rounded-full cursor-pointer">
                Get In Touch
                < MdTouchApp className="ml-2 w-7 h-5" />
                </motion.a>

                
              
            </motion.div>


            {/* socail icons */}

            <motion.div
            initial={{opacity:0 }}
                whileInView={{opacity:1 , x:10}}
                transition={{delay:0.3 , duration:0.8}}
                viewport={{once:false , amount:0.3}}
                className="mt-5 flex items-center lg:justify-start space-x-6"
                >
              {
              socialPlatforms.map((media , index) => (
                <motion.a
                 target="_blank"
                 rel="noopener noreferrer"
                href={media.href}
                key={index}
                whileHover={{scale:1.1}}
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full glass dark:glass flex items-center justify-center"
                >
                  <media.icon/>
                </motion.a>
              ))
              }

            </motion.div>

          </div>

              {/* right */}

              <div className="order-1 lg:order-2 flex justify-center items-center relative ">

                  <motion.div 
                  initial={{opacity:0 , scale:0.8}}
                  whileInView={{opacity:1 , scale:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false , amount:0.3}}

                  className="relative w-90 h-100 sm:w-80 sm:h-80 md:w-90 md:h-100">
                  <motion.div 
                  className="inset-0 absolute rounded-3xl overflow-hidden">
                      <img src={Akshay} alt=""   className="object-cover   rounded-xl"/>
                  </motion.div>

                    <motion.div 
                    
                   className="absolute -bottom-20 -right-5 w-40   rounded-xl glass data:glass border-2 border-amber-300 overflow-hidden" >
                      <p className="text-center mt-2 text-amber-200 font-bold">SOFTWERE DEVELOPER</p>
                      <Lottie animationData={lottieJson} play loop />
                    </motion.div>

                  </motion.div>

              </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
