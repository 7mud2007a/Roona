import type { Category, MenuItem, Testimonial, GalleryImage } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'starters', name: 'المقبلات', iconName: 'Utensils' },
  { id: 'salads', name: 'السلطات', iconName: 'Salad' },
  { id: 'soups', name: 'الشوربات', iconName: 'Soup' },
  { id: 'grills', name: 'المشاوي', iconName: 'Flame' },
  { id: 'mains', name: 'الوجبات الرئيسية', iconName: 'ChefHat' },
  { id: 'sandwiches', name: 'الساندويشات', iconName: 'Sandwich' },
  { id: 'syrian', name: 'الأطباق السورية', iconName: 'Sparkles' },
  { id: 'desserts', name: 'الحلويات', iconName: 'Cake' },
  { id: 'drinks', name: 'المشروبات', iconName: 'Coffee' },
];

export const MENU_ITEMS: MenuItem[] = [
  // المقبلات
  {
    id: 'm1',
    name: 'حمص باللحمة والصنوبر',
    description: 'حمص بطحينة شامية فاخرة يعلوه لحم ضأن بلدي محمر مع الصنوبر المحمص وسمنة بلدية',
    price: 35000,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    badge: 'الأكثر طلباً',
  },
  {
    id: 'm2',
    name: 'فتة حمص بالسمنة الشامية',
    description: 'حمص مطبوخ مع الخبز المحمص واللبن والطحينة والثوم، يعلوها السمن البلدي والمكسرات',
    price: 30000,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
  },
  {
    id: 'm3',
    name: 'كبة مقلية شامية (4 قطع)',
    description: 'أقراص الكبة المقرمشة المحشوة باللحم البلدي المفروم والبصل والجوز والمكسرات',
    price: 38000,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    badge: 'توصية الشيف',
  },
  {
    id: 'm4',
    name: 'ورق عنب بالزيت (يلنجي)',
    description: 'ورق عنب محشو بالأرز والخضار الطازجة ودبس الرمان وزيت الزيتون البكر',
    price: 28000,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1629985022223-936662446a78?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'm5',
    name: 'محمرة بالجوز ودبس الرمان',
    description: 'خلطة الفلفل الأحمر المشوي مع الجوز المفروم، الكعك الشامي، ودبس الرمان الأصيل',
    price: 25000,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'm6',
    name: 'بطاطا حرة بالكزبرة والثوم',
    description: 'كعبات بطاطا مقرمشة ومتبلة بالكزبرة الخضراء، الثوم الشامي والشطة الناعمة',
    price: 24000,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
  },

  // السلطات
  {
    id: 'm7',
    name: 'تبولة شامية أصيلة',
    description: 'بقدونس مفروم ناعم جداً مع الطماطم، البصل، البرغل الناعم، الليمون وزيت الزيتون',
    price: 26000,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
  },
  {
    id: 'm8',
    name: 'فتوش بالدبس والخبز المحمص',
    description: 'خضار موسمية طازجة مع السماق ودبس الرمان والخبز المحمص المقرمش',
    price: 27000,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    badge: 'الأكثر طلباً',
  },

  // الشوربات
  {
    id: 'm9',
    name: 'شوربة عدس بالكمون الشامي',
    description: 'عدس أصفر مطبوخ بالبهارات الشامية والكمون يقدم مع مكعبات الخبز المحمص والليمون',
    price: 18000,
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
  },

  // المشاوي
  {
    id: 'm10',
    name: 'كباب حلبي فاخر',
    description: 'أسياخ لحم الضأن المفروم المتبل بالفلفل والبهارات الحلبية المشوية على الفحم الحجري',
    price: 75000,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    badge: 'تخصص بيتنا',
  },
  {
    id: 'm11',
    name: 'شيش طاووق متبل',
    description: 'قطع صدور الدجاج المتبلة بالزبادي والثوم والبهارات الشامية المشوية بكل عناية',
    price: 62000,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'm12',
    name: 'مشاوي مشكلة بيتنا (كيلو / نصف كيلو)',
    description: 'تشكيلة فاخرة من كباب حلبي، شيش طاووق، وقطع شقف اللحم المقلي مع الخضار المشوية',
    price: 135000,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    badge: 'وجبة العائلة',
  },
  {
    id: 'm13',
    name: 'فروج مشوي على الفحم',
    description: 'دجاجة كاملة متبلة بالتتبيلة الشامية الخاصة مشوية على البطء تقدم مع كريم الثوم والبطاطا',
    price: 85000,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
  },

  // الوجبات الرئيسية
  {
    id: 'm14',
    name: 'رز مع الدجاج والمكسرات',
    description: 'أرز مبهر بالبهارات الشامية العطرة يعلوه نصف دجاجة محمّرة ولوز وصنوبر محمص',
    price: 68000,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'm15',
    name: 'أرز بالشعيرية مع طبق إدام',
    description: 'أرز بشعيرية محمرة بالسمن البلدي يقدم مع طبق يخنة أو إدام الخضار الطازج',
    price: 32000,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&q=80&w=800',
  },

  // الساندويشات
  {
    id: 'm16',
    name: 'ساندويش شاورما دجاج عربي',
    description: 'وجبة شاورما دجاج مقطعة مع بطاطا مقرمشة، كريم ثوم، مخلل وخبز صاج مشوي',
    price: 35000,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    badge: 'الأكثر شعبية',
  },
  {
    id: 'm17',
    name: 'ساندويش شاورما لحم بلدي',
    description: 'شرائح لحم الضأن المتبلة مع البقدونس والبصل والمخلل وصوص الطحينة العريقة',
    price: 42000,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=800',
  },

  // الأطباق السورية العريقة
  {
    id: 'm18',
    name: 'كبة باللبن (لبنية حلبية)',
    description: 'أقراص الكبة الطرية مطبوخة باللبن الرائب الشامي المتبل بالثوم والنعناع الجاف بالسمنة',
    price: 65000,
    category: 'syrian',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
  },

  // الحلويات
  {
    id: 'm19',
    name: 'بقلاوة مشكلة بالفستق الحلبي',
    description: 'رقائق العجين الهشة المحشوة بالفستق الحلبي الممتاز والمغدقة بالقطر الشامي المعطر',
    price: 45000,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
  },
  {
    id: 'm20',
    name: 'كنافة نابلسية خشنة بالقشطة',
    description: 'كنافة ذهبية محشوة بالقشطة البلدية الطازجة ومزينة بالفستق الحلبي الناعم',
    price: 40000,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=800',
  },

  // المشروبات
  {
    id: 'm21',
    name: 'عصير برتقال طازج',
    description: 'برتقال بلدي معصور طازجاً عند الطلب بدون إضافة سكر',
    price: 18000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'm22',
    name: 'ليمون ونعنع منعش',
    description: 'مزيج الليمون الطبيعي الطازج مع أوراق النعناع الخضراء والمثلجة',
    price: 18000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'm23',
    name: 'قهوة عربية بالهيل الشامي',
    description: 'قهوة عربية أصيلة محضرة بطريقة تقليدية ومبهرة بماء الورد والهيل الفاخر',
    price: 12000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'm24',
    name: 'شاي شامي بالنعناع',
    description: 'إبريق شاي أحمر خمير مع أوراق النعناع الشامي الأخضر',
    price: 10000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'أبو أحمد الدمشقي',
    rating: 5,
    comment: 'الأكل طيب جداً والنكهة الشامية الأصيلة موجودة بكل طبق. الكباب الحلبي والفتة ممتازة، والنظافة والخدمة على أعلى مستوى.',
    date: 'منذ أسابيع',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 't2',
    author: 'سارة الكردي',
    rating: 5,
    comment: 'أجواء مطعم بيتنا بتاخد العقل، الهدوء والضيافة الراقية. التبولة والورق عنب طعمهم مثل شغل البيت تماماً.',
    date: 'منذ شهر',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 't3',
    author: 'مهندس عمر الحسيني',
    rating: 5,
    comment: 'تجربة حجز الطاولة عبر الموقع وسهولة إرسال الطلب للواتساب كانت سريعة جداً. طاولتنا كانت جاهزة والأكل ينزل سخن وطازج.',
    date: 'منذ أسبوعين',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    title: 'جلسات شامية دافئة',
    category: 'الأجواء',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g2',
    title: 'تشكيلة المشاوي على الفحم',
    category: 'الأطباق',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g3',
    title: 'المقبلات الشامية الفاخرة',
    category: 'الأطباق',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g4',
    title: 'تحضير الخبز الطازج',
    category: 'المطبخ',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
  },
];
