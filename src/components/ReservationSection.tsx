import React, { useState } from 'react';
import { TableSelector } from './TableSelector';
import type { CartItem, ReservationDetails } from '../types';
import { Calendar, Clock, User, Send, Utensils, AlertCircle, ShoppingBag, Plus, Minus } from 'lucide-react';

interface ReservationSectionProps {
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onNavigateToMenu: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  cartItems,
  onUpdateQuantity,
  onNavigateToMenu,
}) => {
  const [form, setForm] = useState<ReservationDetails>({
    name: '',
    peopleCount: '2',
    tableNumber: null,
    date: new Date().toISOString().split('T')[0],
    time: '20:30',
    notes: '',
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Time Options for dinner and lunch
  const timeOptions = [
    '12:00 ظهراً',
    '01:30 ظهراً',
    '03:00 عصراً',
    '04:30 عصراً',
    '06:00 مساءً',
    '07:30 مساءً',
    '08:30 مساءً',
    '09:30 مساءً',
    '10:30 مساءً',
    '11:30 مساءً',
  ];

  const peopleOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  const totalFoodAmount = cartItems.reduce(
    (sum, c) => sum + c.item.price * c.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString('ar-SY') + ' ل.س';
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!form.name.trim()) {
      setErrorMsg('يرجى كتابة الاسم الكريم لطبع الحجز.');
      return;
    }
    if (!form.tableNumber) {
      setErrorMsg('يرجى اختيار رقم الطاولة المفضل.');
      return;
    }
    if (!form.date) {
      setErrorMsg('يرجى اختيار تاريخ الحجز.');
      return;
    }
    if (!form.time) {
      setErrorMsg('يرجى اختيار موعد الحضور.');
      return;
    }

    setIsSubmitting(true);

    // Format Food Order Summary text
    let foodOrderText = 'لا يوجد طلب طعام مسبق (حجز طاولة فقط)';
    if (cartItems.length > 0) {
      const itemsList = cartItems
        .map((c) => `• ${c.item.name} × ${c.quantity} (${formatPrice(c.item.price * c.quantity)})`)
        .join('\n');
      foodOrderText = `\n${itemsList}\n\n💰 المجموع الكلي للطلب: ${formatPrice(totalFoodAmount)}`;
    }

    // Build complete WhatsApp Message
    const rawMessage = `مرحباً مطعم بيتنا 👋

أرغب بحجز طاولة وطلب الطعام:

👤 الاسم: ${form.name}
👥 عدد الأشخاص: ${form.peopleCount}
🪑 رقم الطاولة: طاولة ${form.tableNumber}
📅 التاريخ: ${form.date}
🕐 الوقت: ${form.time}

🍽️ الطلب:
${foodOrderText}

📝 ملاحظات:
${form.notes.trim() ? form.notes.trim() : 'لا يوجد ملاحظات إضافية'}

شكراً لكم.`;

    // Target Phone: Syrian WhatsApp +963930431817
    const whatsappNumber = '963930431817';
    const encodedUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(encodedUrl, '_blank');
    }, 400);
  };

  return (
    <section id="reservation" className="py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>الطلبات والحجوزات Direct WhatsApp Order</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 font-serif">
            احجز طاولتك واطلب أطباقك الشامية
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            حدد بيانات الحجز، واختر طاولتك المفضلة، وأرسل الطلب مباشرة لإدارتنا عبر الواتساب لتكون طاولتك وأطباقك جاهزة بانتظارك.
          </p>
        </div>

        {/* Validation Alert */}
        {errorMsg && (
          <div className="max-w-4xl mx-auto mb-8 p-4 rounded-2xl bg-red-950/80 border border-red-800 text-red-200 text-sm flex items-center gap-3 animate-shake">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSendToWhatsApp} className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left / Primary Column: Customer Info & Table Selection */}
          <div className="lg:col-span-7 space-y-6 bg-stone-900/60 p-6 sm:p-8 rounded-3xl border border-stone-800 backdrop-blur-sm shadow-2xl">

            <h3 className="text-xl font-bold text-amber-100 font-serif border-b border-stone-800 pb-3 flex items-center gap-2">
              <User className="w-5 h-5 text-amber-400" />
              <span>1. بيانات الحجز والحضور</span>
            </h3>

            {/* Name Input */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-amber-200">
                الاسم الكريم <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="مثال: محمد الشامي"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 pr-10 pl-4 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                />
                <User className="w-4 h-4 text-stone-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* People Count Selector */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-amber-200">
                عدد الأشخاص <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {peopleOptions.map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setForm({ ...form, peopleCount: num })}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                      form.peopleCount === num
                        ? 'bg-amber-500 text-stone-950 border border-amber-400 shadow-md'
                        : 'bg-stone-950 text-stone-400 border border-stone-800 hover:text-amber-200'
                    }`}
                  >
                    {num} {num === '1' ? 'شخص' : 'أشخاص'}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Date */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-amber-200">
                  تاريخ الحجز <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 pr-10 pl-4 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                  />
                  <Calendar className="w-4 h-4 text-stone-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Time Slot Select */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-amber-200">
                  وقت الحضور <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl py-3 pr-10 pl-4 text-sm text-stone-200 focus:outline-none focus:border-amber-500 appearance-none"
                  >
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <Clock className="w-4 h-4 text-stone-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Table Grid Selection */}
            <div className="pt-2">
              <TableSelector
                selectedTable={form.tableNumber}
                onSelectTable={(num) => setForm({ ...form, tableNumber: num })}
              />
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-amber-200">
                ملاحظات إضافية (اختياري)
              </label>
              <textarea
                rows={2}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="مثال: بدون بصل، الطاولة بالقرب من النافذة، مناسبة خاصة..."
                className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500"
              />
            </div>

          </div>

          {/* Right Column: Food Order Selection Summary & WhatsApp Final CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900/90 p-6 sm:p-8 rounded-3xl border border-amber-500/30 backdrop-blur-sm shadow-2xl space-y-6 sticky top-24">

              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <h3 className="text-xl font-bold text-amber-100 font-serif flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-amber-400" />
                  <span>2. ملخص الأطباق المطلوبة</span>
                </h3>
                <button
                  type="button"
                  onClick={onNavigateToMenu}
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-bold"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>إضافة أطباق</span>
                </button>
              </div>

              {/* Cart List Inside Form */}
              {cartItems.length > 0 ? (
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {cartItems.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-stone-950 border border-stone-800 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div>
                          <span className="font-bold text-stone-200 block font-serif">
                            {item.name}
                          </span>
                          <span className="text-amber-400 text-[11px]">
                            {formatPrice(item.price * quantity)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 bg-stone-800 rounded-lg p-1">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 hover:text-amber-400 text-stone-400"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-amber-200 px-1">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 hover:text-amber-400 text-stone-400"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 text-center space-y-2">
                  <ShoppingBag className="w-8 h-8 text-stone-600 mx-auto" />
                  <p className="text-xs text-stone-400">
                    لم تقم باختيار أطباق بعد. يمكنك الحجز الآن بدون طعام أو تصفح المنيو لإضافة طلباتك.
                  </p>
                  <button
                    type="button"
                    onClick={onNavigateToMenu}
                    className="text-xs text-amber-400 font-bold hover:underline inline-block pt-1"
                  >
                    تصفح المنيو وإضافة أطباق
                  </button>
                </div>
              )}

              {/* Order Summary Total */}
              {cartItems.length > 0 && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                  <div className="flex justify-between text-xs text-stone-300">
                    <span>عدد الأطباق:</span>
                    <span className="font-bold text-amber-200">{cartItems.length} أطباق</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-amber-100 pt-1 border-t border-amber-500/20">
                    <span>المجموع التقريبي:</span>
                    <span className="text-base text-amber-400 font-serif">{formatPrice(totalFoodAmount)}</span>
                  </div>
                </div>
              )}

              {/* Final Submit WhatsApp Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-2xl text-lg shadow-xl shadow-emerald-950/50 transition-all active:scale-98 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>إرسال الطلب والحجز عبر واتساب</span>
              </button>

              <p className="text-[11px] text-stone-500 text-center leading-relaxed">
                سيتم فتح تطبيق الواتساب ورسالة مفصلة بجميع خياراتك بضغط زر واحدة لإرسالها مباشرة للمطعم (0930431817).
              </p>

            </div>
          </div>

        </form>

      </div>
    </section>
  );
};
