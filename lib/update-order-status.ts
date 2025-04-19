'use server';

import prisma from '@/lib/prisma';

export async function updateOrderStatus(id: string, status: string) {
  return await prisma.order.update({
    where: { id },
    data: { status },
  });
}
