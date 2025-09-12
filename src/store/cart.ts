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
    sides: {
        item: {
            productName: string,
        },
        itemType: string,
        qty: number,
        id: number,
    }[],
    drinks: {
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
    addSide: (item: {
        item: {
            productName: string,
        },
        itemType: string,
        qty: number,
        id: number,
    }) => void,
    addDrink: (item: {
        item: {
            productName: string,
        },
        itemType: string,
        qty: number,
        id: number,
    }) => void,
    removeItem: (id: number) => void,
    removePlatter: (id: number) => void,
    removeSide: (id: number) => void,
    removeDrink: (id: number) => void,
    updateQty: (id: number, qty: number) => void,
    updatePlatterQty: (id: number, qty: number) => void,
    updateSideQty: (id: number, qty: number) => void,
    updateDrinkQty: (id: number, qty: number) => void,
    clear: () => void
}>()(
    persist(
        (set, get) => ({
            items: [],
            platters: [],
            sides: [],
            drinks: [],
            addItem: (item) => set({
                items: [...get().items, item],
            }),
            addPlatter: (item) => set({
                platters: [...get().platters, item],
            }),
            addSide: (item) => set({
                sides: [...get().sides, item],
            }),
            addDrink: (item) => set({
                drinks: [...get().drinks, item],
            }),
            removeItem: (id: number) => set({
                items: get().items.filter(item => item.id !== id),
            }),
            removePlatter: (id: number) => set({
                platters: get().platters.filter(item => item.id !== id),
            }),
            removeSide: (id: number) => set({
                sides: get().sides.filter(item => item.id !== id),
            }),
            removeDrink: (id: number) => set({
                drinks: get().drinks.filter(item => item.id !== id),
            }),
            updateQty: (id: number, qty: number) => set({
                items: get().items.map(item => item.id === id ? { ...item, qty } : item),
            }),
            updatePlatterQty: (id: number, qty: number) => set({
                platters: get().platters.map(item => item.id === id ? { ...item, qty } : item),
            }),
            updateSideQty: (id: number, qty: number) => set({
                sides: get().sides.map(item => item.id === id ? { ...item, qty } : item),
            }),
            updateDrinkQty: (id: number, qty: number) => set({
                drinks: get().drinks.map(item => item.id === id ? { ...item, qty } : item),
            }),
            clear: () => set({ items: [], platters: [] }),
        }),
        {
            name: 'subway-cart-storage',
        },
    ),
)
