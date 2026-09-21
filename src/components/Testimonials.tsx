import React from 'react';
import { TESTIMONIALS } from '../data/menu';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Quote className="w-4 h-4 text-amber-400" />
            <span>شهادات نعتز بها</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 font-serif">
            آراء زبائن بيتنا
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            سعداء بتوفير تجربة طعام أصيلة ترضي ذوق عائلتكم الكريمة.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-4 shadow-xl flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-4 left-4 pointer-events-none" />

              <div className="space-y-3">
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-stone-300 text-sm font-light leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-800">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-amber-200 font-serif">{t.author}</h4>
                  <span className="text-[11px] text-stone-500">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
