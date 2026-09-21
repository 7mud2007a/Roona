export type CategoryId =
  | 'starters'
  | 'salads'
  | 'soups'
  | 'grills'
  | 'mains'
  | 'sandwiches'
  | 'syrian'
  | 'desserts'
  | 'drinks';

export interface Category {
  id: CategoryId;
  name: string;
  iconName: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in Syrian Pounds (ل.س)
  category: CategoryId;
  image: string;
  isFeatured?: boolean;
  badge?: string;
  prepTime?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface ReservationDetails {
  name: string;
  peopleCount: string;
  tableNumber: number | null;
  date: string;
  time: string;
  notes: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
