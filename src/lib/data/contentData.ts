/**
 * 동두천순복음교회 홈페이지 콘텐츠 데이터
 * 마스터님! 여기서 텍스트와 이미지 경로를 수정하시면 홈페이지에 즉시 반영됩니다.
 */

export const contentData = {
    churchName: "동두천순복음교회",
    logoUrl: "/assets/designs/교회로고-수정-removebg-preview.png", // 여기에 교회 로고 이미지 경로를 넣으세요.
    mission: "말씀기도생활 * 성령충만한삶 * 예수님만자랑",
    vision: "온가족교회 칠십가정구원 일백명예배자",

    colors: {
        primary: "#8B0000", // 로열 레드
        secondary: "#D4AF37", // 골드
    },

    offering: {
        bank: "우체국",
        accountNumber: "100834-01-004906",
        accountHolder: "동두천순복음교회",
        types: ["십일조", "감사헌금", "주일헌금", "선교예금"],
    },

    weeklyBulletin: {
        currentDate: "2024년 2월 11일",
        imageUrl: "/assets/designs/bulletin_placeholder.jpg", // 추후 실제 이미지로 교체
    },

    navigation: [
        { name: "홈", href: "/" },
        { name: "교회안내", href: "/about" },
        { name: "예배/말씀", href: "/sermons" },
        { name: "소식", href: "/news" },
        { name: "오시는 길", href: "/directions" },
    ],

    hero: {
        title: "온가족이 예수믿는 교회",
        highlight: "동두천순복음교회",
        subTitle: "다음 세대와 함께 하나님 나라를 세워가는 공동체입니다.",
        cta: "예배 안내 보기",
        videoUrl: "https://www.youtube.com/embed/placeholder", // 추후 실제 영상으로 교체
    },

    quickLinks: [
        { title: "주일예배", icon: "Clock", description: "SERMON", href: "/sermons", image: "https://images.unsplash.com/photo-1548625361-96a9781406bc?auto=format&fit=crop&q=80" },
        { title: "예배시간", icon: "Clock", description: "WORSHIP", href: "/sermons", image: "https://images.unsplash.com/photo-1445963846434-72541bc43a73?auto=format&fit=crop&q=80" },
        { title: "교회소식", icon: "FileText", description: "NEWS", href: "/news", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80" },
        { title: "오시는길", icon: "MapPin", description: "LOCATION", href: "/directions", image: "https://images.unsplash.com/photo-1526772662000-3f88f10c05fe?auto=format&fit=crop&q=80" },
    ],

    sermons: {
        title: "최신 설교 말씀",
        mainSermon: {
            title: "성령의 능력을 경험하라",
            preacher: "김석주 담임목사",

            date: "2024.02.04",
            thumbnail: "/assets/designs/sermon_thumb_01.jpg",
        },
        recentList: [
            { title: "말씀의 능력", preacher: "김석주 목사", date: "2024.01.28" },
            { title: "기도의 힘", preacher: "김석주 목사", date: "2024.01.21" },
            { title: "사랑의 공동체", preacher: "김석주 목사", date: "2024.01.14" },
        ]
    },

    footer: {
        address: "경기도 동두천시 동두천로 340-9",
        phone: "010-9270-6520",
        email: "cha7570@gmail.com",
        notice: "본 교회는 신천지 등 이단 사이비의 출입을 엄격히 금합니다.",
        copyright: "© 2024 DONGDUCHEON FULL GOSPEL CHURCH. All rights reserved.",
    }
};
