import React, { useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "./Work";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../Utils/theme";
import { FiMenu } from "react-icons/fi";
import { GiCrossedSwords } from "react-icons/gi";


const Header = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  const [isOpen , setIsOpen] = useState(false)

  const handleToggle = () => {
    const currentTheme = toggleTheme();
    setIsDark(currentTheme);
  };

  return (
    <>
      {/* navbar */}

      <motion.nav
        initial={{ y: -50, opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ y: 0, opacity: 1, backdropFilter: "blur(20px)" }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="fixed w-full z-50 shadow-xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-white/20 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-4">
          <div className="flex justify-between items-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold cursor-pointer gradient-text uppercase"
            >
              Lazycoder
            </motion.span>

            {/* menu items of desktop */}

            <div className="hidden  lg:flex items-center  space-x-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="relative group hover:text-neo-secondary font-bold"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{ y: -3 }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* reume buttom */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 10px rgba(255, 215, 0, 0.6)",
                }}
                className="px-4 py-1 rounded-full border dark:border-gray-300 font-semibold cursor-pointer"
              >
                Resume
              </motion.button>

              {/* theme toggle button */}
              <motion.button
                onClick={handleToggle}
                className="w-10 h-10 rounded-full glass dark:glass flex items-center  justify-center  cursor-pointer"
                whileTap={{ scale: 0.8, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {isDark ? (
                  <FaMoon className="h-5 w-5 text-yellow-300 cursor-pointer" />
                ) : (
                  <FaSun className="h-5 w-5 text-gray-400 cursor-pointer" />
                )}
              </motion.button>

                </div>

              {/* mobile view */}
              <div className="lg:hidden flex items-center space-x-5">
                <motion.button
                  onClick={handleToggle}
                  className="w-10 h-10 rounded-full glass dark:glass flex items-center  justify-center  cursor-pointer"
                  whileTap={{ scale: 0.8, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {isDark ? (
                    <FaMoon className="h-5 w-5 text-yellow-300 cursor-pointer" />
                  ) : (
                    <FaSun className="h-5 w-5 text-gray-400 cursor-pointer" />
                  )}
                </motion.button>

                  <button onClick={() => setIsOpen(true)}
                    className=" p-2 rounded-full glass dark:glass">

                    <FiMenu className="w-6 h-6 text-gray-400 "/>
                  </button>

              </div>









            </div>
        
        </div>
      </motion.nav>

                  {/* nav menu */}

                  {isOpen && (
                    <motion.div 
                      initial={{backdropFilter:'blur(0px)' , opacity:0}}
                      animate={{backdropFilter:'blur(20px)' , opacity:1}}
                    className="fixed inset-0 z-50 flex items-center justify-center">

                        <motion.div 
                        initial ={{y:90 , opacity:0}}
                        animate={{y:0 , opacity:1}}
                        transition={{duration:0.5 , ease:"easeInOut"}}
                        className="space-y-10 text-center">
                              {navItems.map((item ,index) => (
                                
                                <motion.a 
                                onClick={()=> setIsOpen(false)}
                                href={item.href}
                                key={item.label} 
                                initial={{opacity:0 , scale:0.8}}
                                animate={{opacity:1 , scale:1}}
                                transition={{delay:0.1 , index ,type:"spring" , stiffness:120}}
                                className="block text-[20px] font-semibold hover:text-yellow-300">
                                  {item.label}
                                </motion.a>

                                

                              ) )}

                              <motion.button 
                              className="text-[20px] font-semibold hover:text-yellow-300 px-5 py-2 rounded-md bg-yellow-400 ">
                                  Resume  
                              </motion.button>

                        </motion.div>

                        {/* close btn */}

                        <motion.button
                        onClick = {() => setIsOpen(false)}
                        initial={{scale:0}}
                        animate={{scale:1}}
                        whileHover={{
                          rotate:180,
                          scale:1.1
                        }}
                         className="absolute top-8 right-8 p-4 rounded-full glass dark:glass cursor-pointer">
                                <GiCrossedSwords className = 'w-5 h-5'/>
                        </motion.button>


                    </motion.div>
                  ) }







    </>
  );
};

export default Header;
