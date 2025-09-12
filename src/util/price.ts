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
        const mealDealPrice = Data.subs.order.mealDeal?.find(mealDeal => mealDeal.name === item.item.mealDeal)?.price || 0;

        prices[item.id] = (itemPrice + typePrice + doubleCheesePrice + doubleMeatPrice + mealDealPrice) * item.qty;
    }

    const platters = useCartStore.getState().platters;

    for (const platter of platters) {
        const platterPrice = Data.platters.products.find(product => product.productName === platter.item.productName)?.price || 0;
        prices[platter.id] = platterPrice * platter.qty;
    }

    const sides = useCartStore.getState().sides;

    for (const side of sides) {
        const sidePrice = Data.sides.products.find(product => product.productName === side.item.productName)?.price || 0;
        prices[side.id] = sidePrice * side.qty;
    }

    const drinks = useCartStore.getState().drinks;

    for (const drink of drinks) {
        const drinkPrice = Data.drinks.products.find(product => product.productName === drink.item.productName)?.price || 0;
        prices[drink.id] = drinkPrice * drink.qty;
    }

    return prices;
}