import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/location/')({
    component: RouteComponent,
})

function RouteComponent() {
    const router = useRouter();

    return (
        <div className='container mx-auto p-8 flex flex-col gap-16'>
            <div className='max-w-[669px] self-center flex flex-col items-center gap-4'>
                <span className='font-bold text-4xl text-[#111827] text-center'>
                    Choose Your Subway Location
                </span>
                <p className='text-center text-[#4B5563] text-lg'>
                    Select your preferred Subway branch to start ordering fresh, customizable subs for pickup or delivery.
                </p>
            </div>

            <div className='flex flex-row items-center justify-center flex-wrap gap-8'>
                <div className='flex flex-col gap-6 shadow-[0_4px_6px_0_rgba(0,0,0,0.10),_0_10px_15px_0_rgba(0,0,0,0.10)] rounded-lg w-[560px] p-6 border-[1px] border-solid border-[#E5E7EB]'>
                    <div className='flex justify-between items-center'>
                        <div className='text-xl text-[#111827] font-bold'>
                            Coventry Branch
                        </div>
                        <div className='bg-[#007C3E] rounded-full h-[28px] p-[4px_12px] flex justify-center items-center text-white text-sm font-medium'>
                            Available
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_31_680)">
                                <path d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" fill="#007C3E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_31_680">
                                    <path d="M0 0H12V16H0V0Z" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className='text-[#4B5563] flex-1'>
                            Unit R2, The Gallagher Retail Park, Stoney Stanton Rd, Coventry CV6 5QE
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#FFD700] rounded-sm h-[24px] p-[4px_8px] text-black font-medium text-xs'>
                            Pickup
                        </div>
                        <div className='bg-[#FFD700] rounded-sm h-[24px] p-[4px_8px] text-black font-medium text-xs'>
                            Delivery
                        </div>
                    </div>
                    <button
                        className='bg-[#007C3E] h-[48px] p-3 rounded-lg flex justify-center items-center text-white font-medium cursor-pointer hover:bg-[#00934a]'
                        onClick={() => router.navigate({ to: '/location/coventry' })}
                    >
                        Order from Coventry
                    </button>
                </div>
                <div className='flex flex-col gap-6 shadow-[0_4px_6px_0_rgba(0,0,0,0.10),_0_10px_15px_0_rgba(0,0,0,0.10)] rounded-lg w-[560px] p-6 border-[1px] border-solid border-[#E5E7EB]'>
                    <div className='flex justify-between items-center'>
                        <div className='text-xl text-[#111827] font-bold'>
                            Jewellery Quarter
                        </div>
                        <div className='bg-[#007C3E] rounded-full h-[28px] p-[4px_12px] flex justify-center items-center text-white text-sm font-medium'>
                            Available
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_31_680)">
                                <path d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" fill="#007C3E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_31_680">
                                    <path d="M0 0H12V16H0V0Z" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className='text-[#4B5563] flex-1'>
                            Unit 4, 40 A Frederick St, Birmingham B1 3HN
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#FFD700] rounded-sm h-[24px] p-[4px_8px] text-black font-medium text-xs'>
                            Pickup
                        </div>
                        <div className='bg-[#FFD700] rounded-sm h-[24px] p-[4px_8px] text-black font-medium text-xs'>
                            Delivery
                        </div>
                    </div>
                    <button
                        className='bg-[#007C3E] h-[48px] p-3 rounded-lg flex justify-center items-center text-white font-medium cursor-pointer hover:bg-[#00934a]'
                        onClick={() => router.navigate({ to: '/location/jewellery-quarter' })}
                    >
                        Order from Jewellery Quarter
                    </button>
                </div>
                <div className='flex flex-col gap-6 shadow-[0_4px_6px_0_rgba(0,0,0,0.10),_0_10px_15px_0_rgba(0,0,0,0.10)] rounded-lg w-[560px] p-6 border-[1px] border-solid border-[#E5E7EB]'>
                    <div className='flex justify-between items-center'>
                        <div className='text-xl text-[#111827] font-bold'>
                            Broadway Plaza
                        </div>
                        <div className='bg-[#007C3E] rounded-full h-[28px] p-[4px_12px] flex justify-center items-center text-white text-sm font-medium'>
                            Available
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_31_680)">
                                <path d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" fill="#007C3E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_31_680">
                                    <path d="M0 0H12V16H0V0Z" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className='text-[#4B5563] flex-1'>
                            Broadway Plaza, Unit 11 Broadway Plaza, 220, 11 Ladywood Middleway, Birmingham B16 8LP
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#FFD700] rounded-sm h-[24px] p-[4px_8px] text-black font-medium text-xs'>
                            Pickup
                        </div>
                        <div className='bg-[#FFD700] rounded-sm h-[24px] p-[4px_8px] text-black font-medium text-xs'>
                            Delivery
                        </div>
                    </div>
                    <button
                        className='bg-[#007C3E] h-[48px] p-3 rounded-lg flex justify-center items-center text-white font-medium cursor-pointer hover:bg-[#00934a]'
                        onClick={() => router.navigate({ to: '/location/broadway-plaza' })}
                    >
                        Order from Broadway Plaza
                    </button>
                </div>
                <div className='flex flex-col gap-6 shadow-[0_4px_6px_0_rgba(0,0,0,0.10),_0_10px_15px_0_rgba(0,0,0,0.10)] rounded-lg w-[560px] p-6 border-[1px] border-solid border-[#E5E7EB]'>
                    <div className='flex justify-between items-center'>
                        <div className='text-xl text-[#111827] font-bold'>
                            West Orchards
                        </div>
                        <div className='bg-[#007C3E] rounded-full h-[28px] p-[4px_12px] flex justify-center items-center text-white text-sm font-medium'>
                            Available
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_31_680)">
                                <path d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" fill="#007C3E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_31_680">
                                    <path d="M0 0H12V16H0V0Z" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className='text-[#4B5563] flex-1'>
                            Kiosk 4, West Orchards Shopping Centre, W Orch Wy, Coventry CV1 1QX
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#FFD700] rounded-sm h-[24px] p-[4px_8px] text-black font-medium text-xs'>
                            Pickup
                        </div>
                        <div className='bg-[#FFD700] rounded-sm h-[24px] p-[4px_8px] text-black font-medium text-xs'>
                            Delivery
                        </div>
                    </div>
                    <button
                        className='bg-[#007C3E] h-[48px] p-3 rounded-lg flex justify-center items-center text-white font-medium cursor-pointer hover:bg-[#00934a]'
                        onClick={() => router.navigate({ to: '/location/west-orchards' })}
                    >
                        Order from West Orchards
                    </button>
                </div>
            </div>

            <div className='p-8 flex flex-col gap-8 bg-white rounded-lg'>
                <div className='font-bold text-2xl text-[#111827] self-center text-center'>
                    Why Choose Subway Express Ordering?
                </div>
                <div className='flex gap-8 justify-center flex-wrap'>
                    <div className='flex flex-col gap-5 justify-center items-center w-[370px]'>
                        <div className='h-[64px] w-[64px] bg-[#007C3E] flex justify-center items-center rounded-full'>
                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5344 2.09062C15.8109 1.44843 15.6047 0.698434 15.0375 0.285934C14.4703 -0.126566 13.6969 -0.0890657 13.1672 0.370309L1.16719 10.8703C0.698443 11.2828 0.529693 11.9437 0.750005 12.525C0.970318 13.1062 1.53282 13.5 2.15626 13.5H7.38282L3.77813 21.9094C3.50157 22.5516 3.70782 23.3016 4.275 23.7141C4.84219 24.1266 5.61563 24.0891 6.14532 23.6297L18.1453 13.1297C18.6141 12.7172 18.7828 12.0562 18.5625 11.475C18.3422 10.8937 17.7844 10.5047 17.1563 10.5047H11.9297L15.5344 2.09062Z" fill="white" />
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='font-semibold text-lg text-[#111827]'>
                                Fast Ordering
                            </div>
                            <div className='text-center text-[#4B5563]'>
                                Quick and easy online ordering system designed for busy schedules.
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 justify-center items-center w-[370px]'>
                        <div className='h-[64px] w-[64px] bg-[#007C3E] flex justify-center items-center rounded-full'>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9844 12C24.9844 12.0422 24.9844 12.0844 24.9844 12.1266C24.9656 13.8375 23.4094 15 21.6984 15H17.1094C15.8672 15 14.8594 16.0078 14.8594 17.25C14.8594 17.4094 14.8781 17.5641 14.9062 17.7141C15.0047 18.1922 15.2109 18.6516 15.4125 19.1156C15.6984 19.7625 15.9797 20.4047 15.9797 21.0844C15.9797 22.575 14.9672 23.9297 13.4766 23.9906C13.3125 23.9953 13.1484 24 12.9797 24C6.35625 24 0.984375 18.6281 0.984375 12C0.984375 5.37188 6.35625 0 12.9844 0C19.6125 0 24.9844 5.37188 24.9844 12ZM6.98438 13.5C6.98438 13.1022 6.82634 12.7206 6.54504 12.4393C6.26373 12.158 5.8822 12 5.48438 12C5.08655 12 4.70502 12.158 4.42371 12.4393C4.14241 12.7206 3.98438 13.1022 3.98438 13.5C3.98438 13.8978 4.14241 14.2794 4.42371 14.5607C4.70502 14.842 5.08655 15 5.48438 15C5.8822 15 6.26373 14.842 6.54504 14.5607C6.82634 14.2794 6.98438 13.8978 6.98438 13.5ZM6.98438 9C7.3822 9 7.76373 8.84196 8.04503 8.56066C8.32634 8.27936 8.48438 7.89782 8.48438 7.5C8.48438 7.10218 8.32634 6.72064 8.04503 6.43934C7.76373 6.15804 7.3822 6 6.98438 6C6.58655 6 6.20502 6.15804 5.92371 6.43934C5.64241 6.72064 5.48438 7.10218 5.48438 7.5C5.48438 7.89782 5.64241 8.27936 5.92371 8.56066C6.20502 8.84196 6.58655 9 6.98438 9ZM14.4844 4.5C14.4844 4.10218 14.3263 3.72064 14.045 3.43934C13.7637 3.15804 13.3822 3 12.9844 3C12.5866 3 12.205 3.15804 11.9237 3.43934C11.6424 3.72064 11.4844 4.10218 11.4844 4.5C11.4844 4.89782 11.6424 5.27936 11.9237 5.56066C12.205 5.84196 12.5866 6 12.9844 6C13.3822 6 13.7637 5.84196 14.045 5.56066C14.3263 5.27936 14.4844 4.89782 14.4844 4.5ZM18.9844 9C19.3822 9 19.7637 8.84196 20.045 8.56066C20.3263 8.27936 20.4844 7.89782 20.4844 7.5C20.4844 7.10218 20.3263 6.72064 20.045 6.43934C19.7637 6.15804 19.3822 6 18.9844 6C18.5865 6 18.205 6.15804 17.9237 6.43934C17.6424 6.72064 17.4844 7.10218 17.4844 7.5C17.4844 7.89782 17.6424 8.27936 17.9237 8.56066C18.205 8.84196 18.5865 9 18.9844 9Z" fill="white" />
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='font-semibold text-lg text-[#111827]'>
                                Full Customization
                            </div>
                            <div className='text-center text-[#4B5563]'>
                                Customize every ingredient to create your perfect sub exactly how you like it.
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 justify-center items-center w-[370px]'>
                        <div className='h-[64px] w-[64px] bg-[#007C3E] flex justify-center items-center rounded-full'>
                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3281 0C11.5438 0 11.7594 0.046875 11.9563 0.135938L20.7828 3.88125C21.8141 4.31719 22.5828 5.33438 22.5781 6.5625C22.5547 11.2125 20.6422 19.7203 12.5656 23.5875C11.7828 23.9625 10.8735 23.9625 10.0906 23.5875C2.01408 19.7203 0.101584 11.2125 0.0781463 6.5625C0.0734588 5.33438 0.842209 4.31719 1.87346 3.88125L10.7047 0.135938C10.8969 0.046875 11.1125 0 11.3281 0ZM11.3281 3.13125V20.85C17.7969 17.7188 19.536 10.7859 19.5781 6.62813L11.3281 3.13125Z" fill="white" />
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='font-semibold text-lg text-[#111827]'>
                                Allergen Info
                            </div>
                            <div className='text-center text-[#4B5563]'>
                                Complete allergen information and ingredient details for safe dining.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
