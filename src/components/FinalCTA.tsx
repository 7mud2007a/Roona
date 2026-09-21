import React from 'react';
import { Calendar, MessageSquare, Phone } from 'lucide-react';

interface FinalCTAProps {
  onReserveTable: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onReserveTable }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950 text-stone-100 relative overflow-hidden border-t border-amber-800/30">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 font-serif leading-tight">
          جاهزين نجهزلكم الطاولة؟
        </h2>
        <p className="text-stone-300 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          سواء كنت تخطط لعشاء عائلي دافئ، أو غداء عمل مميز، طاولتكم وأشهى الأطباق الشامية بانتظاركم في مطعم بيتنا.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onReserveTable}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-2xl text-lg shadow-xl shadow-amber-950/60 transition-all active:scale-98"
          >
            <Calendar className="w-5 h-5" />
            <span>احجز طاولتك الآن</span>
          </button>

          <a
            href="https://wa.me/963930431817"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all active:scale-98 border border-emerald-500/30"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب مباشرة عبر الواتساب</span>
          </a>
        </div>

        <div className="pt-6 flex items-center justify-center gap-2 text-stone-400 text-xs">
          <Phone className="w-4 h-4 text-amber-400" />
          <span>للاستفسار المباشر عبر الهاتف أو الواتساب: 0930431817</span>
        </div>
      </div>
    </section>
  );
};
