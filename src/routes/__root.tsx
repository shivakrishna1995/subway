import { Outlet, createRootRoute } from '@tanstack/react-router'

import Footer from '@/components/Footer'

import { ToastContainer } from 'react-toastify';

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Footer />
      <ToastContainer theme="colored" />
    </>
  ),
})
