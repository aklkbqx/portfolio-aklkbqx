'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from "next-themes";
import Image from "next/image";
import LogoImage from "@/assets/images/logo.png";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setTheme(resolvedTheme == "dark" ? "light" : "dark");
    };

    const isActive = (path: unknown) => pathname === path;

    const menuItems = [
        { path: "/", label: "HOME" },
        { path: "/projects", label: "PROJECTS" },
        { path: "/blog", label: "BLOG" },
        { path: "/contact", label: "CONTACT ME" }
    ];

    return (
        <>
            <nav className={`w-full fixed top-0 z-10 transition-all duration-300 ${scrolled
                    ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                }`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Image
                                src={LogoImage}
                                alt="Logo"
                                width={80}
                                height={33}
                                priority
                                className="dark:invert"
                            />
                        </div>

                        <div className="hidden md:flex md:items-center md:justify-center md:flex-1 pe-10">
                            <ul className="flex items-center justify-center space-x-8">
                                {menuItems.map((item) => (
                                    <Link href={item.path} key={item.path}>
                                        <li className={`transition-colors font-light ${isActive(item.path)
                                                ? "text-blue-600 dark:text-blue-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:bottom-[-6px] after:left-0"
                                                : "hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                                            }`}>
                                            {item.label}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden md:flex items-center">
                            <button
                                onClick={toggleTheme}
                                className="rounded-full p-2 bg-gray-100/30 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all cursor-pointer"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ?
                                    <Sun size={20} className="text-yellow-300" /> :
                                    <Moon size={20} />
                                }
                            </button>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="rounded-md p-2 hover:bg-gray-100/20 dark:hover:bg-gray-800/20 transition-all cursor-pointer z-50 relative"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ?
                                    <X size={24} className="dark:text-white" /> :
                                    <Menu size={24} className="dark:text-white" />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 bg-white/30 dark:bg-gray-900/90 backdrop-blur-md z-50 flex flex-col justify-center items-center md:hidden transition-all duration-300 ${isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}>
                <div className="absolute top-4 right-4">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full bg-gray-100/10 dark:bg-gray-800/10 hover:bg-gray-200/20 dark:hover:bg-gray-700/20 transition-all"
                        aria-label="Close menu"
                    >
                        <X size={24} className="dark:text-white" />
                    </button>
                </div>

                <ul className="flex flex-col space-y-6 p-4 text-center">
                    {menuItems.map((item) => (
                        <Link href={item.path} key={item.path}>
                            <li
                                className={`text-xl transition-colors ${isActive(item.path)
                                        ? "text-blue-600 dark:text-blue-400 font-normal"
                                        : "text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                                    }`}
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </li>
                        </Link>
                    ))}
                </ul>

                <div className="mt-10">
                    <button
                        onClick={toggleTheme}
                        className="rounded-full p-3 bg-gray-100/10 dark:bg-gray-800/10 hover:bg-gray-200/20 dark:hover:bg-gray-700/20 transition-all cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ?
                            <Sun size={20} className="text-yellow-300" /> :
                            <Moon size={20} />
                        }
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;