import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { createFileRoute } from '@tanstack/react-router'
import Categories from '@/data.json';
import Product from '@/components/Product';

export const Route = createFileRoute('/$locationId/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div className='flex flex-col mt-2 overflow-x-hidden'>
        <Tabs defaultValue={Categories[0].categoryId.toString()}>
            <div className='bg-white h-[63px] border-b-[1px] border-solid border-[#E5E7EB] flex flex-row items-center overflow-auto'>
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
                                <div className='flex flex-col md:flex-row flex-wrap gap-6'>
                                    {subCategory.products.map((product, index) => (
                                        <div key={index} className='w-full md:w-[294px]'>
                                            <Product
                                                key={index}
                                                productName={product.productName}
                                                price={product.price}
                                                description={product.description}
                                                imageUrl={product.imageUrl}
                                            />
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
