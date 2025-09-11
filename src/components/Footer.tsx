import { useRouter } from "@tanstack/react-router";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="bg-[#111827] p-[48px_80px]">
            <div className="container mx-auto flex gap-8 flex-wrap">
                <div className="flex flex-col gap-4 w-[288px]">
                    <div className="bg-white p-[14px_13px] rounded-sm w-fit">
                        <img src="/logo.png" alt="logo" width={85} height={16} />
                    </div>
                    <div className="text-sm text-[#9CA3AF]">
                        Fresh ingredients, made-to-order subs, delivered fast.
                    </div>
                </div>
                <div className="flex flex-col w-[288px] gap-4">
                    <div className="text-white font-semibold">
                        Quick Links
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-[#9CA3AF] cursor-pointer hover:text-white" onClick={() => router.navigate({ to: '/$locationId', params: { locationId: 'gallaghar-retail-park' } })}>
                            Menu - Gallaghar Retail Park
                        </div>
                        <div className="text-sm text-[#9CA3AF] cursor-pointer hover:text-white" onClick={() => router.navigate({ to: '/$locationId', params: { locationId: 'jewellery-quarter' } })}>
                            Menu - Jewellery Quarter
                        </div>
                        <div className="text-sm text-[#9CA3AF] cursor-pointer hover:text-white" onClick={() => router.navigate({ to: '/$locationId', params: { locationId: 'broadway-plaza' } })}>
                            Menu - Broadway Plaza
                        </div>
                        <div className="text-sm text-[#9CA3AF] cursor-pointer hover:text-white" onClick={() => router.navigate({ to: '/$locationId', params: { locationId: 'west-orchards' } })}>
                            Menu - West Orchards
                        </div>
                        <div className="text-sm text-[#9CA3AF] cursor-pointer hover:text-white" onClick={() => window.open("https://www.subway.com/en-gb/menunutrition/nutrition", "_self")}>
                            Allergens & Nutrition
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[288px] gap-4">
                    <div className="text-white font-semibold">
                        Support
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-[#9CA3AF] cursor-pointer hover:text-white" onClick={() => window.open("https://subway.service-now.com/guest_csp?lang=en&country=GB", "_self")}>
                            Help Center
                        </div>
                        <div className="text-sm text-[#9CA3AF] cursor-pointer hover:text-white" onClick={() => window.open("https://subway.service-now.com/guest_csp?lang=en&country=GB", "_self")}>
                            Contact Us
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[288px] gap-4">
                    <div className="text-white font-semibold">
                        Connect
                    </div>
                    <div className="flex gap-4 items-center">
                        <div onClick={() => window.open("https://www.facebook.com/SubwayUK/", "_self")} className="cursor-pointer">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_31_665)">
                                    <path d="M19.6875 10.5C19.6875 5.14844 15.3516 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.14844 0.3125 10.5C0.3125 15.3352 3.85508 19.343 8.48633 20.0703V13.3004H6.02539V10.5H8.48633V8.36562C8.48633 5.93789 9.93164 4.59687 12.1453 4.59687C13.2055 4.59687 14.3141 4.78594 14.3141 4.78594V7.16875H13.0922C11.8891 7.16875 11.5137 7.91562 11.5137 8.68164V10.5H14.2004L13.7707 13.3004H11.5137V20.0703C16.1449 19.343 19.6875 15.3352 19.6875 10.5Z" fill="#9CA3AF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_31_665">
                                        <path d="M0 0.5H20V20.5H0V0.5Z" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div onClick={() => window.open("https://www.instagram.com/subway_ukireland/?hl=en", "_self")} className="cursor-pointer">
                            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_31_671)">
                                    <path d="M8.75391 6.00781C6.26953 6.00781 4.26562 8.01172 4.26562 10.4961C4.26562 12.9805 6.26953 14.9844 8.75391 14.9844C11.2383 14.9844 13.2422 12.9805 13.2422 10.4961C13.2422 8.01172 11.2383 6.00781 8.75391 6.00781ZM8.75391 13.4141C7.14844 13.4141 5.83594 12.1055 5.83594 10.4961C5.83594 8.88672 7.14453 7.57812 8.75391 7.57812C10.3633 7.57812 11.6719 8.88672 11.6719 10.4961C11.6719 12.1055 10.3594 13.4141 8.75391 13.4141ZM14.4727 5.82422C14.4727 6.40625 14.0039 6.87109 13.4258 6.87109C12.8438 6.87109 12.3789 6.40234 12.3789 5.82422C12.3789 5.24609 12.8477 4.77734 13.4258 4.77734C14.0039 4.77734 14.4727 5.24609 14.4727 5.82422ZM17.4453 6.88672C17.3789 5.48438 17.0586 4.24219 16.0312 3.21875C15.0078 2.19531 13.7656 1.875 12.3633 1.80469C10.918 1.72266 6.58594 1.72266 5.14062 1.80469C3.74219 1.87109 2.5 2.19141 1.47266 3.21484C0.445313 4.23828 0.128906 5.48047 0.0585937 6.88281C-0.0234375 8.32812 -0.0234375 12.6602 0.0585937 14.1055C0.125 15.5078 0.445313 16.75 1.47266 17.7734C2.5 18.7969 3.73828 19.1172 5.14062 19.1875C6.58594 19.2695 10.918 19.2695 12.3633 19.1875C13.7656 19.1211 15.0078 18.8008 16.0312 17.7734C17.0547 16.75 17.375 15.5078 17.4453 14.1055C17.5273 12.6602 17.5273 8.33203 17.4453 6.88672ZM15.5781 15.6562C15.2734 16.4219 14.6836 17.0117 13.9141 17.3203C12.7617 17.7773 10.0273 17.6719 8.75391 17.6719C7.48047 17.6719 4.74219 17.7734 3.59375 17.3203C2.82812 17.0156 2.23828 16.4258 1.92969 15.6562C1.47266 14.5039 1.57813 11.7695 1.57813 10.4961C1.57813 9.22266 1.47656 6.48438 1.92969 5.33594C2.23438 4.57031 2.82422 3.98047 3.59375 3.67187C4.74609 3.21484 7.48047 3.32031 8.75391 3.32031C10.0273 3.32031 12.7656 3.21875 13.9141 3.67187C14.6797 3.97656 15.2695 4.56641 15.5781 5.33594C16.0352 6.48828 15.9297 9.22266 15.9297 10.4961C15.9297 11.7695 16.0352 14.5078 15.5781 15.6562Z" fill="#9CA3AF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_31_671">
                                        <path d="M0 0.5H17.5V20.5H0V0.5Z" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div onClick={() => window.open("https://www.youtube.com/user/subwayukireland", "_self")} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
                                <path d="M6.98259 3H17.0174C19.2168 3 21 4.78316 21 6.98259V17.0174C21 19.2168 19.2168 21 17.0174 21H6.98259C4.78315 21 3 19.2168 3 17.0174V6.98259C3.00054 4.78316 4.78315 3 6.98259 3Z" fill="#0A0B09" />
                                <path d="M18.354 8.78714C18.2451 8.3671 17.8975 7.80598 17.1813 7.60696C16.2425 7.36609 13.8537 7.35322 11.9997 7.328C11.0728 7.34088 10.0122 7.35 9.06591 7.38648C8.11961 7.42295 7.28758 7.48626 6.81819 7.60696C6.10203 7.80598 5.75495 8.3671 5.64551 8.78714C5.4599 9.39279 5.36816 11.0145 5.36816 11.9999C5.36816 12.9854 5.4599 14.6076 5.64551 15.2127C5.75441 15.6328 6.10203 16.1939 6.81819 16.3929C7.75697 16.6338 10.1458 16.6467 11.9997 16.6719C12.9267 16.659 13.9873 16.6499 14.9336 16.6134C15.8799 16.5769 16.7119 16.5136 17.1813 16.3929C17.8969 16.1939 18.2445 15.6333 18.354 15.2127C18.5391 14.6071 18.6313 12.9854 18.6313 11.9999C18.6313 11.0145 18.5391 9.39226 18.354 8.78714ZM10.6436 13.9719V10.0279L14.1101 11.9999L10.6436 13.9719Z" fill="#9CA3AF" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
