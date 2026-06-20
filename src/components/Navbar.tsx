import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/courses", label: "الكورسات" },
  { href: "/freedom-journey", label: "رحلة حرية" },
  { href: "/videos", label: "مكتبة الفيديوهات" },
];

export default function Navbar() {
  const [location, navigate] = useLocation();
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
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-rtl flex items-center justify-between h-16 md:h-20 px-4 max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/begory-logo.png"
            alt="شعار بي جوري"
            className="h-10 w-auto md:h-12 object-contain transition-transform group-hover:scale-105"
          />
          <span
            className={`font-bold text-xl md:text-2xl tracking-wide transition-colors ${
              scrolled ? "text-navy" : "text-gold"
            }`}
          >
            بي جوري
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <li key={link.href}>
                <button
                  onClick={() => navigate(link.href)}
                  className={`text-base font-bold transition-all duration-300 relative py-2 cursor-pointer focus:outline-none ${
                    isActive
                      ? scrolled
                        ? "text-navy"
                        : "text-gold"
                      : scrolled
                      ? "text-muted-foreground hover:text-navy"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {/* Active Line Indicator */}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 right-0 left-0 h-0.5 rounded-full transition-all ${
                        scrolled ? "bg-navy" : "bg-gold"
                      }`}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 shadow-xl ${
          menuOpen ? "max-h-80 py-4 bg-white/98 backdrop-blur-md border-t border-border" : "max-h-0"
        }`}
      >
        <ul className="container-rtl flex flex-col gap-1 px-4">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <li key={link.href}>
                <button
                  onClick={() => navigate(link.href)}
                  className={`w-full text-right px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-navy hover:bg-navy/5"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}