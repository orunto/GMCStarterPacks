import React from "react";
import CartItems from "../CartItem";
import { Footer } from "../constants";

import {  
  PackContainer,
   PackWrapper
  } from "../styles/Components.styles";

const CartPage = () => {
  return (
    <>
      <PackContainer>
        <PackWrapper>Your Packs</PackWrapper>
        <CartItems/>
      </PackContainer>
      <Footer />
      </>
  )
 
};
export default CartPage;