// store.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== productId) })),
}));

export default useCartStore;
