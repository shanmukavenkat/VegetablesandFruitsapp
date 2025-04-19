import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: { json: () => any; }) {
  try {
    const body = await req.json();
    const { buyerName, buyerContact, deliveryAddress, items } = body;

    if (!buyerName || !buyerContact || !deliveryAddress || !items || items.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newOrder = await prisma.order.create({
      data: {
        buyerName,
        buyerContact,
        deliveryAddress,
        items,
        status: 'pending',
      },
    });

    return NextResponse.json({ message: 'Order created', order: newOrder }, { status: 201 });
  } catch (error) {
    console.error('[ORDER_POST]', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
