import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { createFileRoute } from '@tanstack/react-router'
import Data from '@/dataV2.json';
import Sub from '@/components/Sub';
import Platter from '@/components/Platter';
import Side from '@/components/Side';
import Drink from '@/components/Drink';

export const Route = createFileRoute('/$locationId/')({
    component: RouteComponent,
})

const Subs = Data.subs;
const Sides = Data.sides;
const Drinks = Data.drinks;
const Platters = Data.platters;

function RouteComponent() {
    return <>
        <div className='flex flex-col mt-2 overflow-x-hidden'>
            <Tabs defaultValue="Subs">
                <div className='bg-white h-[63px] border-b-[1px] border-solid border-[#E5E7EB] flex flex-row items-center overflow-auto'>
                    <div className='container mx-auto px-4'>
                        <TabsList className='flex gap-8'>
                            <TabsTrigger value='Subs' className='cursor-pointer hover:text-[#007C3E] font-medium text-[#4B5563] data-[state=active]:text-[#007C3E] py-5 data-[state=active]:pb-[18.8px] data-[state=active]:bg-none data-[state=active]:shadow-none data-[state=active]:border-b-[2px] data-[state=active]:border-b-solid data-[state=active]:border-b-[#007C3E] rounded-none px-0'>Subs</TabsTrigger>
                            <TabsTrigger value='Sides' className='cursor-pointer hover:text-[#007C3E] font-medium text-[#4B5563] data-[state=active]:text-[#007C3E] py-5 data-[state=active]:pb-[18.8px] data-[state=active]:bg-none data-[state=active]:shadow-none data-[state=active]:border-b-[2px] data-[state=active]:border-b-solid data-[state=active]:border-b-[#007C3E] rounded-none px-0'>Sides</TabsTrigger>
                            <TabsTrigger value='Drinks' className='cursor-pointer hover:text-[#007C3E] font-medium text-[#4B5563] data-[state=active]:text-[#007C3E] py-5 data-[state=active]:pb-[18.8px] data-[state=active]:bg-none data-[state=active]:shadow-none data-[state=active]:border-b-[2px] data-[state=active]:border-b-solid data-[state=active]:border-b-[#007C3E] rounded-none px-0'>Drinks</TabsTrigger>
                            <TabsTrigger value='Platters' className='cursor-pointer hover:text-[#007C3E] font-medium text-[#4B5563] data-[state=active]:text-[#007C3E] py-5 data-[state=active]:pb-[18.8px] data-[state=active]:bg-none data-[state=active]:shadow-none data-[state=active]:border-b-[2px] data-[state=active]:border-b-solid data-[state=active]:border-b-[#007C3E] rounded-none px-0'>Platters</TabsTrigger>
                        </TabsList>
                    </div>
                </div>

                <TabsContent value='Subs'>
                    <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
                        {Subs.products.map((product, index) => (
                            <Sub
                                key={index}
                                productName={product.productName}
                                price={product.price}
                                description={product.description}
                                imageUrl={product.imageUrl}
                            />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value='Sides'>
                    <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
                        {Sides.products.map((product, index) => (
                            <Side
                                key={index}
                                productName={product.productName}
                                price={product.price}
                                description={product.description}
                                imageUrl={product.imageUrl}
                            />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value='Drinks'>
                    <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
                        {Drinks.products.map((product, index) => (
                            <Drink
                                key={index}
                                productName={product.productName}
                                price={product.price}
                                description={product.description}
                                imageUrl={product.imageUrl}
                            />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value='Platters'>
                    <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
                        {Platters.products.map((product, index) => (
                            <Platter
                                key={index}
                                productName={product.productName}
                                price={product.price}
                                description={product.description}
                                imageUrl={product.imageUrl}
                            />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </>
}
