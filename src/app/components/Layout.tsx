import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navigation } from '@/app/components/Navigation';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Outlet />
    </div>
  );
}
