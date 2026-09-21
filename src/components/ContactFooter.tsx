import React from 'react';
import { Clock, Phone, MapPin, UtensilsCrossed, MessageSquare, Heart } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">

          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-amber-50">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-amber-100 font-serif">مطعم بيتنا</span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              وجهتكم الأولى للأصالة والمذاق السوري الأصيل. نقدم لكم أشهى المشاوي، والمقبلات، والأطباق الشامية التراثية بإشراف نخبة من الطهاة.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/963930431817"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-800/40 text-emerald-300 border border-emerald-600/30 text-xs font-bold hover:bg-emerald-700/50 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>واتساب مباشر: 0930431817</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-amber-200 font-bold text-sm font-serif">روابط الموقع</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">عن بيتنا</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">قائمة المنيو</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">أجواء المطعم</a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-amber-400 transition-colors">الحجز والطلب</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Card */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-amber-200 font-bold text-sm font-serif flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>ساعات العمل</span>
            </h4>
            <div className="bg-stone-900 p-4 rounded-2xl border border-stone-800 text-xs space-y-3">
              <div>
                <span className="text-stone-400 block mb-0.5">السبت — الخميس:</span>
                <span className="text-amber-300 font-bold">11:00 صباحاً — 12:00 منتصف الليل</span>
              </div>
              <div className="pt-2 border-t border-stone-800">
                <span className="text-stone-400 block mb-0.5">الجمعة:</span>
                <span className="text-amber-300 font-bold">1:00 ظهراً — 12:00 منتصف الليل</span>
              </div>
            </div>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-amber-200 font-bold text-sm font-serif flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>معلومات التواصل والموقع</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 block">رقم الواتساب والطلب:</span>
                  <a href="https://wa.me/963930431817" className="text-amber-200 font-bold hover:underline">
                    0930431817 (سوريا)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 block">العنوان:</span>
                  <span className="text-stone-300">موقع المطعم — سيتم تحديث العنوان التفصيلي</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} مطعم بيتنا. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1 text-stone-500">
            <span>صُنع بمحبة وضيافة شامية أصيلة</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
