import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"

const BackButton: React.FC<{
    text: string
}> = ({
    text
}) => {
        return (
            <Link href="/" className="inline-flex items-center mb-8 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:translate-x-2 transition-transform">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>{text}</span>
            </Link>
        )
    }

export default BackButton