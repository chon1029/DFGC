import { SubpageHero } from "@/components/subpage-hero";
import { PastorMessage } from "@/components/pastor-message";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <SubpageHero
        title="교회 안내"
        subtitle="성령의 뜨거운 열정과 사랑이 넘치는 동두천순복음교회입니다."
      />

      {/* Pastor Message Section */}
      <PastorMessage />

      {/* Philosophy / Vision Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-gray-100">
              <span className="text-4xl mb-8 block">🔥</span>
              <h3 className="text-2xl font-black mb-4">성령의 충만</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                오순절 신앙의 핵심인 성령 충만을 통해 매일의 삶 속에서 하나님의 살아계심을 체험합니다.
              </p>
            </div>
            <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-gray-100">
              <span className="text-4xl mb-8 block">📚</span>
              <h3 className="text-2xl font-black mb-4">말씀의 훈련</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                체계적인 말씀 양육 프로그램을 통해 성숙한 그리스도인으로 성장해 나갑니다.
              </p>
            </div>
            <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-gray-100">
              <span className="text-4xl mb-8 block">🌍</span>
              <h3 className="text-2xl font-black mb-4">세상의 빛</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                지역 사회를 섬기고 다음 세대를 세우며 선교의 사명을 완수하는 교회입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Preview Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12 bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">교회 연혁</h2>
          <div className="space-y-8 md:space-y-12">
            {[
              { year: "2024", event: "설립 40주년 기념 예배 및 비전 선포" },
              { year: "2015", event: "신축 성전 입당 및 지역 나눔 센터 개소" },
              { year: "1984", event: "동두천순복음교회 창립 (김동두천 전도사)" },
            ].map((item) => (
              <div key={item.year} className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8 text-left group">
                <span className="text-2xl md:text-3xl font-black text-royal-red transition-transform group-hover:scale-110">{item.year}</span>
                <div className="hidden md:block h-[2px] flex-grow bg-gray-100" />
                <span className="text-lg md:text-xl font-bold text-gray-700">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}