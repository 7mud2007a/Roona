import React from 'react';
import { GALLERY_IMAGES } from '../data/menu';
import { Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <ImageIcon className="w-4 h-4 text-amber-400" />
            <span>معرض الصور</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 font-serif">
            أجواء مطعم بيتنا
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            عش معنا تفاصيل الضيافة الشامية الدافئة والجلسات المريحة.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="group relative h-72 rounded-2xl overflow-hidden border border-stone-800 shadow-xl bg-stone-900"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 right-0 left-0 p-5 space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-amber-400 uppercase bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  {img.category}
                </span>
                <h3 className="text-base font-bold text-amber-100 font-serif pt-1">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
