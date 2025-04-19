'use client'

import { useCartStore } from '@/lib/cart-store'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function CartPage() {
  const { items, increment, decrement, removeFromCart, clearCart } = useCartStore()
  const [buyerName, setBuyerName] = useState('')
  const [buyerContact, setBuyerContact] = useState('')
  const [deliveryAddress, setDeliveryAddress] = useState('')

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePlaceOrder = async () => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({
          buyerName,
          buyerContact,
          deliveryAddress,
          items: items.map(({ id, name, quantity, price }) => ({
            id, name, quantity, price
          }))
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to save to database')
      }

      alert('Order placed successfully!')
      clearCart()
      setBuyerName('')
      setBuyerContact('')
      setDeliveryAddress('')
    } catch (err) {
      console.error(err)
      alert('Failed to place order')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="border p-3 rounded flex justify-between items-center">
                <div>
                  <p>{item.name}</p>
                  <p className="text-xs text-gray-500">₹{item.price} x {item.quantity}</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => decrement(item.id)} size="sm">−</Button>
                  <Button onClick={() => increment(item.id)} size="sm">+</Button>
                  <Button onClick={() => removeFromCart(item.id)} size="sm" variant="destructive">Remove</Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-right font-semibold">Total: ₹{total}</p>
          </div>
          <div className="mt-4 space-y-2">
            <input
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
            />
            <input
              placeholder="Contact Info"
              className="w-full p-2 border rounded"
              value={buyerContact}
              onChange={(e) => setBuyerContact(e.target.value)}
            />
            <textarea
              placeholder="Delivery Address"
              className="w-full p-2 border rounded"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
            <Button onClick={handlePlaceOrder} className="mt-2 w-full">Place Order</Button>
          </div>
        </>
      )}
    </div>
  )
}
