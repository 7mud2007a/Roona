import React from 'react';
import { Heart, ShieldCheck, Flame, Users, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative Warm Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Gallery / Image Composite */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&q=80&w=600"
                  alt="مقبلات شامية طازجة"
                  className="rounded-2xl shadow-xl object-cover h-56 sm:h-64 w-full border border-stone-800"
                />
                <div className="bg-amber-900/40 border border-amber-500/30 rounded-2xl p-5 text-center backdrop-blur-sm">
                  <span className="text-3xl font-bold text-amber-400 block font-serif">100%</span>
                  <span className="text-xs text-stone-300 font-medium">سمن بلدي وبهارات شامية أصيلة</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-stone-800 border border-stone-700 rounded-2xl p-5 text-center">
                  <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <span className="text-stone-200 font-bold text-sm block">ضيافة عائلية دافئة</span>
                  <span className="text-xs text-stone-400">تليق بعائلتكم وضيوفكم</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
                  alt="أجواء مطعم بيتنا الداخلي"
                  className="rounded-2xl shadow-xl object-cover h-56 sm:h-64 w-full border border-stone-800"
                />
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
              <span>قصتنا وشغفنا</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-100 font-serif leading-tight">
              أهلاً بكم في بيتنا... حيث تعود الذكريات مع كل لقمة
            </h2>

            <p className="text-stone-300 leading-relaxed font-light text-base sm:text-lg">
              تأسس <strong className="text-amber-300 font-semibold">مطعم بيتنا</strong> ليكون مقصداً لكل من يعشق نكهة الطعام السوري الأصيل المصنوع بإتقان ومحبة. نحن نؤمن بأن الطعام ليس مجرد وجبة، بل هو تجربة تجمع العائلة والأصدقاء حول طاولة واحدة في أجواء تفيض بالدفء والترحاب.
            </p>

            <p className="text-stone-300 leading-relaxed font-light text-base sm:text-lg">
              نختار لحومنا وخضارنا يومياً من أفضل المصادر المحلية، ونعتمد التتبيلات الحلبية والشامية التراثية المشوية على الفحم الحجري لضمان الحصول على طعم لا يُنسى.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/50">
                <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-amber-200 font-bold text-sm">مشاوي طازجة على الفحم</h4>
                  <p className="text-stone-400 text-xs mt-0.5">تُحضر فور الطلب لضمان الطراوة والنكهة</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/50">
                <Heart className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-amber-200 font-bold text-sm">وصفات بيتية تراثية</h4>
                  <p className="text-stone-400 text-xs mt-0.5">نكهة شامية حقيقية كأكل البيت تماماً</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/50">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-amber-200 font-bold text-sm">جودة ونظافة فائقة</h4>
                  <p className="text-stone-400 text-xs mt-0.5">أعلى معايير سلامة الأغذية والعناية</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/50">
                <Users className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-amber-200 font-bold text-sm">جلسات مريحة لكل العائلة</h4>
                  <p className="text-stone-400 text-xs mt-0.5">خدمة ضيافة راقية وابتسامة دائمة</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
