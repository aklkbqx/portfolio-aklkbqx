'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
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
                duration: 1
            }
        }
    };

    return (
        <div className="flex items-center h-screen bg-gray-100">
            <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="container flex-row flex-wrap flex mx-auto gap-20"
            >
                <motion.div 
                    variants={itemVariants}
                    className="h-[800px] w-[500px] bg-white rounded-3xl"
                />
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col flex-1"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-3xl font-semibold mb-2"
                    >
                        About
                    </motion.h1>
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl font-light text-justify leading-relaxed"
                    >
                        <span className="ms-10">สวัสดีครับผมชื่อ</span> นายเอกลักษณ์ เครือบูรณ์ <span className="font-normal">(เอก)</span> อายุ 20 ปี มีความชอบและหลงไหลในด้านเทคโนโลยีสมัยใหม่ ฝึกฝนตนเองสม่ำเสมอจนกลายมาเป็น <span className="font-normal">FullStack Developer</span>, <span className="font-normal">Devops, Deploy Production </span> 
                        มีทักษะในการสร้างสรรค์และพัฒนา <span className="font-normal">Web application, Mobile Applocation, Hardware Internet of Things (Iot), UX/UI </span>
                        ผมเป็นคนที่ชอบศึกษาและเรียนรู้อย่างไม่หยุดนิ่ง ประสบการณ์ในวงการนี้แบบเต็มตัวประมาณ 1 ปี มีทั้งผลงานในด้านการแข่งขันและงาน Production
                    </motion.p>
                    <motion.h1 
                        variants={itemVariants}
                        className="text-xl font-semibold mt-5"
                    >
                        Hobby
                    </motion.h1>
                    <motion.ul 
                        variants={itemVariants}
                        className="ms-8 font-light text-xl leading-relaxed"
                    >
                        <li>- ฟัง Pod Cast และ พัฒนา Life Style</li>
                        <li>- หาข้อมูลความรู้ในสิ่งที่มีประโยชน์ในการพัฒนาทักษะในด้านต่างๆ <span className="text-base font-extralight italic">(Programming Skills, Musical Skills)</span></li>
                        <li>- ฟังเพลง ร้องเพลง เขียนเพลง ทำเพลงเป็นของตนเอง และรับงานทำเพลง <span className="font-normal">ด้านดนตรี</span></li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default About;