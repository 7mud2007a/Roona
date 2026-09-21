import React from 'react';
import { Flame, Star, ShoppingBag, Plus, Check } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import type { MenuItem, CartItem } from '../types';

interface FeaturedDishesProps {
  cartItems: CartItem[];
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({
  cartItems,
  onAddToCart,
  onUpdateQuantity,
}) => {
  const featured = MENU_ITEMS.filter((item) => item.isFeatured).slice(0, 4);

  const getQuantityInCart = (itemId: string) => {
    const found = cartItems.find((c) => c.item.id === itemId);
    return found ? found.quantity : 0;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ar-SY') + ' ل.س';
  };

  return (
    <section className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>الأكثر طلباً ومحبة</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 font-serif">
            أشهر أطباق بيتنا
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            تذوق أشهى ما يقدمه مطبخنا الشامي، محضر بأيدي أفضل الطهاة الشاميين.
          </p>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => {
            const qty = getQuantityInCart(item.id);
            return (
              <div
                key={item.id}
                className="bg-stone-950/80 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/20" />

                    <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-stone-950" />
                      <span>{item.badge || 'الأكثر طلباً'}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-stone-900/90 text-amber-400 font-bold text-sm px-3 py-1 rounded-xl border border-amber-500/30 backdrop-blur-md">
                      {formatPrice(item.price)}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-bold text-amber-100 font-serif group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-stone-400 text-xs font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  {qty > 0 ? (
                    <div className="flex items-center justify-between bg-stone-800 border border-amber-500/30 rounded-xl p-2">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        <span>مضاف ({qty})</span>
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-3 py-1 rounded-lg text-xs transition-colors flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>إضافة المزيد</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => onAddToCart(item, 1)}
                      className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-2.5 rounded-xl text-sm transition-all shadow-md active:scale-98"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>أضف للطلب الآن</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
