import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type ProductProps = {
    productName: string;
    price: number
    description: string | null
    imageUrl: string
}
const Product = ({ productName, price, description, imageUrl }: ProductProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className='w-full shadow bg-white flex flex-col overflow-hidden rounded-lg relative cursor-pointer hover:shadow-lg'>
                    <img src={imageUrl} alt={productName} className='w-full object-contain' />
                    <div className='p-4 flex flex-col gap-2 items-start'>
                        <div className='text-[#111827] font-semibold'>
                            {productName}
                        </div>
                        <div className='text-sm text-[#4B5563]'>
                            from <span className='text-black font-semibold'>£{price.toFixed(2)}</span>
                        </div>
                        {description && (
                            <div className='text-xs text-[#4B5563] text-left'>
                                {description}
                            </div>
                        )}
                    </div>
                    <svg className='absolute top-[14px] right-[14px]' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
                        <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-white border-0">
                <div className="flex flex-col gap-6">
                    <img src={imageUrl} alt={productName} className='w-full object-contain border-[1px] h-[200px] border-solid border-[#E5E7EB] rounded-lg' />
                </div>
                <div className="flex flex-col">
                    <div className="text-[#222222] font-bold text-2xl">{productName}</div>
                    <div className="text-[#555555]">{description}</div>
                </div>
                <div className="border-[1px] border-solid border-[#E0E0E0] bg-[#F9FAFB] rounded-lg p-3 flex flex-col gap-0">
                    <span className="text-sm text-[#555555]">Questions about allergens, ingredients or cooking methods?</span>
                    <span className="text-sm font-medium text-[#007C3E] cursor-pointer">Please contact the restaurant.</span>
                </div>
            </DialogContent>
        </Dialog>
    )
};

export default Product;