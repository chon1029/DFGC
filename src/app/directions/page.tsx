"use client";

import { motion } from "framer-motion";
import { SubpageHero } from "@/components/subpage-hero";
import { MapPin, Phone, Car, Bus, Train } from "lucide-react";
import { contentData } from "@/lib/data/contentData";

export default function DirectionsPage() {
  const transportInfo = [
    {
      icon: <Train className="text-royal-red" size={28} />,
      title: "지하철 이용 시",
      desc: "1호선 지행역 1번 출구에서 도보 10분 거리입니다."
    },
    {
      icon: <Bus className="text-royal-red" size={28} />,
      title: "버스 이용 시",
      desc: "지행역 정류장 하차: 1, 2, 3-1, 11, 60-3번 버스 이용 가능합니다."
    },
    {
      icon: <Car className="text-royal-red" size={28} />,
      title: "자가용 이용 시",
      desc: "동두천시청 방향에서 평화로를 따라 지행역 방면으로 오시면 됩니다. 교회 전용 주차장 무료 이용 가능합니다."
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <SubpageHero
        title="오시는 길"
        subtitle="언제나 열려있는 은혜의 보좌로 여러분을 초대합니다."
      />

      {/* 지도 및 주소 정보 섹션 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-square lg:aspect-auto h-full min-h-[500px] bg-gray-50 rounded-[4rem] border border-gray-100 shadow-xl relative overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-royal-red/5 to-transparent" />
              <div className="text-center z-10 transition-transform duration-500 group-hover:scale-110">
                <MapPin size={80} className="text-royal-red/20 mx-auto mb-6" />
                <p className="text-xl font-black text-gray-300">Google/Kakao Map API 연동 준비 중</p>
              </div>
              {/* Decorative pin icon at a fixed location */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-royal-red rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <MapPin size={24} className="text-white" />
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <div className="flex flex-col justify-center">
              <span className="text-royal-red font-black tracking-widest uppercase mb-4 block">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
                언제든지 편안하게<br />방문해 주세요.
              </h2>

              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-royal-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">주소</h4>
                    <p className="text-xl font-bold text-gray-900 leading-relaxed">
                      {contentData.footer.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-royal-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">전화번호</h4>
                    <p className="text-xl font-bold text-gray-900 leading-relaxed">
                      {contentData.footer.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-gray-100 flex gap-4">
                <button className="flex-grow py-5 bg-gray-900 text-white rounded-[2rem] font-bold hover:bg-black transition-all shadow-lg text-center">
                  카카오맵 길찾기
                </button>
                <button className="flex-grow py-5 bg-white border-2 border-gray-900 text-gray-900 rounded-[2rem] font-bold hover:bg-gray-50 transition-all text-center">
                  네이버 지도 검색
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 교통수단 가이드 섹션 */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {transportInfo.map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8">
                  {info.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{info.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}