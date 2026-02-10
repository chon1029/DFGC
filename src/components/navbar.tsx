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
                scrolled ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100" : "bg-transparent"
            )}
        >
            {/* Top Utility Bar */}
            <div className={cn(
                "hidden md:block w-full py-2 border-b transition-all duration-500",
                scrolled ? "bg-gray-50/50 border-gray-100" : "bg-black/10 border-white/10"
            )}>
                <div className="max-w-7xl mx-auto px-6 flex justify-end items-center space-x-6">
                    <div className={cn(
                        "flex items-center space-x-4 text-[11px] font-bold tracking-tight uppercase transition-colors",
                        scrolled ? "text-gray-500" : "text-white/60"
                    )}>
                        <Link href="/login" className="hover:text-primarytransition-colors flex items-center space-x-1">
                            <span>로그인</span>
                        </Link>
                        <span className="w-px h-2 bg-current opacity-20" />
                        <Link href="/signup" className="hover:text-primary transition-colors flex items-center space-x-1">
                            <span>회원가입</span>
                        </Link>
                        <span className="w-px h-2 bg-current opacity-20" />
                        <Link href="/sitemap" className="hover:text-primary transition-colors flex items-center space-x-1">
                            <span>사이트맵</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    {contentData.logoUrl ? (
                        <div className="relative h-10 md:h-12 w-auto flex items-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={contentData.logoUrl}
                                alt={contentData.churchName}
                                className={cn(
                                    "h-full w-auto object-contain transition-all duration-500",
                                    !scrolled && "brightness-0 invert opacity-90"
                                )}
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                                }}
                            />
                            <span className={cn(
                                "text-2xl font-bold tracking-tighter transition-colors hidden font-serif ml-3",
                                scrolled ? "text-primary" : "text-white"
                            )}>
                                {contentData.churchName}
                            </span>
                        </div>
                    ) : (
                        <span className={cn(
                            "text-2xl font-bold tracking-tighter transition-colors font-serif",
                            scrolled ? "text-primary" : "text-white"
                        )}>
                            {contentData.churchName}
                        </span>
                    )}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {contentData.navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-[15px] font-bold transition-all hover:text-primary relative group/nav",
                                scrolled ? "text-gray-700" : "text-white"
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover/nav:w-full" />
                        </Link>
                    ))}
                    <button className={cn(
                        "px-6 py-2 rounded-full text-[14px] font-bold transition-all shadow-sm hover:scale-105 active:scale-95",
                        scrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white/20 text-white backdrop-blur-md hover:bg-white/30 border border-white/30"
                    )}>
                        온라인 예배
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn(
                            "p-2 rounded-lg transition-colors duration-300",
                            mobileMenuOpen ? "text-gray-900 bg-gray-100" : (scrolled ? "text-gray-900" : "text-white bg-white/10")
                        )}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                                {contentData.logoUrl ? (
                                    <div className="h-10 w-auto">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={contentData.logoUrl}
                                            alt={contentData.churchName}
                                            className="h-full w-auto object-contain"
                                            onError={(e) => {
                                                (e.currentTarget as HTMLImageElement).style.display = 'none';
                                                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                                            }}
                                        />
                                        <span className="text-2xl font-black text-royal-red tracking-tighter hidden">
                                            {contentData.churchName}
                                        </span>
                                    </div>
                                ) : (
                                    <span className="text-2xl font-black text-royal-red tracking-tighter">
                                        {contentData.churchName}
                                    </span>
                                )}
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
