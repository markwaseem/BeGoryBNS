import { Heart, CreditCard, Phone } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 flex flex-col items-center bg-gray-50 text-navy" style={{ direction: "rtl" }}>
      
      {/* قسم الترحيب والمقدمة */}
      <div className="max-w-2xl text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <div className="flex justify-center mb-6">
          {/* أيقونة قلب نابض */}
          <Heart className="w-16 h-16 text-gold animate-bounce" fill="currentColor" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
          ادعم رسالة بي جوري
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          دعمك بيساعدنا نستمر في تقديم خدمات التوعية النفسية ومكافحة الإدمان، ونوصل لكل شخص محتاج مساعدة بشكل مجاني ومستمر. اختار الطريقة الأنسب ليك:
        </p>
      </div>

      {/* قسم أزرار التبرع المتحركة */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        
        {/* زر InstaPay */}
        <a 
          href="https://ipn.eg/S/begory25/instapay/2z0N1h" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex-1 flex flex-col items-center justify-center gap-3 bg-navy text-white py-8 px-6 rounded-3xl shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
        >
          {/* تأثير الإضاءة عند مرور الماوس */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          
          <CreditCard className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />
          <span className="font-bold text-2xl">InstaPay</span>
          <span className="text-sm text-gray-300">تحويل سريع ومباشر</span>
        </a>

        {/* زر فودافون كاش */}
        {/* ملحوظة: قم بتغيير رقم الهاتف في الرابط إلى رقمكم الحقيقي */}
        <a 
          href="https://wa.me/201xxxxxxxxx?text=أهلاً، أريد التبرع لخدمة بي جوري عبر فودافون كاش" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex-1 flex flex-col items-center justify-center gap-3 bg-[#E60000] text-white py-8 px-6 rounded-3xl shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
        >
          {/* تأثير الإضاءة عند مرور الماوس */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          
          <Phone className="w-10 h-10 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-2xl">Vodafone Cash</span>
          <span className="text-sm text-red-100">رقم: 010XXXXXXXX</span>
        </a>
        
      </div>

      {/* ملاحظة صغيرة للتأكيد */}
      <p className="mt-12 text-center text-gray-500 text-sm max-w-lg">
        * للتحويل عبر فودافون كاش، يرجى التواصل معنا عبر الواتساب لتأكيد الاستلام وإرسال إيصال التحويل.
      </p>
    </div>
  );
}