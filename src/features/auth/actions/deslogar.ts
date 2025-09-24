'use server';

import { redirect } from 'next/navigation';
import { getAuth, deleteSessionCookie } from '@/auth/cookie';
import { invalidateSession } from '@/auth/session';

export async function signOut() {
  const { session } = await getAuth();

  if (!session) {
    redirect('/login');
  }

  await invalidateSession(session.id);

  await deleteSessionCookie();

  redirect('/login');
};