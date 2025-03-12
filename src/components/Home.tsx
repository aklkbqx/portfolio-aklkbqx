'use client';

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Code, Laptop, Music, BookOpen, Coffee, Facebook, Github, Instagram } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';
import Image from "next/image";
import ProfileImage from "@/assets/images/profile_image.jpeg"

const Home = () => {
  const ref = useRef(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/aklkbqx/', color: 'hover:text-gray-700 dark:hover:text-gray-500' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/akalakkruaboon', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/akl.kbqx', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.7
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const skills = [
    { name: "Frontend", icon: <Code />, color: "from-blue-500 to-cyan-400" },
    { name: "Backend", icon: <Laptop />, color: "from-purple-500 to-indigo-500" },
    { name: "DevOps", icon: <Coffee />, color: "from-red-500 to-orange-400" },
    { name: "Music", icon: <Music />, color: "from-green-500 to-emerald-400" },
  ];

  return (
    <>
      <motion.div
        className="flex justify-center items-center h-screen bg-gray-200 dark:bg-gray-900 relative overflow-hidden"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-300 dark:to-gray-800 opacity-30"></div>

        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gray-400 dark:bg-gray-700 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 * (Math.random() > 0.5 ? 1 : -1)],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 5 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="text-center flex-col gap-4 flex z-10">
          <motion.h1
            className="text-[1.5rem] md:text-[3.5rem] xl:text-[5.5rem] tracking-[0.5rem] md:tracking-[1rem] lg:tracking-[2rem] text-gray-900 dark:text-gray-100 font-light"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.2,
                  ease: "easeOut"
                }
              }
            }}
          >
            AKALAK KRUABOON
          </motion.h1>

          <div className="text-sm md:text-xl xl:text-2xl tracking-[0.2rem] md:tracking-[0.4rem] xl:tracking-[0.6rem] text-gray-700 dark:text-gray-400">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.5
                  }
                }
              }}
              className="relative"
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent font-medium">FULLSTACK DEVELOPER</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.9
                  }
                }
              }}
            >
              Web & Mobile Application
            </motion.h1>
          </div>

          {/* Call to action buttons */}
          <motion.div
            className="flex gap-4 mt-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <Link href="/contact" className="px-6 py-2 border border-gray-700 dark:border-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-colors duration-300">
              CONTACT ME
            </Link>
            <Link href="/projects" className="px-6 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-opacity duration-300">
              MY WORKS
            </Link>
          </motion.div>
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
                delay: 1.5
              }
            }
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            initial="hidden"
            animate="animate"
            variants={{
              initial: { y: 0, opacity: 0 },
              animate: {
                y: [0, 10, 0],
                opacity: [1, 0.6, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            }}
            onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-200">Scroll Down</p>
            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-200" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900/90 py-20"
      >
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="container max-w-6xl px-5 flex-col md:flex-row flex mx-auto gap-8 md:gap-16 mb-10 md:mb-0"
        >
          <motion.div
            variants={itemVariants}
            className="h-[350px] w-full md:w-[350px] rounded-3xl mt-10 md:mt-0 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 shadow-md relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute inset-0 m-6 border-2 border-gray-400 dark:border-gray-500 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl">
                <Image
                  src={ProfileImage}
                  alt="Profile Image"
                />
              </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-gray-900 hover:scale-110 transition-transform ${social.color}`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  target="_blank"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col flex-1"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl tracking-wide font-light mb-6 text-gray-900 dark:text-gray-100"
            >
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-md md:text-xl font-light text-justify leading-relaxed text-gray-800 dark:text-gray-300"
            >
              <span className="ms-10">สวัสดีครับผมชื่อ</span> นายเอกลักษณ์ เครือบูรณ์ <span className="font-normal">(เอก)</span> อายุ 20 ปี มีความชอบและหลงไหลในด้านเทคโนโลยีสมัยใหม่ ฝึกฝนตนเองสม่ำเสมอจนกลายมาเป็น <span className="font-semibold text-blue-600 dark:text-blue-400">FullStack Developer</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Devops, Deploy Production </span>
              มีทักษะในการสร้างสรรค์และพัฒนา <span className="font-semibold text-cyan-600 dark:text-cyan-400">Web application, Mobile Application, Hardware Internet of Things (IoT), UX/UI </span>
              ผมเป็นคนที่ชอบศึกษาและเรียนรู้อย่างไม่หยุดนิ่ง ประสบการณ์ในวงการนี้แบบเต็มตัวประมาณ 1 ปี มีทั้งผลงานในด้านการแข่งขันและงาน Production
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10"
            >
              <h2 className="text-2xl font-light tracking-wide text-gray-900 dark:text-gray-100 mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} hover:shadow-lg transition-all cursor-pointer relative overflow-hidden group`}
                    whileHover={{ y: -5 }}
                  // onMouseEnter={() => setHoveredSkill(skill.name)}
                  // onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="absolute inset-0 bg-white dark:bg-gray-900 transform transition-transform duration-300 group-hover:translate-y-full"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center dark:text-white hover:text-white">
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <div className="font-medium tracking-wide">{skill.name}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl tracking-wide font-light mt-10 mb-4 text-gray-900 dark:text-gray-100"
            >
              Hobby
            </motion.h1>

            <motion.ul
              variants={itemVariants}
              className="space-y-3 font-light text-md md:text-lg leading-relaxed text-gray-800 dark:text-gray-300"
            >
              {[
                { text: "ฟัง Pod Cast และ พัฒนา Life Style", icon: <BookOpen className="w-5 h-5" /> },
                { text: "หาข้อมูลความรู้ในสิ่งที่มีประโยชน์ในการพัฒนาทักษะในด้านต่างๆ (Programming Skills, Musical Skills)", icon: <Laptop className="w-5 h-5" /> },
                { text: "ฟังเพลง ร้องเพลง เขียนเพลง ทำเพลงเป็นของตนเอง และรับงานทำเพลง ด้านดนตรี", icon: <Music className="w-5 h-5" /> },
              ].map((hobby, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 p-2 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-md transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="mt-1 text-blue-500 dark:text-blue-400">{hobby.icon}</span>
                  <span>{hobby.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="mt-10"
            >
              <Link
                href="/projects"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg"
              >
                View My Projects
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;