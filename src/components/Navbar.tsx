import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "عن بي جوري", path: "/about" },
    { name: "الكورسات السنوية", path: "/courses" },
    { name: "برنامج رحلة حرية", path: "/freedom-journey" },
    { name: "معرض الفيديوهات", path: "/videos" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4 text-navy" : "bg-transparent py-6 text-white"
      }`}
      style={{ direction: "rtl" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* شعار المؤسسة والاسم */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-bold text-navy text-xl shadow-inner">
                BG
              </div>
              <span className={`text-2xl font-black tracking-wide ${scrolled ? "text-navy" : "text-white"}`}>
                بي جوري
              </span>
            </Link>
          </div>

          {/* روابط التنقل للكمبيوتر */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`font-semibold text-lg pb-1 border-b-2 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "border-gold text-gold"
                        : `border-transparent hover:text-gold ${
                            scrolled ? "text-navy" : "text-white"
                          }`
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* زر ادعم رسالتنا للكمبيوتر */}
          <div className="hidden md:block">
            <button
              onClick={() => setLocation("/donate")}
              className={`font-bold py-2.5 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer text-base ${
                scrolled
                  ? "bg-navy text-white hover:bg-opacity-90"
                  : "bg-gold text-navy hover:brightness-110"
              }`}
            >
              ادعم رسالتنا 🤍
            </button>
          </div>

          {/* زر قائمة الموبايل */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? "text-navy" : "text-white"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col border-t border-gray-100">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 rounded-xl text-lg font-medium cursor-pointer transition-colors ${
                      isActive
                        ? "bg-gray-50 text-gold font-bold"
                        : "text-navy hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
            
            {/* زر ادعم رسالتنا للموبايل */}
            <div className="pt-4 px-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setLocation("/donate");
                }}
                className="w-full bg-navy text-white font-bold py-3 px-4 rounded-xl shadow-md text-center text-lg block hover:bg-opacity-90"
              >
                ادعم رسالتنا 🤍
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}