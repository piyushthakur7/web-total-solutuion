"use client";

import React, { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { signOut } from './actions';

export default function SignOutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await signOut();
          router.push('/blog/admin/login');
          router.refresh();
        })
      }
      className="flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-colors disabled:opacity-50"
    >
      <LogOut className="w-5 h-5" />
      <span className="text-sm font-medium">{isPending ? 'Signing out…' : 'Sign Out'}</span>
    </button>
  );
}
