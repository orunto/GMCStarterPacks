import React, { useState } from "react";
import CartItems from "../CartItem";
import { CartContainer, CartItemsWrapper, CustomPacks, CustomTitle, PackContainer, PackWrapper, CheckoutInfo, Address } from "../styles/Components.styles";

const CheckoutPage = () => {

    const [values, setValues] = useState({
        
    })
    return (
        <div>
            <CartContainer>
                <PackContainer>
                    <PackWrapper>Your Packs</PackWrapper>
                    <CartItemsWrapper>
                        <CartItems />
                    </CartItemsWrapper>
                    <CartItemsWrapper>
                        <CartItems />
                    </CartItemsWrapper>
                </PackContainer>
                <CustomPacks>
                    <PackWrapper className="custom">Checkout</PackWrapper>
                    <CustomTitle>Complete your purchase by providing your payment details</CustomTitle>
                    <CheckoutInfo>
                        <Address>Email Address</Address>
                    </CheckoutInfo>
                </CustomPacks>
                

            </CartContainer>
        </div>
    )
}
export default CheckoutPage;