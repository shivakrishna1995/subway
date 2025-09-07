import { Outlet, createRootRoute } from '@tanstack/react-router'
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanstackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import Footer from '@/components/Footer'

import { ToastContainer } from 'react-toastify';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer theme="colored" />
      {/* <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
    </>
  ),
})
