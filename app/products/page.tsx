
'use client';

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/cart-store'

import Link from 'next/link'

const products = [
  // Vegetables
  { id: "1", name: "Tomato", price: 20, category: "Vegetable" },
  { id: "2", name: "Potato", price: 15, category: "Vegetable" },
  { id: "3", name: "Carrot", price: 30, category: "Vegetable" },
  { id: "4", name: "Onion", price: 25, category: "Vegetable" },
  { id: "5", name: "Cucumber", price: 18, category: "Vegetable" },
  { id: "6", name: "Spinach", price: 10, category: "Vegetable" },
  { id: "7", name: "Capsicum", price: 35, category: "Vegetable" },
  { id: "8", name: "Garlic", price: 40, category: "Vegetable" },
  { id: "9", name: "Ginger", price: 50, category: "Vegetable" },
  { id: "10", name: "Cauliflower", price: 28, category: "Vegetable" },
  { id: "11", name: "Broccoli", price: 45, category: "Vegetable" },
  { id: "12", name: "Brinjal", price: 22, category: "Vegetable" },
  { id: "13", name: "Beetroot", price: 27, category: "Vegetable" },
  { id: "14", name: "Bitter Gourd", price: 26, category: "Vegetable" },
  { id: "15", name: "Pumpkin", price: 16, category: "Vegetable" },

  // Fruits
  { id: "16", name: "Apple", price: 120, category: "Fruit" },
  { id: "17", name: "Banana", price: 40, category: "Fruit" },
  { id: "18", name: "Mango", price: 100, category: "Fruit" },
  { id: "19", name: "Grapes", price: 90, category: "Fruit" },
  { id: "20", name: "Orange", price: 60, category: "Fruit" },
  { id: "21", name: "Papaya", price: 35, category: "Fruit" },
  { id: "22", name: "Pineapple", price: 70, category: "Fruit" },
  { id: "23", name: "Watermelon", price: 50, category: "Fruit" },
  { id: "24", name: "Guava", price: 45, category: "Fruit" },
  { id: "25", name: "Pomegranate", price: 85, category: "Fruit" },
  { id: "26", name: "Strawberry", price: 150, category: "Fruit" },
  { id: "27", name: "Lychee", price: 95, category: "Fruit" },
  { id: "28", name: "Kiwi", price: 110, category: "Fruit" },
  { id: "29", name: "Dragon Fruit", price: 130, category: "Fruit" },
  { id: "30", name: "Chikoo", price: 55, category: "Fruit" },
];

export default function ProductPage() {
    const addToCart = useCartStore((state) => state.addToCart)
  
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Products</h1>
         
        </div>
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-4 max-w-screen-xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="shop">
    {products.map((product) => (
      <Card key={product.id}>
        <CardContent className="flex flex-row justify-between">
          <div className="flex flex-col justify-center items-start m-2">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-blue-500">₹{product.price} /kg</p>
            <p className="text-xs text-gray-500">{product.category}</p>
          </div>
          <div>
            <Button onClick={() => addToCart(product)} className="mt-4 bg-emerald-600 hover:bg-blue-400">
              Add to Cart 🛍️
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
        <div className="mt-4 flex justify-end">
        <Link href="/cart">
            <Button variant="outline">🛒 View Cart</Button>
          </Link>
          </div>
      </div>
      
    )
  }
  