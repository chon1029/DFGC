"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { contentData } from "@/lib/data/contentData";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled ? "bg-white/95 backdrop-blur-xl py-3 shadow-xl border-b border-gray-100" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className={cn(
                        "text-2xl font-bold tracking-tighter transition-colors",
                        scrolled ? "text-royal-red" : "text-white"
                    )}>
                        {contentData.churchName}
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {contentData.navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-base font-bold transition-colors hover:text-royal-red",
                                scrolled ? "text-gray-800" : "text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="bg-royal-red text-white px-6 py-2.5 rounded-full text-base font-bold hover:bg-red-900 transition-all shadow-xl hover:scale-105 active:scale-95">
                        온라인 예배
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden relative z-[60]">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn(
                            "transition-colors duration-300",
                            mobileMenuOpen ? "text-gray-900" : (scrolled ? "text-gray-900" : "text-white")
                        )}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
                        />
                        {/* Sidebar Content */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 h-screen w-[85%] max-w-[400px] bg-white z-[58] md:hidden shadow-[20px_0_60px_rgba(0,0,0,0.1)] flex flex-col p-10"
                        >
                            <div className="mb-12">
                                <span className="text-2xl font-black text-royal-red tracking-tighter">
                                    {contentData.churchName}
                                </span>
                            </div>

                            <div className="flex flex-col space-y-8 flex-grow">
                                {contentData.navigation.map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-2xl font-black text-gray-900 hover:text-royal-red transition-colors flex items-center group"
                                        >
                                            <span className="w-0 h-[2px] bg-royal-red group-hover:w-6 transition-all mr-0 group-hover:mr-4" />
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="w-full py-5 bg-royal-red text-white rounded-2xl font-black text-lg shadow-xl hover:bg-red-900 transition-all active:scale-95"
                                >
                                    온라인 예배 바로가기
                                </motion.button>
                                <p className="text-center text-gray-400 text-xs mt-8 font-medium">
                                    © 2024 Dongducheon Full Gospel Church
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};
