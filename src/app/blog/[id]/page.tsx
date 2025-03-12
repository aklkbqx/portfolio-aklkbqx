'use client'
import { motion } from "framer-motion";
import { Calendar, Clock, User, Tag } from 'lucide-react';
import Image from 'next/image';
import BackButton from "@/components/BackButton";

import NewsNextJS from "@/assets/images/news-nextjs.png"

const BlogPost = () => {

    const samplePost = {
        title: "การเริ่มต้นใช้งาน Next.js: เฟรมเวิร์คที่จะเปลี่ยนประสบการณ์การพัฒนาเว็บของคุณ",
        publishDate: "March 10, 2025",
        readTime: "5 น.",
        author: "Akalak Kruaboon",
        tags: ["เฟรมเวิร์ค", "Next.js"],
        coverImage: "/sample-blog-image.jpg",
        content: `
        <p class='font-extralight'>สวัสดีครับนักพัฒนาทุกท่าน! วันนี้เราจะมาพูดถึงเฟรมเวิร์คที่กำลังได้รับความนิยมอย่างมากในวงการพัฒนาเว็บไซต์ นั่นก็คือ Next.js ซึ่งเป็นเฟรมเวิร์คที่สร้างขึ้นบน React ที่ช่วยให้การพัฒนาเว็บแอปพลิเคชันเป็นเรื่องง่ายและมีประสิทธิภาพมากขึ้น</p>
        
        <h2 class='my-2 text-xl'>Next.js คืออะไร?</h2>
        <p class='font-extralight'>Next.js เป็นเฟรมเวิร์คของ React ที่มาพร้อมกับคุณสมบัติต่างๆ มากมาย เช่น Server-Side Rendering (SSR), Static Site Generation (SSG), API Routes และระบบ File-based Routing ที่ทำให้การพัฒนาเว็บแอปพลิเคชันเป็นเรื่องง่ายและเร็วขึ้น</p>
        <p class='font-extralight'>การที่ Next.js รองรับทั้ง SSR และ SSG ทำให้นักพัฒนาสามารถสร้างเว็บไซต์ที่มีประสิทธิภาพสูง โหลดเร็ว และเป็นมิตรกับ SEO ได้โดยไม่ต้องกังวลกับปัญหาที่มักพบในแอปพลิเคชัน Single Page Application (SPA) ทั่วไป</p>
        
        <h2 class='my-2 text-xl'>ทำไมต้องใช้ Next.js?</h2>
        
        <ol class='list-decimal ms-10 my-2 font-extralight'>
            <li>ประสิทธิภาพที่เหนือกว่า: ด้วยความสามารถในการ pre-render หน้าเว็บ Next.js ช่วยให้เว็บไซต์โหลดเร็วขึ้นอย่างมาก</li>
            <li>SEO ที่ดีขึ้น: เนื่องจากเนื้อหาถูกสร้างจากฝั่ง Server ทำให้ Search Engine สามารถเข้าถึงเนื้อหาได้ง่ายขึ้น</li>
            <li>การพัฒนาที่ง่ายขึ้น: ระบบ File-based Routing ช่วยลดความซับซ้อนในการสร้าง Router</li>
            <li>Built-in API Routes: สร้าง API Endpoints ภายในโปรเจคเดียวกัน ไม่จำเป็นต้องแยกเป็น Backend ต่างหาก</li>
            <li>Image Optimization: มีระบบจัดการรูปภาพที่มีประสิทธิภาพในตัว</li>
            <li>Zero Configuration: เริ่มต้นใช้งานได้ทันทีโดยไม่ต้องกำหนดค่าอะไรมากมาย</li>
        </ol>
        
        <h2 class='my-2 text-xl'>เริ่มต้นใช้งาน Next.js</h2>
        <p class='font-extralight'>การเริ่มต้นใช้งาน Next.js นั้นง่ายมาก เริ่มจากการสร้างโปรเจคใหม่ด้วยคำสั่ง:</p>
        
        <div class="w-full p-5">
            <div class="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-auto w-auto">
                <div class="overflow-scroll max-h-full">
                    <pre><code id="code-block" class="text-sm text-gray-500 dark:text-gray-400 whitespace-pre">npx create-next-app my-next-app
# หรือใช้ yarn
yarn create next-app my-next-app</code></pre>
                </div>
            </div>
        </div>

        <p class='font-extralight'>หลังจากติดตั้งเสร็จแล้ว คุณสามารถเริ่มทำงานได้ทันทีด้วยคำสั่ง:</p>

        <div class="w-full p-5">
            <div class="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-auto w-auto">
                <div class="overflow-scroll max-h-full">
                    <pre><code id="code-block" class="text-sm text-gray-500 dark:text-gray-400 whitespace-pre">cd my-next-app
npm run dev
# หรือใช้ yarn
yarn dev</code></pre>
                </div>
            </div>
        </div>

        <p class='font-extralight'>เมื่อรันคำสั่งนี้ Next.js จะเริ่มต้น Development Server ที่ http://localhost:3000 ซึ่งคุณสามารถเข้าไปดูโปรเจคของคุณได้ทันที</p>
    `
    };

    const displayPost = samplePost;

    return (
        <div className="min-h-screen bg-gray-200 dark:bg-gray-900 pt-20 px-4">
            <div className="max-w-6xl mx-auto px-5">

                <BackButton href="/blog" text="ย้อนกลับ" />

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
                    className="relative mb-10 w-full overflow-hidden"
                >
                    <div className="w-full h-72 md:h-96 bg-gray-300 dark:bg-gray-800 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                            <Image
                                src={NewsNextJS}
                                alt={displayPost.title}
                                className="w-full h-full object-cover"
                            />
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

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
                    dangerouslySetInnerHTML={{ __html: displayPost.content }}
                />

                <div className="my-12 border-t border-gray-300 dark:border-gray-700"></div>

                <div className="pb-10">
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
                                Full-Stack Developer ที่หลงใหลในการสร้างเว็บไซต์และแอปพลิเคชัน
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;