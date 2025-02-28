import { motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 relative">
      <div className="text-center flex-col gap-5 flex ">
        <motion.h1
          className="text-[5rem] tracking-[2rem]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                ease: "easeOut"
              }
            }
          }}
        >
          AKALAK KRUABOON
        </motion.h1>

        <div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.5
                }
              }
            }}
            className="text-xl tracking-[0.5rem] dark:text-white text-dark">FULLSTACK DEVELOPER</motion.h1>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.8
                }
              }
            }}
            className="text-xl tracking-[0.5rem]">Web & Mobile Application</motion.h1>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              delay: 0.8
            }
          }
        }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          initial="hidden"
          animate="animate"
          variants={{
            initial: { y: 0, opacity: 0 },
            animate: {
              y: [0, 10, 0],
              opacity: [1, 0.5, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          }}
        >
          <p className="text-sm text-gray-600">Scroll Down</p>
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;