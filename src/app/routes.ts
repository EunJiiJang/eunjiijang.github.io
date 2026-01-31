import { createBrowserRouter } from 'react-router';
import { Layout } from '@/app/components/Layout';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { WorkPage } from '@/app/pages/WorkPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { WorkDetailPage } from '@/app/pages/WorkDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'about',
        Component: AboutPage,
      },
      {
        path: 'work',
        Component: WorkPage,
      },
      {
        path: 'work/:slug',
        Component: WorkDetailPage,
      },
      {
        path: 'contact',
        Component: ContactPage,
      },
    ],
  },
]);
