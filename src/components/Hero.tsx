import React from 'react';
import { Utensils, Calendar, Sparkles, Clock, MapPin, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section id="hero" className="relative min-h-screen bg-stone-950 flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000"
          alt="مطعم بيتنا - أجواء المشاوي والأكلات الشامية"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,10,9,0.8)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Typography & CTAs Column */}
          <div className="lg:col-span-7 space-y-6 text-right">

            {/* Syrian Hospitality Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>طعم البيت... بلمسة بيتنا الأصيلة</span>
            </div>

            {/* Hero Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-amber-50 leading-[1.15] font-serif">
              مرحباً بكم في <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-200 via-amber-400 to-amber-600">
                مطعم بيتنا
              </span>
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              نستحضر لكم أعرق وصفات المطبخ السوري العريض، من المشاوي الحلبية المتبلة بعناية، إلى المقبلات الشامية الفاخرة المجهزة يومياً بكل حب وشغف.
            </p>

            {/* Quick CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl shadow-amber-900/30 active:scale-98 group"
              >
                <Utensils className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>استكشف المنيو</span>
              </button>

              <button
                onClick={onReserveTable}
                className="flex items-center justify-center gap-3 bg-stone-900/80 hover:bg-stone-800 text-amber-200 hover:text-amber-100 font-semibold px-8 py-4 rounded-xl text-lg border border-amber-500/30 backdrop-blur-md transition-all active:scale-98"
              >
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>احجز طاولتك</span>
              </button>
            </div>

            {/* Highlights Bar */}
            <div className="pt-8 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-stone-300 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>مفتوح يومياً حتى 12 ليلاً</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
                <span>مكونات بلدي طازجة 100%</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>جلسات عائلية مريحة</span>
              </div>
            </div>

          </div>

          {/* Visual Card Column */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md">

              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-600 to-amber-800 opacity-30 blur-xl"></div>

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-stone-900/90 shadow-2xl p-3">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
                  alt="طبق كباب حلبي مشوي"
                  className="w-full h-80 object-cover rounded-2xl shadow-inner"
                />
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      طبق بيتنا المميز
                    </span>
                    <span className="text-amber-400 font-bold text-sm">75,000 ل.س</span>
                  </div>
                  <h3 className="text-lg font-bold text-amber-100 font-serif">
                    كباب حلبي مع الخضار المشوية
                  </h3>
                  <p className="text-stone-400 text-xs font-light line-clamp-2">
                    لحم ضأن بلدي مفروم ومتبل بالبهارات الحلبية الشهيرة، يقدم مع البقدونس والسماق والخبز الشامي المحمص.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:block animate-bounce">
        <a href="#about" aria-label="الانتقال للأسفل" className="text-stone-400 hover:text-amber-400 transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
