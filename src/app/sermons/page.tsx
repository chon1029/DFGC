import { SubpageHero } from "@/components/subpage-hero";
import { SermonCard } from "@/components/sermon-card";
import { contentData } from "@/lib/data/contentData";

export default function SermonsPage() {
  const allSermons = [
    { title: "성령의 능력을 경험하라", preacher: "김석주", date: "2024.02.04" },
    { title: "말씀의 능력", preacher: "김석주", date: "2024.01.28" },
    { title: "기도의 힘", preacher: "김석주", date: "2024.01.21" },
    { title: "사랑의 공동체", preacher: "김석주", date: "2024.01.14" },
    { title: "믿음으로 승리하라", preacher: "김석주", date: "2024.01.07" },
    { title: "새 일을 행하시는 하나님", preacher: "김석주", date: "2023.12.31" },
  ];

  return (
    <main className="bg-white min-h-screen">
      <SubpageHero
        title="예배 / 말씀"
        subtitle="은혜로운 선포와 성령의 임재가 있는 예배의 현장입니다."
      />

      {/* 예배 시간표 섹션 */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/3">
              <span className="text-royal-red font-black tracking-widest uppercase mb-4 block">Service Times</span>
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">예배 안내</h2>
              <p className="text-gray-400 font-medium leading-relaxed">
                동두천순복음교회의 예배는<br />모두에게 열려 있습니다.
              </p>
            </div>
            <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { time: "주일 1부 / 09:00", name: "주일 오전 예배" },
                { time: "주일 2부 / 11:00", name: "주일 대예배" },
                { time: "수요일 / 19:30", name: "수요 성령 집회" },
                { time: "금요일 / 20:30", name: "금요 심야 기도회" },
              ].map((item) => (
                <div key={item.name} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-royal-red/30 transition-all">
                  <p className="text-royal-red font-black text-sm mb-2">{item.time}</p>
                  <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 설교 아카이브 섹션 */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-black bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">설교 영상</h2>
            <div className="flex space-x-2">
              <button className="px-6 py-2 bg-royal-red text-white rounded-full font-bold text-sm">전체</button>
              <button className="px-6 py-2 bg-gray-50 text-gray-400 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">주일예배</button>
              <button className="px-6 py-2 bg-gray-50 text-gray-400 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">특별집회</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allSermons.map((sermon) => (
              <SermonCard
                key={sermon.title}
                title={sermon.title}
                preacher={sermon.preacher}
                date={sermon.date}
              />
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-12 py-5 bg-gray-900 text-white rounded-[2rem] font-black hover:bg-royal-red transition-all shadow-xl hover:-translate-y-2">
              설교 더보기 +
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}