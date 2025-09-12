import { z } from "zod";

export default z.object({
    productName: z.string(),
    type: z.enum(["6-inch", "Footlong", "Wrap", "Salad Box", "Jack Potato"]),
    bread: z.enum(["Hearty Italian", "Honey & Oat", "Italian Herbs & Cheese", "Italian White", "Wholegrain Bread", "Gluten-Free"]).optional(),
    cheese: z.enum(["Yes", "No"]),
    doubleCheese: z.enum(["Yes", "No"]).optional(),
    doubleMeat: z.enum(["Yes", "No"]),
    toasted: z.enum(["Yes", "No"]),
    salad: z.array(z.enum(["Lettuce", "Tomatoes", "Cucumber", "Pickles", "Peppers", "Olives", "Red Onions", "Jalapenos", "Sweetcorn"])),
    sauces: z.array(z.enum(["Sweet Chilli Sauce", "Chipotle Southwest Sauce (V)", "Sweet Onion (VE)", "Honey Mustard Dressing", "Ketchup (VE)", "HP Brown Sauce (VE)", "X-Spicy Chipotle Southwest Sauce (V)", "Garlic & Herb Sauce (VE)", "Teriyaki Sauce (VE)", "Lite Mayo", "BBQ Sauce"]))
        .max(2, "You can only choose up to 2 sauces"),
    mealDeal: z.enum(["Yes", "No"]),
    sides: z.enum(["Double Chocolate Cookie (Ve)", "Chocolate Chunk Cookie", "Rainbow Chocolate Chip Cookie", "White Chip Macadamia Nut Cookie",
        "3x Double Chocolate Cookies (Ve)", "3x Chocolate Chunk Cookies", "3x Rainbow Chocolate Chip Cookies", "3x White Chocolate Chip Macadamia Nut Cookies",
        "12 Cookies", "DORITOS® Chilli Heatwave", "DORITOS® Tangy Cheese", "Quavers Cheese", "Walkers Cheese & Onion",
        "Walkers Max Paprika", "Walkers Oven Baked Cheese & Onion", "Walkers Ready Salted", "Walkers Salt & Vinegar",
    ]).optional(),
    drinks: z.enum(['Coca-Cola Original 500ml', 'Coca-Cola Zero 500ml', 'Coca-Cola Zero Cherry 500ml', 'Coke Zero 1.25L', 'Costa Caramel Latte 250ml',
        'Costa Latte 250ml', 'Costa Brownie Frappe 250ml', 'Dr Pepper 500ml', 'Fanta Orange 1.25L', 'Fanta Orange 500ml', 'Oasis Summer Fruits 500ml',
        'Powerade Berry Tropical 500ml', 'Princes Gate Still Water 500ml', 'Robinsons Fruit Shoot Apple & Blackcurrent 200ml', 'Sprite Zero 500ml', 'Tropicana Orange Juice 250ml',
    ]).optional(),
}).superRefine(({ type, bread, cheese, doubleCheese, mealDeal, sides, drinks }, ctx) => {
    if (!bread && ["6-inch", "Footlong"].includes(type)) {
        ctx.addIssue({
            code: "custom",
            message: "You must choose bread",
            path: ["bread"],
        });
    }

    if (!doubleCheese && cheese === "Yes") {
        ctx.addIssue({
            code: "custom",
            message: "You must choose double cheese if you choose cheese",
            path: ["doubleCheese"],
        });
    }

    if (!sides && mealDeal === "Yes") {
        ctx.addIssue({
            code: "custom",
            message: "You must choose sides if you choose meal deal",
            path: ["sides"],
        });
    }

    if (!drinks && mealDeal === "Yes") {
        ctx.addIssue({
            code: "custom",
            message: "You must choose drinks if you choose meal deal",
            path: ["drinks"],
        });
    }
});
