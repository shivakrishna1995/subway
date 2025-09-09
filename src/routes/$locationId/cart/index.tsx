import { useCartStore } from '@/store/cart';
import { getCartPrices } from '@/util/price';
import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import Data from '@/dataV2.json';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import z from 'zod';

export const Route = createFileRoute('/$locationId/cart/')({
  component: RouteComponent,
})

const Branches = {
  "coventry": "Coventry",
  "jewellery-quarter": "Jewellery Quarter",
  "broadway-plaza": "Broadway Plaza",
  "west-orchards": "West Orchards",
};

function RouteComponent() {
  const [orderPlacing, setOrderPlacing] = useState(false);

  const { locationId } = Route.useParams();

  const branchName = Branches[locationId as keyof typeof Branches];

  const [deliveryMethod, setDeliveryMethod] = useState<string | undefined>();

  const { items, removeItem, updateQty, clear, platters, removePlatter, updatePlatterQty, } = useCartStore();

  const [order, setOrder] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    instructions: '',
  });

  const prices = useMemo(() => {
    return getCartPrices();
  }, [items, platters]);

  const placeOrder = async () => {
    const templateParams = {
      "order_id": Date.now(),
      "orders": items.map(item => ({
        "name": item.item.productName,
        // "description": `Type: ${item.item.type} | Bread: ${item.item.bread && ``} | Cheese: ${item.item.cheese} | Double Cheese: ${item.item.doubleCheese} | Double Meat: ${item.item.doubleMeat} | Toasted: ${item.item.toasted} | Salad: ${item.item.salad.join(', ')} | Sauces: ${item.item.sauces.join(', ')} | Sides: ${item.item.sides?.join(', ')} | Drinks: ${item.item.drinks?.join(', ')}`,
        description: (() => {
          let str = `Type: ${item.item.type}`;

          if (item.item.bread) {
            str += ` | Bread: ${item.item.bread}`;
          }

          if (item.item.cheese) {
            str += ` | Cheese: ${item.item.cheese}`;
          }

          if (item.item.doubleCheese) {
            str += ` | Double Cheese: ${item.item.doubleCheese}`;
          }

          if (item.item.doubleMeat) {
            str += ` | Double Meat: ${item.item.doubleMeat}`;
          }

          if (item.item.toasted) {
            str += ` | Toasted: ${item.item.toasted}`;
          }

          if (item.item.salad.length > 0) {
            str += ` | Salad: ${item.item.salad.join(', ')}`;
          }

          if (item.item.sauces.length > 0) {
            str += ` | Sauces: ${item.item.sauces.join(', ')}`;
          }

          if (item.item.mealDeal) {
            str += ` | Meal Deal: ${item.item.mealDeal}`;
          }

          if (item.item.sides?.length) {
            str += ` | Sides: ${item.item.sides?.join(', ')}`;
          }

          if (item.item.drinks?.length) {
            str += ` | Drinks: ${item.item.drinks?.join(', ')}`;
          }

          return str
        })(),
        "image_url": (item.itemType === "subs" ? Data.subs.products.find(p => p.productName === item.item.productName)?.imageUrl : Data.platters.products.find(p => p.productName === item.item.productName)?.imageUrl) || "",
        "units": item.qty,
        "price": prices[item.id],
      })).concat(platters.map(platter => ({
        "name": platter.item.productName,
        "description": Data.platters.products.find(p => p.productName === platter.item.productName)?.description || "",
        "image_url": Data.platters.products.find(p => p.productName === platter.item.productName)?.imageUrl || "",
        "units": platter.qty,
        "price": prices[platter.id],
      }))),
      "cost": {
        "shipping": 0.00,
        "tax": 0.00,
        "total": Object.values(prices).reduce((total, price) => total + price, 0),
      },
      name: order.name,
      phone: order.phone,
      email: order.email,
      address: order.address,
      instructions: order.instructions && `Special Instructions: ${order.instructions}`,
      fromEmail: "subway37344@gmail.com",
      toEmail: order.email,
      branch: branchName,
    };
    try {
      setOrderPlacing(true);
      await emailjs.send('service_fkb1q59', 'template_0b20eou', templateParams, {
        publicKey: 'I8AmLFuFd_z-UL8FK',
      })
      toast.success('Order placed successfully');
      clear();
    } catch (error) {
      toast.error('Failed to place order');
    } finally {
      setOrderPlacing(false);
    }
  };

  if (items.length === 0 && platters.length === 0) return <div className='my-10 md:my-16'>
    <div className='container mx-auto p-4 flex flex-col gap-16'>
      <div className='max-w-[669px] self-center flex flex-col items-center gap-4'>
        <span className='font-bold text-4xl text-[#111827] text-center'>
          Your Cart is Empty
        </span>
        <p className='text-center text-[#4B5563] text-lg'>
          Select your preferred Subway branch to start ordering fresh, customizable subs for pickup or delivery.
        </p>
      </div>
    </div>
  </div>

  return <div className='container p-4 flex flex-col mx-auto gap-8 my-10 md:my-16'>
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
          {branchName}
        </div>
      </button>
    </div>
    <div className='flex gap-8 flex-col md:flex-row'>
      <div className='flex-1 bg-white p-6 flex flex-col gap-10'>
        <div className='flex justify-between items-center'>
          <div className='text-[#111827] font-semibold text-xl'>
            Your Items ({items.length + platters.length})
          </div>
        </div>
        {[...items, ...platters].map((item) => {

          let productDetails;
          if (item.itemType === 'subs') {
            productDetails = Data.subs.products.find(p => p.productName === item.item.productName);
          } else {
            productDetails = Data.platters.products.find(p => p.productName === item.item.productName);
          }

          return (
            <div className='p-[17px] gap-4 flex flex-col md:flex-row' key={item.id}>
              <img className='w-[80px] h-[80px] object-cover' src={productDetails?.imageUrl} />
              <div className='flex flex-col gap-3 flex-1'>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-1'>
                    <div className='text-[#111827] font-semibold'>
                      {productDetails?.productName}
                    </div>
                    <div className='text-[#111827]'>
                      {productDetails?.description}
                    </div>
                  </div>
                  <div className='text-[#111827] font-semibold'>
                    ${prices[item.id].toFixed(2)}
                  </div>
                </div>
                {item.itemType === 'subs' && (
                  <div className='text-[#4B5563] text-sm'>
                    <ul>
                      {item.item.type && <li className='text-sm'>Type: {item.item.type}</li>}
                      {item.item.bread && <li className='text-sm'>Type: {item.item.bread}</li>}
                      {item.item.cheese && <li className='text-sm'>Cheese: {item.item.cheese}</li>}
                      {item.item.doubleCheese && <li className='text-sm'>Double Cheese: {item.item.doubleCheese}</li>}
                      {item.item.doubleMeat && <li className='text-sm'>Double Meat: {item.item.doubleMeat}</li>}
                      {item.item.toasted && <li className='text-sm'>Toasted: {item.item.toasted}</li>}
                      {item.item.salad?.length > 0 && <li className='text-sm'>Salad: {item.item.salad.join(', ')}</li>}
                      {item.item.sauces?.length > 0 && <li className='text-sm'>Sauce: {item.item.sauces.join(', ')}</li>}
                      {item.item.mealDeal && <li className='text-sm'>Meal: {item.item.mealDeal}</li>}
                      {item.item.mealDeal === 'Yes' && item.item.sides && <li className='text-sm'>Sides: {item.item.sides.join(', ')}</li>}
                      {item.item.mealDeal === 'Yes' && item.item.drinks && <li className='text-sm'>Drinks: {item.item.drinks.join(', ')}</li>}
                    </ul>
                  </div>
                )}
                <div className='flex justify-between'>
                  <div className='flex gap-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" className="cursor-pointer"
                      onClick={() => {
                        if (item.itemType === 'subs') {
                          if (item.qty > 1) {
                            return updateQty(item.id, item.qty - 1);
                          }
                          return removeItem(item.id);
                        }
                        if (item.qty > 1) {
                          return updatePlatterQty(item.id, item.qty - 1);
                        }
                        return removePlatter(item.id);
                      }}
                    >
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z" fill="#1C274C" />
                    </svg>
                    <div className="text-[#1C274C] font-semibold text-lg">
                      {item.qty}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" className="cursor-pointer"
                      onClick={() => {
                        if (item.itemType === 'subs') {
                          return updateQty(item.id, item.qty + 1);
                        }
                        return updatePlatterQty(item.id, item.qty + 1);
                      }}
                    >
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#1C274C" />
                    </svg>
                  </div>
                  <div className='flex items-center gap-1 cursor-pointer'>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_14_1430)">
                        <path d="M4.66562 1.23398L4.46875 1.625H1.84375C1.35977 1.625 0.96875 2.01602 0.96875 2.5C0.96875 2.98398 1.35977 3.375 1.84375 3.375H12.3438C12.8277 3.375 13.2188 2.98398 13.2188 2.5C13.2188 2.01602 12.8277 1.625 12.3438 1.625H9.71875L9.52187 1.23398C9.37422 0.935938 9.0707 0.75 8.73984 0.75H5.44766C5.1168 0.75 4.81328 0.935938 4.66562 1.23398ZM12.3438 4.25H1.84375L2.42344 13.5195C2.46719 14.2113 3.04141 14.75 3.7332 14.75H10.4543C11.1461 14.75 11.7203 14.2113 11.7641 13.5195L12.3438 4.25Z" fill="#EF4444" />
                      </g>
                      <defs>
                        <clipPath id="clip0_14_1430">
                          <path d="M0.96875 0.75H13.2188V14.75H0.96875V0.75Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className='text-[#EF4444] tex-sm' onClick={() => {
                      if (item.itemType === 'subs') {
                        return removeItem(item.id);
                      }
                      return removePlatter(item.id);
                    }}>
                      Remove
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <hr className='opacity-10' />
        <div className='flex flex-col gap-2'>
          <div className='text-[#111827] font-semibold'>
            Special Instructions
          </div>
          <textarea className='border-[1px] border-solid border-[#D1D5DB] p-4 rounded-lg w-full' placeholder='Any special requests for your order?' value={order.instructions} onChange={(e) => setOrder({ ...order, instructions: e.target.value })}></textarea>
        </div>
      </div>
      <div className='w-full md:w-[390px] p-6 flex flex-col gap-6 bg-white'>
        {/* <div className='text-[#111827] font-semibold text-xl'>
          Order Summary
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between'>
            <div className='text-[#4B5563]'>
              Subtotal
            </div>
            <div className='text-[#000000] font-medium'>
              ${Object.values(prices).reduce((total, price) => total + price, 0).toFixed(2)}
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='text-[#4B5563]'>
              Tax
            </div>
            <div className='text-[#000000] font-medium'>
              $0.00
            </div>
          </div>
          <hr className='opacity-10' />
          <div className='flex justify-between'>
            <div className='text-[#111827] font-semibold'>
              Total
            </div>
            <div className='text-[#007C3E] font-semibold'>
              ${(Object.values(prices).reduce((total, price) => total + price, 0) + 0).toFixed(2)}
            </div>
          </div>
        </div> */}
        <div className='flex flex-col gap-3'>
          <div className='text-[#111827] font-semibold'>
            Delivery Method
          </div>
          <div className='border-[1px] border-solid border-[#E5E7EB] rounded-lg h-[70px] flex items-center p-3 gap-3 cursor-pointer' onClick={() => setDeliveryMethod('pickup')}>
            <input type='radio' name="deliveryMethod" className='w-4 h-4' checked={deliveryMethod === 'pickup'} />
            <div className='flex flex-col flex-1'>
              <div className='text-[#111827] font-medium'>
                Pickup
              </div>
              <div className='text-[#4B5563] text-sm'>
                Ready in 15-20 min • Free
              </div>
            </div>
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_14_1339)">
                <path d="M18.0968 3.24375L16.3062 0.409375C16.1468 0.15625 15.8624 0 15.5593 0H4.40931C4.10618 0 3.82181 0.15625 3.66243 0.409375L1.86868 3.24375C0.943681 4.70625 1.76243 6.74062 3.49056 6.975C3.61556 6.99062 3.74368 7 3.86868 7C4.68431 7 5.40931 6.64375 5.90618 6.09375C6.40306 6.64375 7.12806 7 7.94368 7C8.75931 7 9.48431 6.64375 9.98118 6.09375C10.4781 6.64375 11.2031 7 12.0187 7C12.8374 7 13.5593 6.64375 14.0562 6.09375C14.5562 6.64375 15.2781 7 16.0937 7C16.2218 7 16.3468 6.99062 16.4718 6.975C18.2062 6.74375 19.0281 4.70938 18.0999 3.24375H18.0968ZM16.5999 7.96562H16.5968C16.4312 7.9875 16.2624 8 16.0906 8C15.7031 8 15.3312 7.94062 14.9843 7.83437V12H4.98431V7.83125C4.63431 7.94063 4.25931 8 3.87181 8C3.69993 8 3.52806 7.9875 3.36243 7.96562H3.35931C3.23118 7.94687 3.10618 7.925 2.98431 7.89375V12V14C2.98431 15.1031 3.88118 16 4.98431 16H14.9843C16.0874 16 16.9843 15.1031 16.9843 14V12V7.89375C16.8593 7.925 16.7343 7.95 16.5999 7.96562Z" fill="#007C3E" />
              </g>
              <defs>
                <clipPath id="clip0_14_1339">
                  <path d="M0.984375 0H18.9844V16H0.984375V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='border-[1px] border-solid border-[#E5E7EB] rounded-lg h-[70px] flex items-center p-3 gap-3 cursor-pointer' onClick={() => setDeliveryMethod('delivery')}>
            <input type='radio' name="deliveryMethod" className='w-4 h-4' checked={deliveryMethod === 'delivery'} />
            <div className='flex flex-col flex-1'>
              <div className='text-[#111827] font-medium'>
                Delivery
              </div>
              <div className='text-[#4B5563] text-sm'>
                25-35 min • $2.99
              </div>
            </div>
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_14_1347)">
                <path d="M2.48438 0C1.65625 0 0.984375 0.671875 0.984375 1.5V11.5C0.984375 12.3281 1.65625 13 2.48438 13H2.98438C2.98438 14.6562 4.32812 16 5.98438 16C7.64062 16 8.98438 14.6562 8.98438 13H12.9844C12.9844 14.6562 14.3281 16 15.9844 16C17.6406 16 18.9844 14.6562 18.9844 13H19.9844C20.5375 13 20.9844 12.5531 20.9844 12C20.9844 11.4469 20.5375 11 19.9844 11V9V8V7.41563C19.9844 6.88438 19.775 6.375 19.4 6L16.9844 3.58437C16.6094 3.20937 16.1 3 15.5688 3H13.9844V1.5C13.9844 0.671875 13.3125 0 12.4844 0H2.48438ZM13.9844 5H15.5688L17.9844 7.41563V8H13.9844V5ZM4.48438 13C4.48438 12.6022 4.64241 12.2206 4.92371 11.9393C5.20502 11.658 5.58655 11.5 5.98438 11.5C6.3822 11.5 6.76373 11.658 7.04504 11.9393C7.32634 12.2206 7.48438 12.6022 7.48438 13C7.48438 13.3978 7.32634 13.7794 7.04504 14.0607C6.76373 14.342 6.3822 14.5 5.98438 14.5C5.58655 14.5 5.20502 14.342 4.92371 14.0607C4.64241 13.7794 4.48438 13.3978 4.48438 13ZM15.9844 11.5C16.3822 11.5 16.7637 11.658 17.045 11.9393C17.3263 12.2206 17.4844 12.6022 17.4844 13C17.4844 13.3978 17.3263 13.7794 17.045 14.0607C16.7637 14.342 16.3822 14.5 15.9844 14.5C15.5866 14.5 15.205 14.342 14.9237 14.0607C14.6424 13.7794 14.4844 13.3978 14.4844 13C14.4844 12.6022 14.6424 12.2206 14.9237 11.9393C15.205 11.658 15.5866 11.5 15.9844 11.5Z" fill="#007C3E" />
              </g>
              <defs>
                <clipPath id="clip0_14_1347">
                  <path d="M0.984375 0H20.9844V16H0.984375V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-[#111827] font-semibold'>
            Your Details
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="fullName" className='text-sm font-medium text-[#374151]'>Full Name</label>
            <input id="fullName" placeholder="Enter your name" className='border-[1px] border-solid border-[#D1D5DB] rounded-lg p-3' value={order.name} onChange={(e) => setOrder({ ...order, name: e.target.value })} />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="phoneNumber" className='text-sm font-medium text-[#374151]'>Phone Number</label>
            <input id="phoneNumber" placeholder="(555) 123-4567" className='border-[1px] border-solid border-[#D1D5DB] rounded-lg p-3' value={order.phone} onChange={(e) => setOrder({ ...order, phone: e.target.value })} />
          </div>
          {deliveryMethod === 'delivery' && <>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email" className='text-sm font-medium text-[#374151]'>Email</label>
              <input id="email" placeholder="your@email.com" className='border-[1px] border-solid border-[#D1D5DB] rounded-lg p-3' value={order.email} onChange={(e) => setOrder({ ...order, email: e.target.value })} />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="deliveryAddress" className='text-sm font-medium text-[#374151]'>Delivery Address</label>
              <textarea id="deliveryAddress" placeholder="Enter your delivery address" className='border-[1px] border-solid border-[#D1D5DB] rounded-lg p-3' value={order.address} onChange={(e) => setOrder({ ...order, address: e.target.value })} />
            </div>
          </>}
        </div>
        <button
          className='bg-[#007C3E] disabled:bg-[#007c3e8c] h-[48px] p-3 rounded-lg flex justify-center items-center text-white font-medium cursor-pointer hover:bg-[#00934a] gap-2'
          onClick={placeOrder}
          disabled={orderPlacing || !order.name || !order.phone || (deliveryMethod === 'delivery' && (!order.email || !order.address))}
        >
          {orderPlacing && <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" className='animate-spin'>
            <path d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612" stroke="white" stroke-width="3.55556" stroke-linecap="round" />
          </svg>}
          Place Order - ${Object.values(prices).reduce((total, price) => total + price, 0).toFixed(2)}
          <div></div>
        </button>
        <div className='bg-[#F9FAFB] rounded-lg p-3 text-sm text-[#4B5563]'>
          Payment will be collected upon delivery or pick-up
        </div>
      </div>
    </div>
  </div>
}
