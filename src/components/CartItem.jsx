import React from "react";
import { useCart } from "../contexts/cart";

const products = {
    1: {
        name: "Product 1",
        image: "https://picsum.photos/200",
    },
};

const CartItems = () => {
    const { items } = useCart();
    return (
        <div>
            {items &&
                items.map((item) => {
                    const itemCount = 0;
                    return (
                        item &&
                        products[item.id] && (
                            <div>
                                {products[item.id].name} - {itemCount}
                            </div>
                        )
                    );
                })}
        </div>
    );
};

export default CartItems;
