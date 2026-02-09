"use client";

import { motion } from "framer-motion";
import { SubpageHero } from "@/components/subpage-hero";
import { contentData } from "@/lib/data/contentData";
import { Download, Share2, ZoomIn } from "lucide-react";

export default function WeeklyNewsPage() {
    return (
        <main className="bg-white min-h-screen">
            <SubpageHero
                title="교회 주보"
                subtitle={`${contentData.weeklyBulletin.currentDate} 주보입니다. 한 주간의 소계와 예배 순서를 확인하세요.`}
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Bulletin Image Area */}
                        <div className="lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-inner border border-gray-100 flex justify-center sticky top-24"
                            >
                                <img
                                    src={contentData.weeklyBulletin.imageUrl}
                                    alt="주보 상세"
                                    className="w-full h-auto rounded-xl shadow-2xl"
                                />
                            </motion.div>
                        </div>

                        {/* Sidebar / Info Area */}
                        <div className="lg:w-1/3 space-y-10">
                            <div className="space-y-4">
                                <span className="text-royal-red font-black tracking-widest uppercase block">Information</span>
                                <h2 className="text-4xl font-black text-gray-900 leading-tight">
                                    {contentData.weeklyBulletin.currentDate}<br />소식과 예배 안내
                                </h2>
                                <p className="text-gray-500 font-medium text-lg leading-relaxed">
                                    매주 발행되는 주보를 통해 교회의 깊은 소식과 예배의 흐름을 함께 누리시길 바랍니다.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 pt-6">
                                <button className="flex items-center justify-center space-x-4 p-6 bg-gray-900 text-white rounded-[2rem] font-bold hover:bg-royal-red transition-all group active:scale-95 shadow-xl">
                                    <Download className="group-hover:-translate-y-1 transition-transform" />
                                    <span>주보 PDF 다운로드</span>
                                </button>

                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center space-x-3 p-6 bg-gray-100 text-gray-900 rounded-[2rem] font-bold hover:bg-gray-200 transition-all active:scale-95">
                                        <Share2 size={20} />
                                        <span>공유하기</span>
                                    </button>
                                    <button className="flex items-center justify-center space-x-3 p-6 bg-gray-100 text-gray-900 rounded-[2rem] font-bold hover:bg-gray-200 transition-all active:scale-95">
                                        <ZoomIn size={20} />
                                        <span>크게보기</span>
                                    </button>
                                </div>
                            </div>

                            <div className="p-8 bg-royal-red/5 rounded-[2.5rem] border border-royal-red/10">
                                <h4 className="font-black text-gray-900 mb-4">안내 말씀</h4>
                                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                                    <li className="flex items-start">
                                        <span className="text-royal-red mr-2">•</span>
                                        주보는 매주 토요일 저녁에 업데이트 됩니다.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-royal-red mr-2">•</span>
                                        지난 주보는 소식 게시판 아카이브에서 확인 가능합니다.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-royal-red mr-2">•</span>
                                        PDF 파일이 보이지 않을 경우 뷰어를 설치해 주세요.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
