'use client';

import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import BackButton from "@/components/BackButton";
import ProjectImage01 from "@/assets/images/projects/01.png"
import ProjectImage02 from "@/assets/images/projects/02.png"
import ProjectImage03 from "@/assets/images/projects/03.png"
import ProjectImage04 from "@/assets/images/projects/04.png"
import ProjectImage05 from "@/assets/images/projects/05.png"
import ProjectImage06 from "@/assets/images/projects/06.png"
import ProjectImage07 from "@/assets/images/projects/07.png"
import ProjectImage08 from "@/assets/images/projects/08.png"
import ProjectImage09 from "@/assets/images/projects/09.png"
import ProjectImage10 from "@/assets/images/projects/10.png"

const Projects = () => {
    const projectsRef = useRef(null);
    const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.1 });
    const [activeFilter, setActiveFilter] = useState('all');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
                duration: 0.6
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const categories = [
        { id: 'all', name: 'ทั้งหมด' },
        { id: 'web', name: 'เว็บแอปพลิเคชัน' },
        { id: 'mobile', name: 'โมบายล์แอป' },
        { id: 'iot', name: 'IoT' },
        // { id: 'ux/ui', name: 'UX/UI' },
        { id: 'hardware', name: 'ฮาร์ดแวร์' },
        { id: 'game', name: 'เกม' },
    ];

    const projects = [
        {
            id: 1,
            title: "Mobile Application การท่องเที่ยวเชิงสุขภาพ อำเภอแม่ออน จังหวัดเชียงใหม่ “Mae-On Wellness City” ",
            description: "โปรเจ็คร่วมกับคณะเศรษฐศาสตร์ มหาวิทยาลัยเชียงใหม่ ภายใต้โครงการขับเคลื่อนเพื่อเพิ่มศักยภาพเศรษฐกิจชุมชนด้วยการท่องเที่ยวเชิงสุขภาพ (Wellness Tourism) กรณีศึกษา Mae-On Wellness City โดยวิธีเฉพาะเจาะจง โดยผมเป็นผู้พัฒนาแอปพลิเคชัน พร้อมลงใน App Store (IOS) และ Play Store (Android) เป็นโปรเจ็คที่ใหญ่ที่สุดสำหรับผมในตอนนี้ เพราะนอกจากพัฒนาโปรแกรมเองคนเดียวแล้วต้อง Maintenance Server งานนี้ได้รับประสบการณ์ในด้านงาน Production ทำให้ผมได้พัฒนาตนเองแบบก้าวกระโดด",
            image: ProjectImage01,
            categories: ["mobile"],
            techStack: ["React Native", "Expo", "Bun.js", "Elysia.js"],
            year: "2024"
        },
        {
            id: 2,
            title: "Mobile Application สื่อการเรียนการสอนออนไลน์ รูปแบบหนังสือเรียน",
            description: "โปรเจ็คพัฒนา Application สื่อการเรียนการสอนออนไลน์ รูปแบบหนังสือเรียนออนไลน์ สามารถอ่านหนังสือได้ฟรีผ่าน Application มีระบบหลังบ้านในการ เพิ่ม ลบ แก้ไขหนังสือ ",
            image: ProjectImage02,
            categories: ["mobile"],
            techStack: ["React Native", "Expo", "Bun.js", "Elysia.js"],
            githubUrl: "https://github.com/aklkbqx/book-for-computer-react-native-expo",
            demoUrl: "https://drive.google.com/drive/u/2/folders/11S07rIRIy1Jhdr5W0E4U3wzRV--TQUzx",
            year: "2024"
        },
        {
            id: 3,
            title: "เครื่องขายปากกาหยอดเหรียญ อัตโนมัติ แจ้งเตือนผ่านไลน์",
            description: "ชิ้นงาน ประกอบและออกแบบ เครื่องขายปากกา ที่จะทำการหยอดเหรียญ แล้วขายแบบอัตโนมัติโดยทันที และจะแจ้งเตือนผ่านไลน์เมื่อมีการทำงาน",
            image: ProjectImage03,
            categories: ["iot", "hardware"],
            techStack: ["ESP32", "C++"],
            githubUrl: "https://github.com/aklkbqx/Pen-purchasing-machine",
            year: "2024"
        },
        {
            id: 4,
            title: "เครื่องตรวจจับ Carbon Monoxide แจ้งเตือนผ่านไลน์",
            description: "โปรเจ็คในการสร้างเครื่องตรวจจับ Carbon Monoxide และแจ้งเตือนผ่านไลน์เมื่อมี Carbon ในอากาศเริ่มอันตราย ESP32 MQ7",
            image: ProjectImage04,
            categories: ["iot", "hardware"],
            techStack: ["ESP32", "MQ7", "C++"],
            githubUrl: "https://github.com/aklkbqx/Carbon-Monoxide-LINE-Notification",
            year: "2024"
        },
        {
            id: 5,
            title: "เกม Horror แนวสยองขวัญ ด้วย Unreal Engine 5, C#",
            description: "ออกแบบ Map, สถานที่ต่างๆ, ระบบ Blueprint, Algorithm พัฒนาเกมด้วย Unreal Engine 5 โปรเจ็คที่ สร้างเกมแนวสยองขวัญ Story Horror Game ออกแบบระบบด้วย Blueprint และ C#",
            image: ProjectImage05,
            categories: ["game"],
            techStack: ["Unreal Engine 5", "C#"],
            demoUrl: "https://drive.google.com/file/d/13mrkJc8mggzP8bCUhpMusH9ANktP8F2w/view?usp=drivesdk",
            year: "2024"
        },
        {
            id: 6,
            title: "เว็บไซต์สำหรับผู้สูงอายุในการจองสถานที่ท่องเที่ยวเชิงสุขภาพ และสังคมการแลกเปลี่ยนเรื่องสุขภาพ/การแพทย์",
            description: "เป็นเว็บไซต์มาจากโจทย์ที่ทำเสร็จแล้วในแข่งขันทักษะ นวัตกรรมดิจิทัล ชื่อว่า Elderly Travel ที่จะสามารถให้ผู้สูงอายุจองสถานที่ท่องเที่ยวเชิงสุขภาพ มีกระทู้ถามตอบ แชท-แชทบอท ข่าว และแบบประเมิน",
            image: ProjectImage06,
            categories: ["web"],
            techStack: ["PHP", "MariaDB", "JavaScript", "Jquery", "Bootstrap 5"],
            githubUrl: "https://github.com/aklkbqx/elderly-travel",
            demoUrl: "https://elderly-travel.aklkbqx.xyz",
            year: "2024"
        },
        {
            id: 7,
            title: "Web Application สั่งน้ำปั่น ชา กาแฟ คาเฟ่ออนไลน์",
            description: "โปรเจ็ครับงานทำเว็บไซต์ขายสินค้าออนไลน์ สั่งน้ำปั่น ชา กาแฟ เป็นร้านคาเฟ่ สามารถสั่งจองผ่านเว็บ โต๊ะที่นั่งลูกค้า และการจัดส่ง มีระบบหลังร้านในการรับออร์เดอร์",
            image: ProjectImage07,
            categories: ["web"],
            techStack: ["PHP", "MariaDB", "JavaScript", "Jquery", "Bootstrap 5"],
            githubUrl: "https://github.com/aklkbqx/juicy-box",
            demoUrl: "https://juicy-box.aklkbqx.xyz",
            year: "2024"
        },
        {
            id: 8,
            title: "Web Application ขายเสื้อผ้ามือ 1 และ มือ 2",
            description: "โปรเจ็ครับงานทำเว็บไซต์ขายสินค้าออนไลน์ ซื้อขายเสื้อผ้ามือสอง มีระบบหลังร้านในการรับออร์เดอร์ และระบบจัดส่ง",
            image: ProjectImage08,
            categories: ["web"],
            techStack: ["PHP", "MariaDB", "JavaScript", "Jquery", "Bootstrap 5"],
            githubUrl: "https://github.com/aklkbqx/m2shop",
            demoUrl: "https://m2shop.aklkbqx.xyz",
            year: "2024"
        },
        {
            id: 9,
            title: "Web Application สั่งของทอด ของกินเล่น",
            description: "โปรเจ็ครับงานทำเว็บไซต์ขายสินค้าออนไลน์ ซื้ออาหาร ของทอดและอื่นๆผ่านเว็บ มีระบบหลังร้านในการรับออร์เดอร์ ระบบโต๊ะอาหาร",
            image: ProjectImage09,
            categories: ["web"],
            techStack: ["PHP", "MariaDB", "JavaScript", "Jquery", "Bootstrap 5"],
            githubUrl: "https://github.com/aklkbqx/thodlen",
            demoUrl: "https://thodlen.aklkbqx.xyz",
            year: "2024"
        },
        {
            id: 10,
            title: "Web แนะนำสถานที่ท่องเที่ยวในจังหวัดนครสวรรค์",
            description: "โปรเจ็ครับงานทำเว็บไซต์แนะนำสถานที่ท่องเที่ยวในจังหวัดนครสวรรค์ แสดงรายละเอียดแต่ละสถานที่มีคะแนนรีวิว ความคิดเห็น เส้นทางเดินทาง",
            image: ProjectImage10,
            categories: ["web"],
            techStack: ["PHP", "MariaDB", "JavaScript", "Jquery", "Bootstrap 5"],
            year: "2023"
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.categories.includes(activeFilter));

    return (
        <div className="min-h-screen bg-gray-200 dark:bg-gray-900 pt-20 pb-20">
            <div className="container max-w-6xl mx-auto px-5">
                <BackButton text="กลับไปหน้าหลัก" />
                <motion.div
                    className="mb-16 relative"
                    initial="hidden"
                    animate="visible"
                    variants={headerVariants}
                >
                    <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 dark:text-gray-100 mb-4">
                        MY <span className="text-blue-600 dark:text-blue-400">PROJECTS</span>
                    </h1>

                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-6"></div>

                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
                        ผลงานและโปรเจกต์ที่ฉันได้พัฒนาและมีส่วนร่วม ทั้งงานที่ทำเองและงานที่ทำร่วมกับทีม
                    </p>
                </motion.div>

                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex flex-wrap gap-3">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`px-4 py-2 rounded-full transition-all ${activeFilter === category.id
                                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    ref={projectsRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isProjectsInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-0 left-0 m-3">
                                    <div className="bg-blue-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {project.year}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.categories.map((category, index) => (
                                        <span
                                            key={index}
                                            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center"
                                        >
                                            <Tag className="w-3 h-3 mr-1" />
                                            {category}
                                        </span>
                                    ))}
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                                        Tech Stack:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>

                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            ไม่พบโปรเจกต์ในหมวดหมู่นี้
                        </p>
                    </motion.div>
                )}

                {/* Contact CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 text-center bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl p-10 shadow-lg"
                >
                    <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                        มีโปรเจกต์ที่อยากให้พัฒนาหรือไม่?
                    </h2>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        หากคุณมีไอเดียหรือโปรเจกต์ที่ต้องการให้ฉันช่วยพัฒนา สามารถติดต่อฉันได้โดยตรง เรายินดีให้คำปรึกษาและสร้างสรรค์ผลงานที่ตอบโจทย์ความต้องการของคุณ
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors shadow-md"
                    >
                        ติดต่อฉัน
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;