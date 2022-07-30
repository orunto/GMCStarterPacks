import React, { createContext, useContext } from "react";
import { useStore } from "./store";

const CartItemsContext = createContext({ items: [], addToCart() {} });

export const useCart = () => useContext(CartItemsContext);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useStore("cart", []);

    const addToCart = (item) => {
        setItems((items) => {
            if (items) {
                items.push(item);
            }
            return items;
        });
    };

    const removeFromCart = (itemKey) => {
        setItems((items) => {
            return items.filter((item) => item.id !== itemKey);
        });
    };

    return (
        <CartItemsContext.Provider
            value={{ items, setItems, addToCart, removeFromCart }}
        >
            {children}
        </CartItemsContext.Provider>
    );
};
