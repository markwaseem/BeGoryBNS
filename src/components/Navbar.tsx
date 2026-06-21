import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن بي جوري" },
  { href: "/courses", label: "الكورسات" },
  { href: "/freedom-journey", label: "رحلة حرية" },
  { href: "/videos", label: "مكتبة الفيديوهات" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="flex items-center justify-between h-16 md:h-20 px-4 max-w-7xl mx-auto w-full" style={{ direction: "rtl" }}>
        
        {/* شعار المؤسسة */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/begory-logo.png"
              alt="BeGory Logo"
              className="w-10 h-10 object-contain rounded-full bg-transparent shadow-sm"
            />
            <span className={`text-2xl font-black tracking-wide ${scrolled ? "text-navy" : "text-gold"}`}>
              بي جوري
            </span>
          </Link>
        </div>

        {/* روابط الكمبيوتر */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-base font-bold transition-all duration-300 relative py-2 cursor-pointer ${
                    isActive
                      ? scrolled
                        ? "text-navy"
                        : "text-gold"
                      : scrolled
                      ? "text-gray-500 hover:text-navy"
                      : "text-white/90 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 right-0 left-0 h-0.5 rounded-full ${
                        scrolled ? "bg-navy" : "bg-gold"
                      }`}
                    />
                  )}
                </a>
              </Link>
            );
          })}
        </div>

        {/* زر التبرع للكمبيوتر */}
        <div className="hidden md:block">
          <Link href="/donate">
            <a className="bg-gradient-to-r from-gold to-yellow-500 text-navy font-bold px-6 py-2 rounded-full transition-transform hover:scale-105 shadow-md">
              🤍 ادعم رسالتنا
            </a>
          </Link>
        </div>

        {/* زر قائمة الموبايل */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-navy" : scrolled ? "bg-navy" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0 bg-navy" : scrolled ? "bg-navy" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 bg-navy" : scrolled ? "bg-navy" : "bg-white"}`} />
        </button>

        {/* قائمة الموبايل المنسدلة */}
        <div
          className={`md:hidden absolute top-full right-0 left-0 overflow-hidden transition-all duration-300 ease-in-out shadow-xl ${
            menuOpen ? "max-h-96 opacity-100 bg-white border-t border-gray-100 py-4" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-2 px-4">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`w-full text-right px-5 py-3.5 rounded-xl text-base font-bold transition-all ${
                      isActive ? "bg-navy text-white shadow-sm" : "text-navy hover:bg-gray-50 active:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              );
            })}
            
            {/* زر التبرع للموبايل */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="/donate">
                <a className="flex justify-center w-full bg-gradient-to-r from-gold to-yellow-500 text-navy font-bold px-6 py-3 rounded-xl shadow-md">
                  🤍 ادعم رسالتنا
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}