import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  const body = await req.json()
  const { buyerName, buyerContact, deliveryAddress, items } = body

  try {
    const newOrder = await prisma.order.create({
      data: {
        buyerName,
        buyerContact,
        deliveryAddress,
        items,
      },
    })
    return NextResponse.json(newOrder)
  } catch (error) {
    console.error(error)
    return new NextResponse('Error saving order', { status: 500 })
  }
}
