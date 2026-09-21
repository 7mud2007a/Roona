import React, { useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';
import { MenuItemCard } from './MenuItemCard';
import type { MenuItem, CartItem, CategoryId } from '../types';
import { Search, Utensils } from 'lucide-react';

interface MenuProps {
  cartItems: CartItem[];
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
}

export const Menu: React.FC<MenuProps> = ({
  cartItems,
  onAddToCart,
  onUpdateQuantity,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getQuantityInCart = (itemId: string) => {
    const found = cartItems.find((c) => c.item.id === itemId);
    return found ? found.quantity : 0;
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Utensils className="w-4 h-4" />
            <span>منيو مطعم بيتنا</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 font-serif">
            تشكيلة أطباقنا الشامية الفاخرة
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            اختر أطباقك المفضلة وسجل طلبك بسهولة ليتم تجهيزه لك فور وصولك أو للطلب المباشر.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن طبق (مثلاً: كباب، حمص، تبولة...)"
              className="w-full bg-stone-900 border border-stone-800 rounded-2xl py-3.5 pr-11 pl-4 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
            />
            <Search className="w-5 h-5 text-stone-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Category Selector Scrollbar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-900/40'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-amber-300 border border-stone-800'
            }`}
          >
            الكل ({MENU_ITEMS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const itemCount = MENU_ITEMS.filter((i) => i.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-900/40'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-amber-300 border border-stone-800'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-stone-950/20 text-stone-950' : 'bg-stone-800 text-stone-400'}`}>
                  {itemCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                quantityInCart={getQuantityInCart(item.id)}
                onAddToCart={onAddToCart}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-stone-900/50 rounded-2xl border border-stone-800 max-w-md mx-auto">
            <Utensils className="w-12 h-12 text-stone-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-300">لم نجد أي أطباق مطابقة</h3>
            <p className="text-stone-500 text-xs mt-1">جرب البحث بكلمة مختلفة أو تصفح الأقسام الأخرى</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-amber-400 text-sm font-bold underline hover:text-amber-300"
            >
              عرض كافة الأطباق
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
