'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Transaction } from '@/types/Transaction';

async function getTransactions(): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'ユーザー情報が取得できませんでした。' };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { transactions };
  } catch (error) {
    return { error: '内部エラーが発生しました。' };
  }
}

export default getTransactions;
