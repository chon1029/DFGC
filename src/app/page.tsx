"use client";

import { motion } from "framer-motion";
import { HeroParallax } from "@/components/hero-parallax";
import { contentData } from "@/lib/data/contentData";
import Link from "next/link";
import { useState } from "react";
import { OfferingModal } from "@/components/offering-modal";
import { WeeklyPreviewModal } from "@/components/weekly-preview-modal";

export default function Home() {
  const [isOfferingModalOpen, setIsOfferingModalOpen] = useState(false);
  const [isWeeklyModalOpen, setIsWeeklyModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative">
        <HeroParallax />
      </section>

      {/* Core Values Section (Quick Service) - Solid Background to prevent overlap */}
      <section className="py-32 bg-white relative z-20 -mt-24 rounded-t-[3rem] shadow-[0_-30px_60px_rgba(0,0,0,0.15)] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              {contentData.motto}
            </h2>
            <div className="w-24 h-2 bg-royal-red mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {contentData.quickLinks.map((link) => {
              if (link.title === "온라인헌금") {
                return (
                  <button
                    key={link.title}
                    onClick={() => setIsOfferingModalOpen(true)}
                    className="group p-12 bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_80px_rgba(139,0,0,0.1)] transition-all duration-500 border border-gray-50 hover:-translate-y-4 block text-left w-full cursor-pointer"
                  >
                    <div className="w-20 h-20 bg-gray-50 group-hover:bg-royal-red rounded-3xl flex items-center justify-center mx-auto mb-8 transition-colors duration-500">
                      <span className="text-3xl text-royal-red group-hover:text-white transition-colors duration-500">✨</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-royal-red transition-colors">{link.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">{link.description}</p>
                  </button>
                );
              }

              if (link.title === "교회주보") {
                return (
                  <button
                    key={link.title}
                    onClick={() => setIsWeeklyModalOpen(true)}
                    className="group p-12 bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_80px_rgba(139,0,0,0.1)] transition-all duration-500 border border-gray-50 hover:-translate-y-4 block text-left w-full cursor-pointer"
                  >
                    <div className="w-20 h-20 bg-gray-50 group-hover:bg-sky-500 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-colors duration-500">
                      <span className="text-3xl text-royal-red group-hover:text-white transition-colors duration-500">📄</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-sky-500 transition-colors">{link.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">{link.description}</p>
                  </button>
                );
              }

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group p-12 bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_80px_rgba(139,0,0,0.1)] transition-all duration-500 border border-gray-50 hover:-translate-y-4 block"
                >
                  <div className="w-20 h-20 bg-gray-50 group-hover:bg-royal-red rounded-3xl flex items-center justify-center mx-auto mb-8 transition-colors duration-500">
                    <span className="text-3xl text-royal-red group-hover:text-white transition-colors duration-500">✨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-royal-red transition-colors">{link.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">{link.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <OfferingModal
        isOpen={isOfferingModalOpen}
        onClose={() => setIsOfferingModalOpen(false)}
      />

      <WeeklyPreviewModal
        isOpen={isWeeklyModalOpen}
        onClose={() => setIsWeeklyModalOpen(false)}
      />

      {/* Latest Sermon Preview */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <span className="text-gold font-bold tracking-widest uppercase">Latest Message</span>
              <h2 className="text-4xl md:text-6xl font-black mt-2 tracking-tighter">오늘의 말씀</h2>
            </div>
            <button className="text-white/60 hover:text-gold transition-colors font-bold text-lg mb-2">
              설교 아카이브 전체보기 →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 aspect-video bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center group cursor-pointer relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="z-10 text-left absolute bottom-12 left-12 right-12">
                <h3 className="text-3xl font-bold mb-4">{contentData.sermons.mainSermon.title}</h3>
                <div className="flex items-center space-x-4 text-white/70">
                  <span>{contentData.sermons.mainSermon.preacher}</span>
                  <span className="w-1 h-1 bg-white/40 rounded-full" />
                  <span>{contentData.sermons.mainSermon.date}</span>
                </div>
              </div>
              <div className="w-24 h-24 bg-royal-red rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              {contentData.sermons.recentList.map((sermon) => (
                <div key={sermon.title} className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-white/20 transition-all group cursor-pointer">
                  <span className="text-gold text-sm font-bold">{sermon.date}</span>
                  <h4 className="text-xl font-bold mt-2 group-hover:text-gold transition-colors">{sermon.title}</h4>
                  <p className="text-white/40 mt-1">{sermon.preacher}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
