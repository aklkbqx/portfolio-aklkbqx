'use client'

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion";

const BackButton: React.FC<{
    text: string;
    href?: string
}> = ({
    text,
    href = "/"
}) => {
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href={href} className="inline-flex items-center mb-8 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:translate-x-2 transition-transform">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    <span>{text}</span>
                </Link>
            </motion.div>
        )
    }

export default BackButton