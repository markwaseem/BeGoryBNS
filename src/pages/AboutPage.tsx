import { useLocation } from "wouter";

export default function AboutPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(218, 65%, 14%) 0%, hsl(218, 55%, 22%) 50%, hsl(204, 72%, 30%) 100%)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full opacity-10"
          style={{ background: "hsl(42, 60%, 78%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 md:w-56 md:h-56 rounded-full opacity-10"
          style={{ background: "hsl(204, 72%, 55%)", filter: "blur(50px)" }} />

        {/* Safe Container for Mobile & Desktop */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center py-24 md:py-32 pt-32 md:pt-40" style={{ direction: "rtl" }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-8 text-xs md:text-sm text-gold font-medium">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            مؤسسة بي جوري للتوعية النفسية
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            رحلتك نحو <span className="text-gold">الوعي النفسي</span> والتعافي الحقيقي تبدأ من هنا
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-2">
            مساحة آمنة ومتخصصة لمساعدتك على فهم نفسك، وتجاوز التحديات السلوكية والنفسية، وبناء حياة أكثر توازناً وسلاماً.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 w-full sm:w-auto">
            <button
              onClick={() => navigate("/freedom-journey")}
              className="w-full sm:w-auto font-bold text-base md:text-lg px-8 py-4 rounded-2xl bg-gold text-navy hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20 hover:scale-105 cursor-pointer focus:outline-none"
            >
              ابدأ رحلة حرية
            </button>
            <button
              onClick={() => navigate("/courses")}
              className="w-full sm:w-auto font-bold text-base md:text-lg px-8 py-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none"
            >
              تصفح الكورسات
            </button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Sections (Safe Mobile Margins) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8" style={{ direction: "rtl" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <div className="bg-gray-50/50 p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center text-navy text-2xl mb-5">🎯</div>
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">رسالتنا</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                تقديم وعي نفسي حقيقي ومبسط للجميع، وكسر الوصمة المحيطة بالصحة النفسية من خلال توفير أدوات وبرامج تعافي عملية تعتمد على أسس علمية رصينة لتصاحب الفرد في رحلته اليومية.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gray-50/50 p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-sky/5 flex items-center justify-center text-sky text-2xl mb-5">👁️‍عون</div>
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                أن نكون المنصة العربية الأولى والموثوقة في تقديم برامج الشفاء الذاتي والتعافي السلوكي، لتمكين مجتمع واعي، متعافي، وقادر على مواجهة تحديات الحياة المعاصرة بمرونة نفسية عالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Channels Section */}
      <section className="py-16 md:py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center" style={{ direction: "rtl" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">تابع قنواتنا التعليمية</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10 md:mb-12 px-4">
            ننشر يومياً محتوى توعوي، فيديوهات، ومقالات تفصيلية لمساعدتك. انضم إلى مجتمعنا على منصات التواصل الاجتماعي.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto px-2">
            <SocialCard
              name="صفحة فيسبوك الرسمية"
              handle="@BEGORYBNS"
              desc="المقالات اليومية والإعلانات عن الكورسات الحية"
              href="https://www.facebook.com/BEGORYBNS"
              color="#1877F2"
              icon={<FacebookSVG />}
            />
            <SocialCard
              name="قناة يوتيوب الرسمية"
              handle="@a-begory"
              desc="المحاضرات المرئية وسلاسل التوعية النفسية"
              href="https://www.youtube.com/@a-begory"
              color="#FF0000"
              icon={<YoutubeSVG />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-components with safe spacing for layout cleanliness
function SocialCard({ name, handle, desc, href, color, icon }: { name: string; handle: string; desc: string; href: string; color: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-right group"
      style={{ "--hover-border": color } as React.CSSProperties}
    >
      <div
        className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}12` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <div>
        <p className="font-bold text-navy text-base md:text-lg leading-snug">{name}</p>
        <p className="text-sky text-xs md:text-sm mt-0.5">{handle}</p>
        <p className="text-muted-foreground text-xs md:text-sm mt-1 leading-relaxed">{desc}</p>
      </div>
    </a>
  );
}

function FacebookSVG() {
  return (
    <svg width="24" height="24" md-width="28" md-height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeSVG() {
  return (
    <svg width="24" height="24" md-width="28" md-height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}