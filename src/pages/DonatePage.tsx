import { useState } from "react";
import { Heart, CreditCard, Phone, Check } from "lucide-react";

export default function DonatePage() {
  // حالة (State) لتتبع هل تم نسخ الرقم أم لا
  const [isCopied, setIsCopied] = useState(false);
  const vodafoneNumber = "+201003600913";

  // دالة نسخ الرقم
  const handleCopyNumber = () => {
    navigator.clipboard.writeText(vodafoneNumber);
    setIsCopied(true);
    
    // إعادة الزر لشكله الطبيعي بعد ثانيتين
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 flex flex-col items-center bg-gray-50 text-navy" style={{ direction: "rtl" }}>
      
      {/* مقدمة الصفحة */}
      <div className="max-w-2xl text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-gold animate-bounce" fill="currentColor" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
          ادعم رسالة بي جوري
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          دعمك بيساعدنا نستمر في تقديم خدمات التوعية النفسية ومكافحة الإدمان، ونوصل لكل شخص محتاج مساعدة بشكل مجاني ومستمر. اختار الطريقة الأنسب ليك:
        </p>
      </div>

      {/* أزرار التبرع */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        
        {/* زر InstaPay */}
        <a 
          href="https://ipn.eg/S/begory25/instapay/2z0N1h" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex-1 flex flex-col items-center justify-center gap-3 bg-[#0a192f] text-white py-8 px-6 rounded-3xl shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <CreditCard className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />
          <span className="font-bold text-2xl">InstaPay</span>
          <span className="text-sm text-gray-300">تحويل سريع ومباشر</span>
        </a>

        {/* زر فودافون كاش المطور (نسخ الرقم) */}
        <button 
          onClick={handleCopyNumber}
          className={`group relative flex-1 flex flex-col items-center justify-center gap-3 text-white py-8 px-6 rounded-3xl shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer ${
            isCopied ? "bg-green-600" : "bg-[#E60000]"
          }`}
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          
          {/* تغيير الأيقونة بناءً على حالة النسخ */}
          {isCopied ? (
            <Check className="w-10 h-10 text-white animate-in zoom-in duration-300" />
          ) : (
            <Phone className="w-10 h-10 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          )}

          <span className="font-bold text-2xl">Vodafone Cash</span>
          
          {/* تغيير النص بناءً على حالة النسخ */}
          <span className="text-sm font-medium flex flex-col items-center gap-1 text-white/90">
            {isCopied ? (
              <span className="text-white font-bold">تم نسخ الرقم بنجاح!</span>
            ) : (
              <>
                <span>اضغط لنسخ الرقم</span>
                <span className="font-bold tracking-wider">{vodafoneNumber}</span>
              </>
            )}
          </span>
        </button>
        
      </div>

      <p className="mt-12 text-center text-gray-500 text-sm max-w-lg">
        * للتحويل عبر فودافون كاش، يرجى التواصل معنا عبر الواتساب لتأكيد الاستلام وإرسال إيصال التحويل.
      </p>
    </div>
  );
}