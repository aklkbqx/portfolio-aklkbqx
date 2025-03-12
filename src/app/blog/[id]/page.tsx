'use client'
import { motion } from "framer-motion";
import { Calendar, Clock, User, Tag, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BlogPost = ({ post }) => {

    const samplePost = {
        title: "Creating Minimalist UI Designs for Modern Web Applications",
        publishDate: "March 10, 2025",
        readTime: "5 min read",
        author: "Akalak Kruaboon",
        tags: ["Design", "UI/UX", "Minimalism"],
        coverImage: "/sample-blog-image.jpg",
        content: `
        <p>Minimalist design focuses on simplicity and removing unnecessary elements. In web development, this approach not only creates visually appealing interfaces but also improves user experience by reducing cognitive load.</p>
        
        <h2>Key Principles of Minimalist Design</h2>
        
        <p>When creating minimalist interfaces, it's essential to focus on the following principles:</p>
        
        <ul>
            <li><strong>Simplicity:</strong> Remove anything that doesn't serve a purpose.</li>
            <li><strong>Negative Space:</strong> Utilize whitespace effectively to create visual hierarchy.</li>
            <li><strong>Typography:</strong> Choose clean, readable fonts and create contrast through size and weight.</li>
            <li><strong>Limited Color Palette:</strong> Use fewer colors with intentional contrast.</li>
        </ul>
        
        <p>The implementation of these principles requires careful consideration of both aesthetic and functional aspects of the design.</p>
        
        <h2>Implementing Minimalism with TailwindCSS</h2>
        
        <p>TailwindCSS is particularly well-suited for minimalist designs due to its utility-first approach. By composing small, single-purpose classes, you can build complex components without the bloat of traditional CSS frameworks.</p>
        
        <p>A key advantage is the ability to maintain consistent spacing, typography, and color schemes across your entire application, which is essential for minimalist design systems.</p>
    `
    };

    const displayPost = post || samplePost;

    return (
        <div className="min-h-screen bg-gray-200 dark:bg-gray-900 py-16 px-4">
            <div className="max-w-3xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link href="/blog" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors group">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm tracking-wide">BACK TO BLOG</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-wide text-gray-900 dark:text-gray-100 mb-6">
                        {displayPost.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{displayPost.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{displayPost.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{displayPost.author}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-10 relative aspect-video w-full overflow-hidden"
                >
                    <div className="w-full h-72 md:h-96 bg-gray-300 dark:bg-gray-800 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                            [Featured Image]
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {displayPost.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs"
                        >
                            <Tag className="w-3 h-3" />
                            <span>{tag}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Post content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
                    dangerouslySetInnerHTML={{ __html: displayPost.content }}
                />

                {/* Divider */}
                <div className="my-12 border-t border-gray-300 dark:border-gray-700"></div>

                {/* Author section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex items-center gap-4 p-6 bg-gray-300 dark:bg-gray-800"
                >
                    <div className="w-16 h-16 bg-gray-400 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300">
                        AK
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-wide mb-1">
                            {displayPost.author}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Full-stack developer with a passion for creating beautiful, functional websites and applications. Specializing in Next.js, React, and minimalist design.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogPost;