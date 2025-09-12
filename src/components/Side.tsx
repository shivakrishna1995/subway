import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { toast } from "react-toastify";
import { useCartStore } from "@/store/cart";

type ProductProps = {
    productName: string;
    price: number
    description: string | null
    imageUrl: string
}
const Side = ({ productName, price, description, imageUrl }: ProductProps) => {
    const [openDialog, setOpenDialog] = useState(false);

    const [qty, setQty] = useState(1);

    const { addSide } = useCartStore();

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <div className='w-full shadow bg-white flex flex-col overflow-hidden rounded-lg relative cursor-pointer hover:shadow-lg'>
                    <img src={imageUrl} alt={productName} className='w-full object-contain max-h-[180px]' />
                    <div className='p-4 flex flex-col gap-2 items-start'>
                        <div className='text-[#111827] font-semibold'>
                            {productName}
                        </div>
                        <div className='text-sm text-[#4B5563]'>
                            from <span className='text-black font-semibold'>£{price.toFixed(2)}</span>
                        </div>
                        {description && (
                            <div className='text-xs text-[#4B5563] text-left line-clamp-3'>
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
            <DialogContent className="bg-white border-0 p-[24px_24px_0px_24px] flex flex-col">
                <div className="flex flex-col flex-1 overflow-y-auto gap-5">
                    <div className="flex flex-col gap-6">
                        <img src={imageUrl} alt={productName} className='w-full object-contain border-[1px] h-[200px] border-solid border-[#E5E7EB] rounded-lg' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-[#222222] font-bold text-2xl">{productName}</div>
                        <div className="text-[#222222] font-medium">Price: £{price.toFixed(2)}</div>
                        <div className="text-[#555555]">{description}</div>
                    </div>
                </div>

                <div className="flex flex-col border-t-[1px] border-solid border-[#E5E7EB] py-4 gap-4">
                    <div className="flex gap-10 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" className="cursor-pointer"
                            onClick={() => {
                                if (qty > 1) {
                                    setQty(qty - 1)
                                }
                            }}
                        >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z" fill="#1C274C" />
                        </svg>
                        <div className="text-[#1C274C] font-semibold text-lg">
                            {qty}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" className="cursor-pointer"
                            onClick={() => setQty(qty + 1)}
                        >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#1C274C" />
                        </svg>
                    </div>
                    <button
                        className='bg-[#007C3E] disabled:bg-[#007c3e8c] h-[48px] p-3 rounded-lg flex justify-center items-center text-white font-medium cursor-pointer hover:bg-[#00934a]'
                        onClick={() => {
                            addSide({
                                item: {
                                    productName,
                                },
                                itemType: 'sides',
                                qty,
                                id: Date.now(),
                            });
                            toast.success("Added to cart");
                            setOpenDialog(false);
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
};

export default Side;
