import { useState, useEffect } from "react";

// ─── Course Data ─────────────────────────────────────────────────────────────
const courses = [
  {
    id: 1,
    title: "دايرة شفاء",
    emoji: "💚",
    badge: "الأكثر طلباً",
    badgeColor: "bg-emerald-100 text-emerald-700",
    coverGradient: "from-emerald-400/20 to-emerald-600/20",
    shortDesc: "رحلة للتعافي العميق من الجراح النفسية والصدمات العاطفية.",
    longDesc: "برنامج متكامل يقودك في رحلة شفاء عميقة من الجراح النفسية والصدمات العاطفية. من خلال تقنيات مثبتة علمياً، ستتعلم كيف تطلق ما يثقلك وتبني حياة داخلية أكثر سلاماً وتوازناً.",
    importance: "يساعدك هذا البرنامج على التخلص من ثقل الماضي، وتجنب تكرار الأنماط السلبية في علاقاتك، مما يفتح الباب لحياة أكثر استقراراً وهدوءاً.",
    audience: "لكل إنسان يشعر أن تجارب الماضي تعيق تقدمه في الحاضر، أو يجد صعوبة في تجاوز صدمات قديمة أثرت على جودة حياته.",
    duration: "12 أسبوع",
    sessions: "12 جلسة",
    level: "جميع المستويات",
    topics: ["التعافي من الصدمات", "تقنيات اليقظة الذهنية", "إدارة المشاعر", "بناء الثقة بالنفس"],
  },
  {
    id: 2,
    title: "دايرة ثقة",
    emoji: "🌟",
    badge: "تطوير الذات",
    badgeColor: "bg-sky-100 text-sky-700",
    coverGradient: "from-sky-400/20 to-sky-600/20",
    shortDesc: "لاكتشاف نقاط قوتك وبناء ثقة حقيقية وأصيلة بنفسك.",
    longDesc: "كورس مخصص لبناء الثقة بالنفس وتطوير الهوية الشخصية. ستكتشف نقاط قوتك الخفية وتتعلم كيف تقدم نفسك بثقة وأصالة في كل جانب من جوانب حياتك اليومية والمهنية.",
    importance: "الثقة بالنفس هي المفتاح لتحقيق أهدافك. هذا الكورس يكسر حاجز الخوف من رأي الآخرين ويمنحك الأدوات للتعبير عن نفسك بحرية وقوة.",
    audience: "لكل شخص يعاني من التردد، الخجل الاجتماعي، أو يقلل من قيمة قدراته وإنجازاته أمام نفسه وأمام الآخرين.",
    duration: "٦ أسابيع",
    sessions: "١٢ جلسة",
    level: "مبتدئ إلى متوسط",
    topics: ["بناء احترام الذات", "التواصل الفعال", "تجاوز الخوف من الحكم", "الأصالة والهوية"],
  },
  {
    id: 3,
    title: "افهمني",
    emoji: "🧩",
    badge: "وعي ذاتي",
    badgeColor: "bg-purple-100 text-purple-700",
    coverGradient: "from-purple-400/20 to-purple-600/20",
    shortDesc: "لفهم دوافعك العميقة وتحسين جودة علاقاتك بالآخرين.",
    longDesc: "رحلة اكتشاف الذات العميقة لفهم دوافعك وأنماطك السلوكية. ستتعلم لغة مشاعرك وتطور مهارة الوعي الذاتي التي تحول طريقة تعاملك مع الحياة والعلاقات بشكل جذري.",
    importance: "معظم الصراعات الخارجية تبدأ من عدم فهمنا لأنفسنا. بمجرد أن تفهم 'لماذا تتصرف هكذا؟'، ستمتلك القدرة على تغيير ردود أفعالك وتحسين علاقاتك.",
    audience: "للمهتمين بالذكاء العاطفي، والمتزوجين، وأي شخص يرغب في بناء علاقات صحية مبنية على الفهم والحدود الواضحة.",
    duration: "١٠ أسابيع",
    sessions: "٢٠ جلسة",
    level: "متوسط إلى متقدم",
    topics: ["فهم أنماط التفكير", "الذكاء العاطفي", "ديناميكيات العلاقات", "الحدود الصحية"],
  },
];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCourse]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(180deg, hsl(218, 65%, 14%) 0%, hsl(218, 55%, 20%) 100%)" }}
      >
        <div className="container-rtl max-w-4xl mx-auto px-4">
          <span className="inline-block bg-gold/20 text-gold border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            دليل الكورسات
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            اكتشف برامجنا التحولية
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            تصفح برامجنا المصممة بعناية لمساعدتك على فهم نفسك، التعافي من الماضي، وبناء حياة أكثر وعياً واتزاناً.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-pad bg-gray-50/50">
        <div className="container-rtl max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-right text-right"
              >
                {/* Large Visual Area */}
                <div className={`w-full aspect-[4/3] bg-gradient-to-br ${course.coverGradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    <span className={course.badgeColor.split(" ")[1]}>{course.badge}</span>
                  </div>
                  <span className="text-7xl group-hover:scale-125 transition-transform duration-500">
                    {course.emoji}
                  </span>
                </div>

                {/* Small Title Box */}
                <div className="p-5 flex-1 flex flex-col justify-center border-t border-gray-100 bg-white z-10 w-full relative -mt-4 rounded-t-3xl">
                  <h3 className="text-2xl font-black text-navy mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{course.shortDesc}</p>
                  
                  <div className="mt-4 flex items-center text-sky text-sm font-bold group-hover:text-navy transition-colors">
                    <span>اعرف تفاصيل أكثر</span>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Course Modal (Popup Card) */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ direction: "rtl" }}>
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCourse(null)}
          ></div>

          {/* Inner Card with Animation */}
          <div className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 fade-in duration-300">
            
            {/* Modal Header Visual */}
            <div className={`h-32 sm:h-40 bg-gradient-to-br ${selectedCourse.coverGradient} flex items-center px-8 relative`}>
              <div className="text-6xl absolute left-8 opacity-50">{selectedCourse.emoji}</div>
              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 bg-white ${selectedCourse.badgeColor.split(" ")[1]}`}>
                  {selectedCourse.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-navy">{selectedCourse.title}</h2>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center transition-colors text-navy"
                aria-label="إغلاق"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-gray-100">
                {[
                  { icon: "⏱", label: "المدة", val: selectedCourse.duration },
                  { icon: "📅", label: "الجلسات", val: selectedCourse.sessions },
                  { icon: "📊", label: "المستوى", val: selectedCourse.level },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                    <span className="text-lg">{stat.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-bold">{stat.label}</span>
                      <span className="text-sm font-semibold text-navy leading-none">{stat.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Descriptions */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-gold rounded-full"></span>
                    نظرة عامة
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">{selectedCourse.longDesc}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-sky rounded-full"></span>
                    لماذا هذا الكورس مهم؟
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">{selectedCourse.importance}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-emerald-400 rounded-full"></span>
                    لمن هذا الكورس؟
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">{selectedCourse.audience}</p>
                </div>

                {/* Topics Grid */}
                <div>
                  <h4 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-purple-400 rounded-full"></span>
                    ماذا ستتعلم؟
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCourse.topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-navy shadow-sm">
                          {index + 1}
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action (Optional, just to close) */}
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="bg-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-navy/90 transition-colors"
                >
                  إغلاق التفاصيل
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}