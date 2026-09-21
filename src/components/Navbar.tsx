import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone, UtensilsCrossed, Calendar } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateToReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onNavigateToReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'المنيو', href: '#menu' },
    { name: 'عن بيتنا', href: '#about' },
    { name: 'الأجواء', href: '#gallery' },
    { name: 'الحجز والطلب', href: '#reservation' },
    { name: 'التواصل', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-amber-800/30 py-3'
          : 'bg-gradient-to-b from-stone-950/90 via-stone-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-amber-50 shadow-md group-hover:bg-amber-500 transition-colors">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-amber-100 tracking-wide font-serif">
                مطعم بيتنا
              </span>
              <span className="text-[10px] text-amber-400 font-sans tracking-widest">
                أصالة المذاق السوري
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-stone-300 hover:text-amber-400 font-medium text-sm transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct Order / Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="عرض الطلب الحالي"
              className="relative p-2.5 rounded-full bg-stone-800/80 text-amber-200 hover:bg-stone-700 hover:text-amber-400 border border-amber-500/20 transition-all active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Reservation Button */}
            <button
              onClick={onNavigateToReservation}
              className="hidden sm:flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold px-4 py-2 rounded-xl text-sm transition-all shadow-md active:scale-95 border border-amber-400/30"
            >
              <Calendar className="w-4 h-4" />
              <span>احجز طاولتك</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-stone-800 text-stone-200 hover:text-amber-400"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-4 pb-6 space-y-3 mt-3 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-2.5 rounded-lg text-stone-200 hover:bg-stone-800 hover:text-amber-400 font-medium text-base transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToReservation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold py-3 rounded-xl text-base shadow-md"
            >
              <Calendar className="w-5 h-5" />
              <span>حجز طاولة وطلب الطعام</span>
            </button>
            <a
              href="https://wa.me/963930431817"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-2.5 rounded-xl text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>تواصل مباشر: 0930431817</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
