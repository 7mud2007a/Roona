import React from 'react';
import { Users, Check } from 'lucide-react';

interface TableSelectorProps {
  selectedTable: number | null;
  onSelectTable: (tableNum: number) => void;
}

export const TableSelector: React.FC<TableSelectorProps> = ({
  selectedTable,
  onSelectTable,
}) => {
  // Table definitions 1 to 12 with capacity info
  const tables = Array.from({ length: 12 }, (_, i) => ({
    number: i + 1,
    capacity: i % 2 === 0 ? 'شخصين - 4 أشخاص' : '4 - 8 أشخاص',
    location: i < 6 ? 'الصالة الرئيسية' : 'الجلسة العائلية / النافذة',
  }));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-bold text-amber-200">
          اختر رقم الطاولة المفضلة <span className="text-red-400">*</span>
        </label>
        <span className="text-xs text-stone-400">12 طاولة متاحة</span>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {tables.map((t) => {
          const isSelected = selectedTable === t.number;
          return (
            <button
              type="button"
              key={t.number}
              onClick={() => onSelectTable(t.number)}
              className={`relative p-3.5 rounded-2xl border text-right transition-all flex flex-col justify-between h-24 ${
                isSelected
                  ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-stone-950 border-amber-400 shadow-lg shadow-amber-900/30 ring-2 ring-amber-300 scale-102'
                  : 'bg-stone-900/80 text-stone-200 border-stone-800 hover:border-amber-500/40 hover:bg-stone-800/80'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`font-serif font-bold text-base ${isSelected ? 'text-stone-950' : 'text-amber-100'}`}>
                  طاولة {t.number}
                </span>
                {isSelected ? (
                  <span className="w-5 h-5 rounded-full bg-stone-950 text-amber-400 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                ) : (
                  <Users className="w-4 h-4 text-stone-500" />
                )}
              </div>

              <div>
                <p className={`text-[11px] font-medium ${isSelected ? 'text-stone-900' : 'text-stone-400'}`}>
                  {t.location}
                </p>
                <p className={`text-[10px] ${isSelected ? 'text-stone-900/80' : 'text-stone-500'}`}>
                  تتسع لـ {t.capacity}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
