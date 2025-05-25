'use client';

import { ReactNode, useState } from 'react';
import { SideNav } from './SideNav';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  title?: ReactNode;
  useBreadcrumbs?: boolean;
}

export const Layout = ({ children, title, useBreadcrumbs }: LayoutProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SideNav />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-20"
          onClick={() => setMobileNavOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-white dark:bg-zinc-900 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <SideNav mobile toggleMobile={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header with title or breadcrumbs */}
        <Header title={title} useBreadcrumbs={useBreadcrumbs} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};
