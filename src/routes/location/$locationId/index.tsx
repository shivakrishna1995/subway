import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { createFileRoute } from '@tanstack/react-router'
import Categories from '@/data.json';

export const Route = createFileRoute('/location/$locationId/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div className='flex flex-col mt-2'>
        <Tabs defaultValue={Categories[0].categoryId.toString()}>
            <div className='bg-white h-[63px] border-b-[1px] border-solid border-[#E5E7EB] flex flex-row items-center'>
                <div className='container mx-auto px-4'>
                    <TabsList className='flex gap-8'>
                        {Categories.map((category) => (
                            <TabsTrigger value={category.categoryId.toString()} className='cursor-pointer hover:text-[#007C3E] font-medium text-[#4B5563] data-[state=active]:text-[#007C3E] py-5 data-[state=active]:pb-[18.8px] data-[state=active]:bg-none data-[state=active]:shadow-none data-[state=active]:border-b-[2px] data-[state=active]:border-b-solid data-[state=active]:border-b-[#007C3E] rounded-none px-0'>{category.categoryName}</TabsTrigger>
                        ))}
                    </TabsList>
                </div>
            </div>

            {Categories.map((category) => (
                <TabsContent value={category.categoryId.toString()} className='py-6'>
                    <div className='container mx-auto px-4 flex flex-col gap-12'>
                        {category.subCategories.map((subCategory) => (
                            <div className='flex flex-col gap-[23px]'>
                                <div className='text-[#111827] font-bold text-2xl'>
                                    {subCategory.subCategorieName}
                                </div>
                                <div className='flex flex-row flex-wrap gap-6'>
                                    {subCategory.products.map((product) => (
                                        <div className='w-[294px] shadow bg-white flex flex-col overflow-hidden rounded-lg relative cursor-pointer hover:shadow-lg'>
                                            <img src={product.imageUrl} alt={product.productName} className='w-full object-contain' />
                                            <div className='p-4 flex flex-col gap-2'>
                                                <div className='text-[#111827] font-semibold'>
                                                    {product.productName}
                                                </div>
                                                <div className='text-sm text-[#4B5563]'>
                                                    from <span className='text-black font-semibold'>£{product.price.toFixed(2)}</span>
                                                </div>
                                                <div className='text-xs text-[#4B5563]'>
                                                    {product.description}
                                                </div>
                                            </div>
                                            <svg className='absolute top-[14px] right-[14px]' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
                                                <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    </div>
}
