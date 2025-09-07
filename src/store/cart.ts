import z from 'zod'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import OrderSchema from '@/schema/order'

export const useCartStore = create<{
    items: {
        item: z.infer<typeof OrderSchema>,
        qty: number,
        id: number,
    }[],
    addItem: (item: {
        item: z.infer<typeof OrderSchema>,
        qty: number,
        id: number,
    }) => void,
    removeItem: (id: number) => void
}>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item: {
                item: z.infer<typeof OrderSchema>,
                qty: number,
                id: number,
            }) => set({
                items: [...get().items, item],
            }),
            removeItem: (id: number) => set({
                items: get().items.filter(item => item.id !== id),
            })
        }),
        {
            name: 'subway-cart-storage',
        },
    ),
)
