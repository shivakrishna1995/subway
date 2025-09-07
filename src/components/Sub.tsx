import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Data from "../dataV2.json";
import { Controller, useForm } from 'react-hook-form';
import type z from "zod";
import OrderSchema from "@/schema/order"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useCartStore } from "@/store/cart";

type ProductProps = {
    productName: string;
    price: number
    description: string | null
    imageUrl: string
}
const Sub = ({ productName, price, description, imageUrl }: ProductProps) => {
    const [openDialog, setOpenDialog] = useState(false);

    const {
        watch,
        control,
        handleSubmit,
        formState,
        reset,
    } = useForm<z.infer<typeof OrderSchema>>({
        resolver: zodResolver(OrderSchema),
        defaultValues: {
            productName,
            salad: [],
            sauces: [],
            sides: [],
            drinks: [],
        }
    });
    const [qty, setQty] = useState(1);

    const { addItem } = useCartStore();

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
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
            <DialogContent className="bg-white border-0 h-[80vh] p-[24px_24px_0px_24px] flex flex-col">
                <form className="flex flex-col gap-6 h-full" onSubmit={handleSubmit((item) => {
                    addItem({
                        item,
                        qty,
                        id: Date.now(),
                    });
                    toast.success(`${qty} item/s added to cart`);
                    reset();
                    setOpenDialog(false);
                })}>
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-6">
                            <img src={imageUrl} alt={productName} className='w-full object-contain border-[1px] h-[200px] border-solid border-[#E5E7EB] rounded-lg' />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[#222222] font-bold text-2xl">{productName}</div>
                            <div className="text-[#555555]">{description}</div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Controller
                                control={control}
                                name="type"
                                render={({ field: { onChange, value, } }) => (
                                    <div className='flex flex-col'>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col">
                                                <div className="font-semibold text-[#222222]">
                                                    Choose Type
                                                </div>
                                                <div className="text-xs font-medium text-[#D32F2F]">Required</div>
                                            </div>
                                            {Data.subs.order.types.map((type) => (
                                                <div
                                                    key={type.name}
                                                    className="flex flex-col gap-1 cursor-pointer" onClick={() => onChange(type.name)}
                                                >
                                                    <div className="flex flex-row items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <input name="subSize" type='radio' className="w-5 h-5" checked={value === type.name} />
                                                            <div className="text-[#222222]">{type.name}</div>
                                                        </div>
                                                        {type.price > 0 && (
                                                            <div className="font-medium text-[#222222] text-sm">£{type.price.toFixed(2)}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            />
                            {['6-inch', 'Footlong'].includes(watch('type')) && (
                                <Controller
                                    control={control}
                                    name="bread"
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Bread
                                                    </div>
                                                    <div className="text-xs font-medium text-[#D32F2F]">Required</div>
                                                </div>
                                                {Data.subs.order.breads.map((option) => (
                                                    <div key={option.name} className="flex flex-col gap-1 cursor-pointer" onClick={() => onChange(option.name)}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input name="bread" type='radio' className="w-5 h-5" checked={value === option.name} />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            <div className="font-medium text-[#222222] text-sm"></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                            {watch('type') && (
                                <Controller
                                    control={control}
                                    name="cheese"
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Cheese
                                                    </div>
                                                    <div className="text-xs font-medium text-[#D32F2F]">Required</div>
                                                </div>
                                                {Data.subs.order.cheese.map((option) => (
                                                    <div key={option.name} className="flex flex-col gap-1 cursor-pointer" onClick={() => onChange(option.name)}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input name="cheese" type='radio' className="w-5 h-5" checked={value == option.name} />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            <div className="font-medium text-[#222222] text-sm"></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                            {watch('cheese') == 'Yes' && (
                                <Controller
                                    control={control}
                                    name="doubleCheese"
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Double Cheese
                                                    </div>
                                                    <div className="text-xs font-medium text-[#D32F2F]">Required</div>
                                                </div>
                                                {Data.subs.order.doubleCheese[watch('type') === 'Footlong' ? 'footlong' : 'others'].map((option) => (
                                                    <div key={option.name} className="flex flex-col gap-1 cursor-pointer" onClick={() => onChange(option.name)}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input name="doubleCheese" type='radio' className="w-5 h-5" checked={value === option.name} />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            {option.price > 0 && (
                                                                <div className="font-medium text-[#222222] text-sm">£{option.price.toFixed(2)}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                            {watch('cheese') && (
                                <Controller
                                    control={control}
                                    name="doubleMeat"
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Double Meat
                                                    </div>
                                                    <div className="text-xs font-medium text-[#D32F2F]">Required</div>
                                                </div>
                                                {Data.subs.order.doubleMeat?.[watch('type') === 'Footlong' ? 'footlong' : 'others'].map((option) => (
                                                    <div key={option.name} className="flex flex-col gap-1 cursor-pointer" onClick={() => onChange(option.name)}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input name="doubleMeat" type='radio' className="w-5 h-5" checked={value === option.name} />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            {option.price > 0 && (
                                                                <div className="font-medium text-[#222222] text-sm">£{option.price.toFixed(2)}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                            {['6-inch', 'Footlong', 'Wrap', 'Jack Potato'].includes(watch('type')) && (
                                <Controller
                                    control={control}
                                    name='toasted'
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Toasted
                                                    </div>
                                                    <div className="text-xs font-medium text-[#D32F2F]">Required</div>
                                                </div>
                                                {Data.subs.order.toasted.map((option) => (
                                                    <div key={option.name} className="flex flex-col gap-1 cursor-pointer" onClick={() => onChange(option.name)}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input name="toasted" type='radio' className="w-5 h-5" checked={value === option.name} />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            {option.price > 0 && (
                                                                <div className="font-medium text-[#222222] text-sm">£{option.price.toFixed(2)}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                            {watch('type') && (
                                <Controller
                                    name="salad"
                                    control={control}
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Salad
                                                    </div>
                                                </div>
                                                {Data.subs.order.salad.map((option) => (
                                                    <div className="flex flex-col gap-1 cursor-pointer"
                                                        onClick={() => {
                                                            if (value?.includes(option.name as "Lettuce" | "Tomatoes" | "Cucumber" | "Pickles" | "Peppers" | "Olives" | "Red Onions" | "Jalapenos" | "Sweetcorn")) {
                                                                return onChange(value.filter((item) => item !== option.name))
                                                            }
                                                            return onChange([...value, option.name])
                                                        }}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input type='checkbox' className="w-5 h-5"
                                                                    readOnly
                                                                    checked={value?.includes(option.name as "Lettuce" | "Tomatoes" | "Cucumber" | "Pickles" | "Peppers" | "Olives" | "Red Onions" | "Jalapenos" | "Sweetcorn")}
                                                                />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            <div className="font-medium text-[#222222] text-sm"></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                            {watch('type') && (
                                <Controller
                                    name="sauces"
                                    control={control}
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Sauce
                                                    </div>
                                                    <div className="text-xs font-medium text-[#D32F2F]">Maximum 2 sauces</div>
                                                </div>
                                                {Data.subs.order.sauces.map((option) => (
                                                    <div className="flex flex-col gap-1 cursor-pointer"
                                                        onClick={() => {
                                                            if (value?.length >= 2) {
                                                                return toast.error("You can only choose 2 sauces")
                                                            }
                                                            if (value?.includes(option.name as "Sweet Chilli Sauce" | "Chipotle Southwest Sauce (V)" | "Sweet Onion (VE)" | "Honey Mustard Dressing" | "Ketchup (VE)" | "HP Brown Sauce (VE)" | "X-Spicy Chipotle Southwest Sauce (V)" | "Garlic & Herb Sauce (VE)" | "Teriyaki Sauce (VE)" | "Lite Mayo" | "BBQ Sauce")) {
                                                                return onChange(value.filter((item) => item !== option.name))
                                                            }
                                                            return onChange([...value, option.name])
                                                        }}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input type='checkbox' className="w-5 h-5"
                                                                    checked={value?.includes(option.name as "Sweet Chilli Sauce" | "Chipotle Southwest Sauce (V)" | "Sweet Onion (VE)" | "Honey Mustard Dressing" | "Ketchup (VE)" | "HP Brown Sauce (VE)" | "X-Spicy Chipotle Southwest Sauce (V)" | "Garlic & Herb Sauce (VE)" | "Teriyaki Sauce (VE)" | "Lite Mayo" | "BBQ Sauce")}
                                                                    readOnly
                                                                />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            <div className="font-medium text-[#222222] text-sm"></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                            {watch('type') && (
                                <Controller
                                    name="mealDeal"
                                    control={control}
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Make it a meal deal
                                                    </div>
                                                    <div className="text-xs font-medium text-[#D32F2F]">Required</div>
                                                </div>
                                                {Data.subs.order.mealDeal.map((option) => (
                                                    <div className="flex flex-col gap-1 cursor-pointer"
                                                        onClick={() => onChange(option.name)}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input type='radio' name="mealDeal" className="w-5 h-5"
                                                                    checked={value === option.name}
                                                                    readOnly
                                                                />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            <div className="font-medium text-[#222222] text-sm"></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                            {watch('mealDeal') === "Yes" && (
                                <Controller
                                    name="sides"
                                    control={control}
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Sides
                                                    </div>
                                                    <div className="text-xs font-medium text-[#D32F2F]">Required</div>
                                                </div>
                                                {Data.subs.order.sides.map((option) => (
                                                    <div className="flex flex-col gap-1 cursor-pointer"
                                                        onClick={() => {
                                                            if (value?.includes(option.name as "Double Chocolate Cookie (Ve)" | "Chocolate Chunk Cookie" | "Rainbow Chocolate Chip Cookie" | "White Chip Macadamia Nut Cookie" | "3x Double Chocolate Cookies (Ve)" | "3x Chocolate Chunk Cookies" | "3x Rainbow Chocolate Chip Cookies" | "3x White Chocolate Chip Macadamia Nut Cookies" | "12 Cookies" | "DORITOS® Chilli Heatwave" | "DORITOS® Tangy Cheese" | "Quavers Cheese" | "Walkers Cheese & Onion" | "Walkers Max Paprika" | "Walkers Oven Baked Cheese & Onion" | "Walkers Ready Salted" | "Walkers Salt & Vinegar")) {
                                                                return onChange(value.filter((item) => item !== option.name))
                                                            }
                                                            return onChange([...(value || []), option.name])
                                                        }}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input type='checkbox' className="w-5 h-5"
                                                                    checked={value?.includes(option.name as "Double Chocolate Cookie (Ve)" | "Chocolate Chunk Cookie" | "Rainbow Chocolate Chip Cookie" | "White Chip Macadamia Nut Cookie" | "3x Double Chocolate Cookies (Ve)" | "3x Chocolate Chunk Cookies" | "3x Rainbow Chocolate Chip Cookies" | "3x White Chocolate Chip Macadamia Nut Cookies" | "12 Cookies" | "DORITOS® Chilli Heatwave" | "DORITOS® Tangy Cheese" | "Quavers Cheese" | "Walkers Cheese & Onion" | "Walkers Max Paprika" | "Walkers Oven Baked Cheese & Onion" | "Walkers Ready Salted" | "Walkers Salt & Vinegar")}
                                                                    readOnly
                                                                />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            {option.price > 0 && (
                                                                <div className="font-medium text-[#222222] text-sm">£{option.price.toFixed(2)}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                            {watch('mealDeal') === "Yes" && (
                                <Controller
                                    name="drinks"
                                    control={control}
                                    render={({ field: { onChange, value, } }) => (
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold text-[#222222]">
                                                        Drinks
                                                    </div>
                                                    <div className="text-xs font-medium text-[#D32F2F]">Required</div>
                                                </div>
                                                {Data.subs.order.drinks.map((option) => (
                                                    <div className="flex flex-col gap-1 cursor-pointer"
                                                        onClick={() => {
                                                            if (value?.includes(option.name as 'Coca-Cola Original 500ml' | 'Coca-Cola Zero 500ml' | 'Coca-Cola Zero Cherry 500ml' | 'Coke Zero 1.25L' | 'Costa Caramel Latte 250ml' | 'Costa Latte 250ml' | 'Costa Brownie Frappe 250ml' | 'Dr Pepper 500ml' | 'Fanta Orange 1.25L' | 'Fanta Orange 500ml' | 'Oasis Summer Fruits 500ml' | 'Powerade Berry Tropical 500ml' | 'Princes Gate Still Water 500ml' | 'Robinsons Fruit Shoot Apple & Blackcurrent 200ml' | 'Sprite Zero 500ml' | 'Tropicana Orange Juice 250ml')) {
                                                                return onChange(value.filter((item) => item !== option.name))
                                                            }
                                                            return onChange([...(value || []), option.name])
                                                        }}>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <input type='checkbox' className="w-5 h-5"
                                                                    checked={value?.includes(option.name as 'Coca-Cola Original 500ml' | 'Coca-Cola Zero 500ml' | 'Coca-Cola Zero Cherry 500ml' | 'Coke Zero 1.25L' | 'Costa Caramel Latte 250ml' | 'Costa Latte 250ml' | 'Costa Brownie Frappe 250ml' | 'Dr Pepper 500ml' | 'Fanta Orange 1.25L' | 'Fanta Orange 500ml' | 'Oasis Summer Fruits 500ml' | 'Powerade Berry Tropical 500ml' | 'Princes Gate Still Water 500ml' | 'Robinsons Fruit Shoot Apple & Blackcurrent 200ml' | 'Sprite Zero 500ml' | 'Tropicana Orange Juice 250ml')}
                                                                    readOnly
                                                                />
                                                                <div className="text-[#222222]">{option.name}</div>
                                                            </div>
                                                            {option.price > 0 && (
                                                                <div className="font-medium text-[#222222] text-sm">£{option.price.toFixed(2)}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col border-t-[1px] border-solid border-[#E5E7EB] py-8 gap-7">
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
                            type="submit"
                            disabled={!formState.isValid}
                        >
                            Add for £200
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
};

export default Sub;
