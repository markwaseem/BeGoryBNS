// ─── Video Data ──────────────────────────────────────────────────────────────
// To add or swap videos, only edit this array.
// Each item needs: id, title, description, embedId (YouTube video ID), category.

const videos = [
  {
    id: 1,
    title: "دائرة ثقة",
    description: "تعرف على نفسك بشكل افضل من خلال فهم دائرة ثقتك وكيفية توسيعها بشكل صحي",
    embedId: "https://youtu.be/qkFJd7_6fO4?si=_HeMYhkFwSK_69tJ",
    category: "توعية",
  },
  {
    id: 2,
    title: "خطوات عملية للتعافي من إدمان المحتوى الإباحي",
    description: "خطة علمية ومنهجية مبنية على أبحاث علم النفس السلوكي",
    embedId: "dQw4w9WgXcQ",
    category: "تعافي",
  },
  {
    id: 3,
    title: "قوة الإرادة — لماذا تفشل وكيف تقويها؟", 
    description: "فهم آليات الإرادة في الدماغ وطرق بناءها بشكل مستدام",
    embedId: "dQw4w9WgXcQ",
    category: "تطوير الذات",
  },
  {
    id: 4,
    title: "الصدمة النفسية وعلاقتها بالإدمان",
    description: "كيف تؤثر التجارب المؤلمة في الماضي على سلوكياتنا الإدمانية",
    embedId: "dQw4w9WgXcQ",
    category: "توعية",
  },
  {
    id: 5,
    title: "تقنية EFT للتخلص من الرغبة الملحّة",
    description: "تعلم تقنية الطرق العاطفية كأداة فعالة في لحظات الأزمة",
    embedId: "dQw4w9WgXcQ",
    category: "تقنيات",
  },
  {
    id: 6,
    title: "كيف تبني عادات صحية تحل محل الإدمان؟",
    description: "العلم وراء بناء العادات وكيف تستثمره في رحلة التعافي",
    embedId: "dQw4w9WgXcQ",
    category: "تطوير الذات",
  },
];

const categories = ["الكل", ...Array.from(new Set(videos.map((v) => v.category)))];

// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";

export default function VideoGalleryPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [playing, setPlaying] = useState<number | null>(null);

  const filtered =
    activeCategory === "الكل"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(180deg, hsl(218, 65%, 14%) 0%, hsl(218, 55%, 20%) 100%)" }}
      >
        <div className="container-rtl">
          <span className="inline-block bg-gold/20 text-gold border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            مكتبة الفيديوهات
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            محتوى توعوي متخصص
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            مكتبة شاملة من الفيديوهات التعليمية في الصحة النفسية والتعافي من الإدمان
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container-rtl py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-navy text-white shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-navy/10 hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <section className="section-pad" style={{ background: "hsl(210, 20%, 97%)" }}>
        <div className="container-rtl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                isPlaying={playing === video.id}
                onPlay={() => setPlaying(video.id)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-5xl mb-4">🎬</p>
              <p className="text-lg font-semibold">لا توجد فيديوهات في هذا التصنيف</p>
            </div>
          )}
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="pb-20">
        <div className="container-rtl">
          <div
            className="rounded-3xl p-10 text-center text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, hsl(218, 65%, 18%), hsl(204, 72%, 35%))" }}
          >
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              اشترك في قناتنا على يوتيوب
            </h2>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              لا تفوّت أي محتوى جديد — جلسات حية، مقابلات، وأدوات عملية أسبوعية
            </p>
            <a
              href="https://www.youtube.com/@a-begory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF0000] hover:bg-[#cc0000] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              اشترك في القناة
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

interface VideoCardProps {
  video: typeof videos[0];
  isPlaying: boolean;
  onPlay: () => void;
}

function VideoCard({ video, isPlaying, onPlay }: VideoCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-border hover-lift shadow-sm flex flex-col">
      {/* Thumbnail / Player */}
      <div className="relative aspect-video bg-gray-900">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onPlay}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="تشغيل الفيديو"
            >
              <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-semibold text-sky bg-sky/10 rounded-full px-3 py-1 w-fit mb-3">
          {video.category}
        </span>
        <h3 className="font-bold text-navy text-base leading-snug mb-2">{video.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
}
