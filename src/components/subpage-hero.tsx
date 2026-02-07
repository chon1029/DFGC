"use client";

import { motion } from "framer-motion";

interface SubpageHeroProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
}

export const SubpageHero = ({ title, subtitle, bgImage }: SubpageHeroProps) => {
    return (
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                    backgroundColor: '#8B0000' // fallback to royal red
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-gold-400 uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                        DONGDUCHEON FULL GOSPEL CHURCH
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Decorative Bottom Wave/Line */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};
