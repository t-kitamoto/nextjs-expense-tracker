'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

async function deleteTransaction(transactionId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'ユーザー情報が取得できませんでした。' };
  }

  try {
    await db.transaction.delete({
      where: {
        id: transactionId,
        userId,
      },
    });

    revalidatePath('/');

    return { message: '取引が削除されました。' };
  } catch (error) {
    return { error: '内部エラーが発生しました。' };
  }
}

export default deleteTransaction;
