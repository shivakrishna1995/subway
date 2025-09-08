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
    removeItem: (id: number) => void,
    updateQty: (id: number, qty: number) => void,
    clear: () => void
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
            }),
            updateQty: (id: number, qty: number) => set({
                items: get().items.map(item => item.id === id ? { ...item, qty } : item),
            }),
            clear: () => set({ items: [] }),
        }),
        {
            name: 'subway-cart-storage',
        },
    ),
)
