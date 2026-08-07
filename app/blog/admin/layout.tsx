import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, FileText } from 'lucide-react';
import { getAdminSession } from '../../../src/utils/insforge/adminSession';
import SignOutButton from './SignOutButton';

export const metadata = {
  robots: { index: false, follow: false },
};

const navItems = [
  { label: 'Dashboard', path: '/blog/admin', icon: LayoutDashboard },
  { label: 'Create Post', path: '/blog/admin/create', icon: FileText },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession();

  // Without an admin session the only reachable page is the login screen
  // (middleware redirects everything else), so render it without the shell.
  if (!session) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 shrink-0 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-white font-bold tracking-wider uppercase text-sm">Blog Admin</h2>
          <p className="text-xs text-slate-500 mt-1 truncate">{session.email}</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors hover:bg-slate-800 hover:text-white"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <SignOutButton />
        </div>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
