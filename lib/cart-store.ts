// lib/cart-store.ts
'use client'

import { create } from 'zustand'

export type Product = {
  id: string
  name: string
  price: number
  category: string
}

type CartItem = Product & { quantity: number }

type CartStore = {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  clearCart: () => void
}

const loadCart = (): CartItem[] => {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem('cart')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const saveCart = (items: CartItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(items))
  }
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: loadCart(),
  addToCart: (product) => {
    const existing = get().items.find((item) => item.id === product.id)
    const newItems = existing
      ? get().items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...get().items, { ...product, quantity: 1 }]
    saveCart(newItems)
    set({ items: newItems })
  },
  removeFromCart: (id) => {
    const newItems = get().items.filter((item) => item.id !== id)
    saveCart(newItems)
    set({ items: newItems })
  },
  increment: (id) => {
    const newItems = get().items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    saveCart(newItems)
    set({ items: newItems })
  },
  decrement: (id) => {
    const newItems = get().items
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
    saveCart(newItems)
    set({ items: newItems })
  },
  clearCart: () => {
    saveCart([])
    set({ items: [] })
  },
}))
