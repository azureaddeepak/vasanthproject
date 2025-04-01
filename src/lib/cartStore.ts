import { create } from 'zustand';
import { Product } from './productData';

interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, size: string, quantity: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getDiscountedPrice: () => number;
  getDiscount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (product: Product, size: string, quantity: number) => {
    set((state) => {
      // Check if item already exists in cart
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity;
        return { items: updatedItems };
      } else {
        // Add new item if it doesn't exist
        return { items: [...state.items, { product, size, quantity }] };
      }
    });
  },
  
  removeItem: (productId: string, size: string) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.product.id === productId && item.size === size)
      ),
    }));
  },
  
  updateQuantity: (productId: string, size: string, quantity: number) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      ),
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.product.originalPrice * item.quantity,
      0
    );
  },
  
  getDiscountedPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  },
  
  getDiscount: () => {
    return get().getTotalPrice() - get().getDiscountedPrice();
  },
}));

// Special offer calculations
export const calculateBuy2Get1Discount = (items: CartItem[]) => {
  if (items.length < 3) return 0;
  
  // Sort items by price (lowest first)
  const sortedItems = [...items].sort(
    (a, b) => a.product.price - b.product.price
  );
  
  // Get the cheapest item's price
  const cheapestItemPrice = sortedItems[0].product.price;
  
  return cheapestItemPrice;
};

export const applyPromoCode = (code: string, subtotal: number) => {
  const promoCodes = {
    'TFCYES': { type: 'fixed', value: 300, minPurchase: 1699 },
    'TFC300': { type: 'fixed', value: 300, minPurchase: 1499 },
    'TFCB2G1': { type: 'percentage', value: 33, minPurchase: 0 },
  };
  
  const promo = promoCodes[code as keyof typeof promoCodes];
  
  if (!promo || subtotal < promo.minPurchase) {
    return 0;
  }
  
  if (promo.type === 'fixed') {
    return promo.value;
  } else {
    return Math.round(subtotal * (promo.value / 100));
  }
};
