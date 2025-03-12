'use client'

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Facebook, Instagram } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitSuccess(false), 3000);
    };

    const socialLinks = [
        { name: 'GitHub', icon: <Github className="w-[35px] h-[35px]" />, href: 'https://github.com/aklkbqx/', color: 'hover:text-gray-700 dark:hover:text-gray-300' },
        { name: 'Facebook', icon: <Facebook className="w-[35px] h-[35px]" />, href: 'https://facebook.com/akalakkruaboon', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
        { name: 'Instagram', icon: <Instagram className="w-[35px] h-[35px]" />, href: 'https://instagram.com/akl.kbqx', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900 py-16 px-4">

            <div className="w-full max-w-4xl">
                <motion.h1
                    className="mb-16 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                ease: "easeOut"
                            }
                        }
                    }}
                >
                    <div className="text-[2rem] md:text-[3rem] text-gray-900 dark:text-gray-100 ">CONTACT ME</div>
                    <div className="text-[1rem] md:text-[2rem] text-gray-900 dark:text-gray-100 ">ติดต่อฉัน</div>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <motion.div
                        className="space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: 0.3
                                }
                            }
                        }}
                    >
                        <div className="text-lg md:text-xl tracking-[0.2rem] text-gray-800 dark:text-gray-200 mb-10">
                            ช่องการติดต่ออื่นๆ
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 border border-gray-400 dark:border-gray-600">
                                    <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <p className="text-gray-800 dark:text-gray-200">akalakkruaboon@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 border border-gray-400 dark:border-gray-600">
                                    <Phone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                    <p className="text-gray-800 dark:text-gray-200">+66 90 285 6188</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 border border-gray-400 dark:border-gray-600">
                                    <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                    <p className="text-gray-800 dark:text-gray-200">Bangkok, Thailand</p>
                                </div>
                            </div>

                            <motion.div
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
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: 0.5
                                }
                            }
                        }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="ชื่อของคุณ"
                                    required
                                    className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-2 px-1 focus:outline-none focus:border-gray-800 dark:focus:border-gray-400 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="อีเมลของคุณ"
                                    required
                                    className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-2 px-1 focus:outline-none focus:border-gray-800 dark:focus:border-gray-400 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="เขียนข้อความติดต่อฉัน"
                                    required
                                    rows={5}
                                    className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-2 px-1 focus:outline-none focus:border-gray-800 dark:focus:border-gray-400 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex items-center space-x-2 border border-gray-600 dark:border-gray-400 py-2 px-6 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="tracking-wider text-sm text-gray-800 dark:text-gray-200 group-hover:text-white dark:group-hover:text-gray-900">
                                    {isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อความหาฉัน'}
                                </span>
                                <Send className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900" />
                            </motion.button>

                            {submitSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-600 dark:text-green-400 text-sm"
                                >
                                    {"Message sent successfully. I'll get back to you soon."}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Contact;