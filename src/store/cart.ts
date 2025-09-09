import z from 'zod'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import OrderSchema from '@/schema/order'

export const useCartStore = create<{
    items: {
        item: z.infer<typeof OrderSchema>,
        itemType: string,
        qty: number,
        id: number,
    }[],
    platters: {
        item: {
            productName: string,
        },
        itemType: string,
        qty: number,
        id: number,
    }[],
    addItem: (item: {
        item: z.infer<typeof OrderSchema>,
        itemType: string,
        qty: number,
        id: number,
    }) => void,
    addPlatter: (item: {
        item: {
            productName: string,
        },
        itemType: string,
        qty: number,
        id: number,
    }) => void,
    removeItem: (id: number) => void,
    removePlatter: (id: number) => void,
    updateQty: (id: number, qty: number) => void,
    updatePlatterQty: (id: number, qty: number) => void,
    clear: () => void
}>()(
    persist(
        (set, get) => ({
            items: [],
            platters: [],
            addItem: (item: {
                item: z.infer<typeof OrderSchema>,
                itemType: string,
                qty: number,
                id: number,
            }) => set({
                items: [...get().items, item],
            }),
            addPlatter: (item: {
                item: {
                    productName: string,
                },
                itemType: string,
                qty: number,
                id: number,
            }) => set({
                platters: [...get().platters, item],
            }),
            removeItem: (id: number) => set({
                items: get().items.filter(item => item.id !== id),
            }),
            removePlatter: (id: number) => set({
                platters: get().platters.filter(item => item.id !== id),
            }),
            updateQty: (id: number, qty: number) => set({
                items: get().items.map(item => item.id === id ? { ...item, qty } : item),
            }),
            updatePlatterQty: (id: number, qty: number) => set({
                platters: get().platters.map(item => item.id === id ? { ...item, qty } : item),
            }),
            clear: () => set({ items: [] }),
        }),
        {
            name: 'subway-cart-storage',
        },
    ),
)
