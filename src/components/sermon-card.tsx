"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface SermonCardProps {
    title: string;
    preacher: string;
    date: string;
    image?: string;
}

export const SermonCard = ({ title, preacher, date, image }: SermonCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_80px_rgba(139,0,0,0.08)] transition-all duration-500"
        >
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-200">
                        <Play size={48} className="opacity-20 translate-x-1" />
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-royal-red border-b-[8px] border-b-transparent ml-1" />
                    </div>
                </div>
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[0.7rem] font-black text-royal-red uppercase tracking-widest">
                    Sermon Video
                </div>
            </div>
            <div className="p-8">
                <span className="text-gray-400 text-sm font-bold tracking-tight mb-2 block">{date}</span>
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-royal-red transition-colors line-clamp-2 mb-4">
                    {title}
                </h4>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-bold">{preacher} 목사</span>
                    <button className="text-royal-red/30 group-hover:text-royal-red transition-colors">
                        <Play size={20} fill="currentColor" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
