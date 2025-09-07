import { getCartPrices } from '@/util/price';
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/cart/')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    getCartPrices();
  }, []);

  return <div>Hello "/cart/"!</div>
}
