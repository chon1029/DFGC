"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { contentData } from "@/lib/data/contentData";
import { Button } from "@/components/ui/button";

export const HeroParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
    const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
    const translateY = useTransform(scrollYProgress, [0, 0.2], [-700, 0]);

    const smoothedTranslateY = useSpring(translateY, springConfig);

    return (
        <div
            ref={ref}
            className="h-[120vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY: smoothedTranslateY,
                    opacity,
                }}
                className="flex flex-col space-y-10 px-10"
            >
                <div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="flex flex-row space-x-20 mb-10">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </motion.div>

            {/* Overlay Background for Content */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Background Media Placeholder */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80')" }}
            />
        </div>
    );
};

const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-6 w-full left-0 top-0 z-20">
            <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-gold font-bold text-lg mb-4 tracking-widest"
            >
                {contentData.vision}
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[34px] md:text-[80px] font-black text-white tracking-tighter leading-none"
            >
                {contentData.hero.title} <br />
                <span className="text-gold">{contentData.hero.highlight}</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-2xl text-base md:text-2xl mt-8 text-white/80 font-medium leading-relaxed"
            >
                {contentData.hero.subTitle}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 flex space-x-4"
            >
                <Button size="lg" className="bg-royal-red hover:bg-royal-red/90 text-white rounded-full px-12 py-8 text-xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95">
                    {contentData.hero.cta}
                </Button>
            </motion.div>
        </div>
    );
};

const ProductCard = () => {
    return (
        <motion.div
            whileHover={{ y: -20, rotateY: 5 }}
            className="group/product h-80 w-[24rem] relative flex-shrink-0 bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
        >
            <div className="p-6">
                <div className="h-48 w-full bg-gradient-to-br from-royal-red/20 to-gold/20 rounded-2xl mb-4 flex items-center justify-center">
                    <span className="text-4xl text-white/20 font-bold">D.F.G.C</span>
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">영적인 깊이가 있는 교회</h2>
                <div className="w-10 h-1 bg-gold mt-2 rounded-full" />
            </div>
        </motion.div>
    );
};
