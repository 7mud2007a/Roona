import React from 'react';
import { Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import type { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  quantityInCart: number;
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  quantityInCart,
  onAddToCart,
  onUpdateQuantity,
}) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('ar-SY') + ' ل.س';
  };

  return (
    <div className="group bg-stone-900 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden shadow-lg flex flex-col justify-between">
      <div>
        {/* Card Image Header */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-950">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/20" />

          {/* Badge */}
          {item.badge && (
            <span className="absolute top-3 right-3 bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {item.badge}
            </span>
          )}

          {/* Price Tag */}
          <span className="absolute bottom-3 left-3 bg-stone-950/90 text-amber-300 text-sm font-bold px-3 py-1 rounded-xl border border-amber-500/30 backdrop-blur-md">
            {formatPrice(item.price)}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 space-y-2">
          <h3 className="text-lg font-bold text-amber-100 font-serif group-hover:text-amber-400 transition-colors">
            {item.name}
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-4 sm:p-5 pt-0">
        {quantityInCart > 0 ? (
          <div className="flex items-center justify-between bg-stone-800/90 border border-amber-500/30 rounded-xl p-1.5">
            <button
              onClick={() => onUpdateQuantity(item.id, -1)}
              className="p-2 rounded-lg bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-amber-400 active:scale-95 transition-all"
              aria-label="إنقاص الكمية"
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5 font-bold text-amber-300 text-sm px-3">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{quantityInCart} في الطلب</span>
            </div>
            <button
              onClick={() => onUpdateQuantity(item.id, 1)}
              className="p-2 rounded-lg bg-amber-600 text-stone-950 hover:bg-amber-500 active:scale-95 transition-all font-bold"
              aria-label="زيادة الكمية"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddToCart(item, 1)}
            className="w-full flex items-center justify-center gap-2 bg-stone-800 hover:bg-amber-600 text-amber-300 hover:text-stone-950 font-bold py-2.5 px-4 rounded-xl text-sm border border-amber-500/20 hover:border-amber-500 transition-all duration-200 active:scale-98 shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>أضف للطلب</span>
          </button>
        )}
      </div>
    </div>
  );
};
