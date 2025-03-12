'use client'
import { useState } from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, Search, Tag, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import NewsNextJS from "@/assets/images/news-nextjs.png"
import Image from 'next/image';

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTag, setActiveTag] = useState('All');

    const blogPosts = [
        {
            id: 1,
            title: "การเริ่มต้นใช้งาน Next.js",
            excerpt: "เฟรมเวิร์คที่จะเปลี่ยนประสบการณ์การพัฒนาเว็บของคุณ",
            publishDate: "March 10, 2025",
            readTime: "5 น.",
            coverImage: NewsNextJS,
            tags: ["เฟรมเวิร์ค", "Next.js"]
        }
    ];

    const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = activeTag === 'All' || post.tags.includes(activeTag);
        return matchesSearch && matchesTag;
    });

    return (
        <div className="min-h-screen bg-gray-200 dark:bg-gray-900 px-4 pt-20">
            <div className="max-w-6xl container mx-auto px-5">

                <BackButton text="กลับไปหน้าหลัก" />

                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-5xl tracking-[0.5rem] text-gray-900 dark:text-gray-100 mb-4">
                        BLOG
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        ความคิด ไอเดีย และข้อมูลเชิงลึกเกี่ยวกับการพัฒนาเว็บ การออกแบบ และเทคโนโลยี
                    </p>
                </motion.div>

                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="ค้นหา..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border border-gray-400 dark:border-gray-600 py-3 px-4 pl-10 focus:outline-none focus:border-gray-800 dark:focus:border-gray-400 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {allTags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTag(tag)}
                                className={`px-4 py-1 text-sm transition-colors ${activeTag === tag
                                    ? 'bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900'
                                    : 'bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="border border-gray-300 dark:border-gray-700 group"
                            >
                                <div className="h-48 bg-gray-300 dark:bg-gray-800 overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                        <Image
                                            src={NewsNextJS}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                            <div
                                                key={tagIndex}
                                                className="flex items-center gap-1 px-2 py-1 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs"
                                            >
                                                <Tag className="w-3 h-3" />
                                                <span>{tag}</span>
                                            </div>
                                        ))}
                                        {post.tags.length > 2 && (
                                            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                                +{post.tags.length - 2} more
                                            </div>
                                        )}
                                    </div>

                                    <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3 tracking-wide group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{post.publishDate}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors"
                                    >
                                        อ่านเพิ่มเติม
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-gray-600 dark:text-gray-400">
                            ไม่พบโพสต์...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;