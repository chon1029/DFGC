"use client";

import { motion } from "framer-motion";
import { SubpageHero } from "@/components/subpage-hero";
import { UserPlus, Heart, BookOpen, Coffee } from "lucide-react";

export default function NewFamilyPage() {
  const steps = [
    {
      icon: <UserPlus className="text-royal-red" size={32} />,
      title: "방문 및 안내",
      desc: "본당 입구의 안내 데스크에서 새가족 봉사자가 따뜻하게 맞이해 드립니다."
    },
    {
      icon: <Heart className="text-royal-red" size={32} />,
      title: "등록 카드 작성",
      desc: "안내에 따라 등록 카드를 작성하시거나, 온라인으로 미리 등록하실 수 있습니다."
    },
    {
      icon: <Coffee className="text-royal-red" size={32} />,
      title: "새가족 교육",
      desc: "4주간의 기초 신앙 교육을 통해 교회 생활의 적응을 도와드립니다."
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <SubpageHero
        title="새가족 안내"
        subtitle="주님의 이름으로 환영합니다. 당신은 하나님의 귀한 선물입니다."
      />

      {/* 등록 절차 섹션 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-royal-red font-black tracking-widest uppercase mb-4 block">Registration Process</span>
            <h2 className="text-4xl font-black bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">가족이 되는 과정</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative group text-center"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-royal-red/5 group-hover:scale-110 transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-royal-red transition-colors">{step.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-12 -right-6 text-gray-100 font-black text-6xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 온라인 등록 폼 섹션 */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-2xl border border-gray-100">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">온라인 새가족 등록</h3>
              <p className="text-gray-400 font-medium">영원한 생명의 공동체, 동두천순복음교회의 가족이 되어주세요.</p>
            </div>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">이름</label>
                  <input type="text" className="w-full px-8 py-5 bg-gray-50 rounded-3xl border-none focus:ring-2 focus:ring-royal-red/20 font-bold outline-none text-gray-900" placeholder="홍길동" />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">연락처</label>
                  <input type="tel" className="w-full px-8 py-5 bg-gray-50 rounded-3xl border-none focus:ring-2 focus:ring-royal-red/20 font-bold outline-none text-gray-900" placeholder="010-0000-0000" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">주소</label>
                <input type="text" className="w-full px-8 py-5 bg-gray-50 rounded-3xl border-none focus:ring-2 focus:ring-royal-red/20 font-bold outline-none text-gray-900" placeholder="경기도 동두천시..." />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">방문하게 된 계기</label>
                <textarea rows={4} className="w-full px-8 py-5 bg-gray-50 rounded-3xl border-none focus:ring-2 focus:ring-royal-red/20 font-bold outline-none text-gray-900 resize-none" placeholder="지인 소개, 홈페이지 등..." />
              </div>

              <div className="pt-8">
                <button type="button" className="w-full py-6 bg-royal-red text-white rounded-[2.5rem] font-black text-xl hover:bg-red-900 transition-all shadow-xl hover:-translate-y-2 group">
                  새가족 등록 신청하기 <span className="ml-2 group-hover:translate-x-2 transition-transform inline-block">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}