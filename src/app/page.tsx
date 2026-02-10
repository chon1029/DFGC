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

      {/* Quick Service Section (Rothem Style Image Cards) */}
      <section className="relative z-20 -mt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {contentData.quickLinks.map((link) => {
              const commonClasses = "group relative h-64 overflow-hidden rounded-xl shadow-xl hover:-translate-y-2 transition-all duration-500 w-full text-left cursor-pointer";
              const content = (
                <>
                  {/* Placeholder Gradient / Image Background */}
                  <div className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-110">
                    {link.image ? (
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${link.image})` }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600" />
                    )}
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 border border-white/20 m-3 rounded-lg backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight font-serif mb-1 uppercase drop-shadow-lg">
                      {link.title}
                    </h3>
                    <div className="w-8 h-px bg-white/60 mb-3 transition-all group-hover:w-16 group-hover:bg-gold" />
                    <p className="text-[10px] md:text-xs font-bold text-white/90 tracking-[0.2em] uppercase transition-all group-hover:text-gold tracking-widest">
                      {link.description}
                    </p>
                  </div>
                </>
              );

              if (link.title === "온라인헌금") {
                return (
                  <button key={link.title} onClick={() => setIsOfferingModalOpen(true)} className={commonClasses}>
                    {content}
                  </button>
                );
              }

              if (link.title === "교회주보") {
                return (
                  <button key={link.title} onClick={() => setIsWeeklyModalOpen(true)} className={commonClasses}>
                    {content}
                  </button>
                );
              }

              return (
                <Link key={link.title} href={link.href} className={commonClasses}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-32 bg-[#fdfaf7]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight font-serif">
              {contentData.mission}
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
          </motion.div>
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
              <h2 className="text-4xl md:text-6xl font-black mt-2 tracking-tighter font-serif">오늘의 말씀</h2>
            </div>
            <button className="text-white/60 hover:text-gold transition-colors font-bold text-lg mb-2">
              설교 아카이브 전체보기 →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 aspect-video bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center group cursor-pointer relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="z-10 text-left absolute bottom-12 left-12 right-12">
                <h3 className="text-3xl font-bold mb-4 font-serif">{contentData.sermons.mainSermon.title}</h3>
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
