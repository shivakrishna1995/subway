import { useCartStore } from "@/store/cart";
import Data from "@/dataV2.json";

export const getCartPrices = () => {
    const prices: { [key: string]: number } = {};
    const items = useCartStore.getState().items;

    for (const item of items) {
        const itemPrice = Data.subs.products.find(product => product.productName === item.item.productName)?.price || 0;
        const typePrice = Data.subs.order.types.find(type => type.name === item.item.type)?.price || 0;
        const doubleCheesePrice = Data.subs.order.doubleCheese?.[item.item.type === "Footlong" ? "footlong" : "others"]?.find(doubleCheese => doubleCheese.name === item.item.doubleCheese)?.price || 0;
        const doubleMeatPrice = Data.subs.order.doubleMeat?.[item.item.type === "Footlong" ? "footlong" : "others"]?.find(doubleMeat => doubleMeat.name === item.item.doubleMeat)?.price || 0;
        let sidesPrice = 0;
        if (item.item.sides) {
            for (const side of item.item.sides) {
                sidesPrice += Data.subs.order.sides.find(sides => sides.name === side)?.price || 0;
            }
        }
        let drinksPrice = 0;
        if (item.item.drinks) {
            for (const drink of item.item.drinks) {
                drinksPrice += Data.subs.order.drinks.find(drinks => drinks.name === drink)?.price || 0;
            }
        }

        prices[item.id] = (itemPrice + typePrice + doubleCheesePrice + doubleMeatPrice + sidesPrice + drinksPrice) * item.qty;
    }
}