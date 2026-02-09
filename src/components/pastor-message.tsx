"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const PastorMessage = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Pastor Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-[4rem] relative shadow-2xl">
                            <div className="absolute inset-0 bg-royal-red/10 mix-blend-multiply" />
                            {/* placeholder image or real asset if available */}
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-300 text-6xl">⛪</span>
                            </div>
                        </div>
                        {/* Decorative box */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute top-10 -left-10 w-40 h-40 bg-royal-red/5 rounded-full blur-2xl -z-10" />
                    </motion.div>

                    {/* Message Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-royal-red font-black tracking-widest uppercase mb-4 block">Greetings</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
                            성령의 능력으로 세상을<br />
                            변화시키는 공동체
                        </h2>
                        <div className="space-y-6 text-gray-600 font-medium leading-relaxed text-lg">
                            <p>
                                안녕하세요! 동두천순복음교회 홈페이지를 방문해 주신 모든 분을 주님의 이름으로 환영합니다.
                            </p>
                            <p>
                                우리 교회는 오순절 성령의 강력한 역사와 복음의 열정으로 세워진 신앙 공동체입니다.
                                하나님의 사랑을 경험하고, 그 사랑을 세상에 전파하는 사명을 다하고 있습니다.
                            </p>
                            <p>
                                오늘날 우리 사회가 겪고 있는 아픔과 갈등 속에서, 교회는 위로와 희망의 통로가 되어야 합니다.
                                동두천순복음교회는 성령 안에서 하나 되어, 다음 세대를 세우고 지역 사회를 섬기는 축복의 통로가 되겠습니다.
                            </p>
                        </div>
                        <div className="mt-12 pt-10 border-t border-gray-100 flex items-end justify-between">
                            <div>
                                <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest font-bold">Senior Pastor</p>
                                <p className="text-3xl font-black text-gray-900">김석주 <span className="text-xl font-bold text-gray-400">담임목사</span></p>
                            </div>
                            <div className="h-16 w-32 border-b-2 border-gray-200" /> {/* Signature space */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
