import React from "react";
import { useCart } from "../contexts/cart";
import { CartItemsWrapper } from "./styles/Components.styles";

const starterPacks = {
    owanbe: {
        name: "Owanbe",
        price: 1700000,
    },
    datenight: {
        name: "Date Night Special",
        price: 1700000,
    },
    partygoer: {
        name: "Party Goer",
        price: "\u20A6170,000"
    },
    raining: {
        name: "Raining Season",
        price: "\u20A6170,000"
    },
    student: {
        name: "Student",
        price: "\u20A6170,000"
    },
    techbro: {
        name: "TechBro",
        price: "\u20A6170,000"
    },
    workfromhome: {
        name: "Work From Home",
        price: "\u20A6170,000"
    },
    corporate: {
        name: "Corporate Casual",
        price: "\u20A6170,000"
    },
    gym: {
        name: "Gym",
        price: "\u20A6170,000"
    }
};

const CartItems = () => {
    const { items, removeFromCart } = useCart();
    return (
        <div>
            {items &&
                items.map((item) => {
                    const count = 0;
                    const starterPack = item && starterPacks[item.id];
                    return (
                        starterPack && (
                          <CartItemsWrapper key={item.id}>
                                <div>
                                    Starter Pack: {starterPack.name} - {count}
                                </div>
                                <div>Price: {starterPack.price} </div>
                                <button onClick={removeFromCart.bind(this, item)}>Remove</button>
                            </CartItemsWrapper>
                        )
                    );
                })}
        </div>
    );
};

export default CartItems;
