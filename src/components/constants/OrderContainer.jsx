import React from "react";

import { useCart } from "../../contexts/cart";
import { PriceContainer, Price } from "../styles/Components.styles";

export const OrderContainer = ({ id }) => {
    const { addToCart } = useCart();
    const handleOrders = () => addToCart({ id });
    return (
        <PriceContainer>
            <Price onClick={handleOrders}>Order Pack for ₦170,000</Price>
        </PriceContainer>
    );
};
export default OrderContainer;
