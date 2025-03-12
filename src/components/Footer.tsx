'use client';

import { motion } from "framer-motion";
import { Mail, Code, ArrowUp, Github, Facebook, Instagram, } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const socialLinks = [
        { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/aklkbqx/', color: 'hover:text-gray-700 dark:hover:text-gray-300' },
        { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/akalakkruaboon', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
        { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/akl.kbqx', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
    ];

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.footer
            ref={footerRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        >
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-2xl font-light tracking-wide text-gray-900 dark:text-gray-100">
                            Akalak <span className="text-blue-600 dark:text-blue-400">Kruaboon</span>
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-light">
                            Fullstack Developer ผู้พัฒนาเว็บและแอปพลิเคชันมือถือด้วยความหลงใหลในเทคโนโลยีและดนตรี
                        </p>
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center space-x-4 pt-2"
                        >
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    whileHover={{ scale: 1.1 }}
                                    className={`text-gray-600 dark:text-gray-400 transition-colors ${social.color}`}
                                    aria-label={social.name}
                                    target="_blank"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-light tracking-wide text-gray-900 dark:text-gray-100">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <motion.li key={link.name} whileHover={{ x: 3 }}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-light"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-light tracking-wide text-gray-900 dark:text-gray-100">
                            Contact
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-light flex items-start gap-2">
                            <Mail className="w-5 h-5 mt-1 text-blue-600 dark:text-blue-400" />
                            <span>akalakkruaboon@gmail.com</span>
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg"
                        >
                            <Link href="/contact">
                                Get In Touch
                            </Link>
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    variants={itemVariants}
                    className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-8"
                />

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400 text-sm"
                >
                    <div className="mb-4 md:mb-0 font-light">
                        <span>© {new Date().getFullYear()} Akalak Kruaboon. All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="font-light">Made with passion</span>
                        </span>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -2 }}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}

export default Footer;