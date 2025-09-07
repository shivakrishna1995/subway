import { getCartPrices } from '@/util/price';
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/$locationId/cart/')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    const prices = getCartPrices();
    console.log(prices);
  }, []);

  return <div className='container p-4 flex flex-col mx-auto gap-8 my-16'>
    <div className='flex flex-col items-center'>
      <div className='text-[#111827] text-3xl font-bold text-center'>
        Review Your Order
      </div>
      <div className='text-center text-[#4B5563] mt-[2px]'>
        Make any final adjustments before placing your order
      </div>
      <button className='bg-[#007C3E] rounded-full flex gap-2 items-center p-[8px_18px] mt-3'>
        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_14_1119)">
            <path d="M7.39687 15.6C9 13.5938 12.6562 8.73125 12.6562 6C12.6562 2.6875 9.96875 0 6.65625 0C3.34375 0 0.65625 2.6875 0.65625 6C0.65625 8.73125 4.3125 13.5938 5.91563 15.6C6.3 16.0781 7.0125 16.0781 7.39687 15.6ZM6.65625 4C7.18668 4 7.69539 4.21071 8.07046 4.58579C8.44554 4.96086 8.65625 5.46957 8.65625 6C8.65625 6.53043 8.44554 7.03914 8.07046 7.41421C7.69539 7.78929 7.18668 8 6.65625 8C6.12582 8 5.61711 7.78929 5.24204 7.41421C4.86696 7.03914 4.65625 6.53043 4.65625 6C4.65625 5.46957 4.86696 4.96086 5.24204 4.58579C5.61711 4.21071 6.12582 4 6.65625 4Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_14_1119">
              <path d="M0.65625 0H12.6562V16H0.65625V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className='text-[#FFFFFF]'>
          Downtown Branch - 123 Main Street
        </div>
      </button>
    </div>
    <div className='flex gap-8'>

    </div>
  </div>
}
