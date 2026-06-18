import { useLocation } from "wouter";

export default function AboutPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(218, 65%, 14%) 0%, hsl(218, 55%, 22%) 50%, hsl(204, 72%, 30%) 100%)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-10"
          style={{ background: "hsl(42, 60%, 78%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full opacity-10"
          style={{ background: "hsl(204, 72%, 55%)", filter: "blur(50px)" }} />

        <div className="container-rtl relative z-10 text-center py-32 pt-40">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white/90 text-sm font-medium">خدمة بي جوري للصحة النفسية ومكافحة الإدمان</span>
          </div>

          {/* Slogan */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            رحلتك نحو
            <span className="block" style={{ color: "hsl(42, 60%, 78%)" }}>الشفاء تبدأ هنا</span>
          </h1>

          {/* Mission */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            نحن في بي جوري نؤمن أن كل إنسان يستحق حياة مليئة بالصحة النفسية والتوازن. نقدم لك الدعم المتخصص والأدوات العلمية لتجاوز التحديات النفسية وإدمان الإنترنت، في بيئة آمنة وسرية تماماً.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/freedom-journey")}
              className="px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "hsl(42, 60%, 78%)", color: "hsl(218, 65%, 14%)" }}
            >
              ابدأ رحلتك الآن
            </button>
            <button
              onClick={() => navigate("/courses")}
              className="px-8 py-4 rounded-2xl font-bold text-lg text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              استعرض الكورسات
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs">مرر للأسفل</span>
          <div className="w-0.5 h-8 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About / Mission */}
      <section className="section-pad bg-white">
        <div className="container-rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sky font-semibold text-sm tracking-wide uppercase mb-3 block">من نحن</span>
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
                بي جوري — رفيق الرحلة النفسية
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                تأسست خدمة بي جوري من إيمان راسخ بأن الصحة النفسية حق لكل إنسان. نعمل على تقديم برامج متكاملة تجمع بين العلم والرحمة الإنسانية، لمساعدة من يعانون من التحديات النفسية وإدمان المحتوى الإلكتروني.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                نوفر بيئة آمنة وخالية من الحكم، حيث يمكنك التحدث بصدق والحصول على المساعدة المناسبة. فريقنا من المختصين النفسيين يرافقك في كل خطوة نحو التعافي والنمو.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "٥٠٠+", l: "شخص استفاد" },
                  { n: "٣", l: "برامج متخصصة" },
                  { n: "١٠٠٪", l: "سرية تامة" },
                  { n: "٢٤/٧", l: "دعم مستمر" },
                ].map((s) => (
                  <div key={s.l} className="bg-muted rounded-2xl p-4 text-center hover-lift">
                    <p className="text-3xl font-black text-navy">{s.n}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative">
              <div
                className="rounded-3xl p-8 text-white h-full min-h-[320px] flex flex-col justify-between"
                style={{ background: "linear-gradient(135deg, hsl(218, 65%, 18%), hsl(204, 72%, 35%))" }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">رسالتنا</h3>
                  <p className="text-white/80 leading-relaxed">
                    نسعى لأن نكون الجسر الذي يوصل كل إنسان إلى نسخته الأفضل، من خلال تقديم المعرفة والأدوات والدعم اللازمين للشفاء الحقيقي والتعافي المستدام.
                  </p>
                </div>
                <div className="mt-8 flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold text-navy font-bold rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-xs">منذ</p>
                <p className="text-lg leading-none">٢٠٢٢</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Connection */}
      <section className="section-pad" style={{ background: "hsl(210, 20%, 97%)" }}>
        <div className="container-rtl">
          <div className="text-center mb-12">
            <span className="text-sky font-semibold text-sm tracking-wide mb-3 block">تواصل معنا</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy">
              انضم إلى مجتمعنا
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              تابعنا على منصات التواصل الاجتماعي للحصول على محتوى توعوي يومي ودعم مستمر
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <SocialCard
              href="https://www.facebook.com/BEGORYBNS"
              icon={<FacebookSVG />}
              color="#1877F2"
              name="فيسبوك"
              handle="@BEGORYBNS"
              desc="تابع منشوراتنا التوعوية اليومية"
            />
            <SocialCard
              href="https://www.youtube.com/@a-begory"
              icon={<YouTubeSVG />}
              color="#FF0000"
              name="يوتيوب"
              handle="@a-begory"
              desc="شاهد جلساتنا ومحتوانا التعليمي"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container-rtl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">قيمنا الأساسية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🤝", title: "الدعم الإنساني", desc: "نرافقك في كل خطوة بروح من الرحمة والفهم الحقيقي لتجربتك." },
              { icon: "🔒", title: "السرية التامة", desc: "خصوصيتك مقدسة عندنا. لا يُشارَك أي معلومة من دون إذنك الكامل." },
              { icon: "🧠", title: "المنهجية العلمية", desc: "برامجنا مبنية على أحدث الأبحاث في علم النفس السلوكي والإدراكي." },
            ].map((v) => (
              <div key={v.title} className="bg-muted rounded-3xl p-8 text-center hover-lift">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface SocialCardProps {
  href: string;
  icon: React.ReactNode;
  color: string;
  name: string;
  handle: string;
  desc: string;
}

function SocialCard({ href, icon, color, name, handle, desc }: SocialCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-border hover-lift group transition-all duration-300 hover:border-opacity-50"
      style={{ "--hover-border": color } as React.CSSProperties}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}18` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <div>
        <p className="font-bold text-navy text-lg leading-none">{name}</p>
        <p className="text-sky text-sm mt-1">{handle}</p>
        <p className="text-muted-foreground text-sm mt-1">{desc}</p>
      </div>
    </a>
  );
}

function FacebookSVG() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function YouTubeSVG() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
