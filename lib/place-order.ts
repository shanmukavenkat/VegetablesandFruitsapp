"use server"

import prisma from "@/lib/prisma"

export async function placeOrder({
  buyerName,
  buyerContact,
  deliveryAddress,
  items,
}: {
  buyerName: string
  buyerContact: string
  deliveryAddress: string
  items: { id: string; name: string; quantity: number; price: number }[]
}) {
  try {
    const order = await prisma.order.create({
      data: {
        buyerName,
        buyerContact,
        deliveryAddress,
        items: {
          create: items.map(item => ({
            productId: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      // Removed invalid 'include' property
    })

    return { success: true, order }
  } catch (error) {
    console.error("Error placing order:", error)
    return { success: false }
  }
}
