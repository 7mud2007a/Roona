import React from 'react';
import { ChefHat, Flame, Shield, Award } from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: ChefHat,
      title: 'طهاة شاميون محترفون',
      desc: 'خبرة طويلة في تحضير المأكولات الشامية والأطباق التراثية بدقة وحرفية عالية.',
    },
    {
      icon: Flame,
      title: 'مشاوي على الفحم الحجري',
      desc: 'نستخدم الفحم الحجري الطبيعي لإعطاء اللحوم النكهة والدخنة الشامية الأصيلة.',
    },
    {
      icon: Shield,
      title: 'لحوم بلدية طازجة يومياً',
      desc: 'نضمن اختيار أجود أنواع اللحوم والخضار اليومية الطازجة بدون أي مواد حافظة.',
    },
    {
      icon: Award,
      title: 'خدمة ضيافة متميزة',
      desc: 'اهتمام فائق بالزبائن وسرعة في تلبية الطلبات مع أجواء عائلية دافئة.',
    },
  ];

  return (
    <section className="py-16 bg-stone-950 border-y border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((f, index) => {
            const Icon = f.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-stone-900/40 border border-stone-800 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-amber-100 font-serif mb-2">{f.title}</h3>
                <p className="text-stone-400 text-xs font-light leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
