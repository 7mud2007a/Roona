import React from 'react';
import { X, Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import type { CartItem } from '../types';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem?: (itemId: string) => void;
  onClearCart: () => void;
  onProceedToReservation: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
  onProceedToReservation,
}) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, c) => sum + c.item.price * c.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString('ar-SY') + ' ل.س';
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark Overlay Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-stone-900 border-r border-stone-800 text-stone-100 h-full flex flex-col shadow-2xl z-10 animate-slideLeft">

        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-100 font-serif">طلباتك الحالية</h3>
              <p className="text-stone-400 text-xs">
                {cartItems.length > 0 ? `${cartItems.length} أطباق مختارة` : 'السلة فارغة'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-stone-400 hover:text-red-400 text-xs p-2 rounded-lg transition-colors flex items-center gap-1"
                title="تفريغ السلة"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">مسح</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-stone-950/60 border border-stone-800/80 hover:border-amber-500/30 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover border border-stone-800 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-stone-100 font-serif truncate">
                    {item.name}
                  </h4>
                  <p className="text-amber-400 text-xs font-semibold mt-0.5">
                    {formatPrice(item.price)}
                  </p>
                  <p className="text-stone-400 text-[11px] mt-0.5">
                    المجموع: {formatPrice(item.price * quantity)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-stone-800 rounded-xl p-1 shrink-0">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="p-1 rounded-lg hover:bg-stone-700 text-stone-300 hover:text-amber-400 transition-colors"
                    aria-label="إنقاص"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold px-1.5 text-amber-200">
                    {quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="p-1 rounded-lg hover:bg-stone-700 text-stone-300 hover:text-amber-400 transition-colors"
                    aria-label="زيادة"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 space-y-4">
              <ShoppingBag className="w-16 h-16 text-stone-700 mx-auto" />
              <h4 className="text-stone-300 font-bold text-base">لم تقم بإضافة أي أطباق بعد</h4>
              <p className="text-stone-500 text-xs max-w-xs mx-auto">
                تصفح منيو بيتنا واختر ما تحبه من أشهى الأطباق الشامية والمشاوي
              </p>
              <button
                onClick={onClose}
                className="mt-2 text-amber-400 text-sm font-bold hover:underline"
              >
                تصفح المنيو الآن
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer / Summary */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-stone-800 bg-stone-950 space-y-4">
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between text-stone-400">
                <span>عدد الأطباق:</span>
                <span className="text-stone-200 font-bold">{cartItems.length} أطباق</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-stone-800 text-base font-bold text-amber-100">
                <span>المجموع الكلي:</span>
                <span className="text-xl text-amber-400 font-serif">{formatPrice(totalAmount)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToReservation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3.5 rounded-xl text-base transition-all shadow-lg shadow-amber-950/50 active:scale-98"
            >
              <span>متابعة لتحديد الطاولة والحجز</span>
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
