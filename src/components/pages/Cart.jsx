import React from "react";
import CartItems from "../CartItem";
import { Footer } from "../constants";
import { Link } from "react-router-dom";

import {
  PackContainer,
  PackWrapper,
  CartItemsWrapper,
  CustomPacks,
  CartContainer,
  CustomTitle,
  CustomImage,
  CustomButton,
} from "../styles/Components.styles";
import custom from "../../assets/custom.png";
const CartPage = () => {
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
          <Link to='/Checkout'><CustomButton>CHECKOUT</CustomButton></Link>
        </PackContainer>
        <CustomPacks>
          <PackWrapper className="custom">Custom Packs</PackWrapper>
          <CustomTitle>Get custom made pack just for you</CustomTitle>
          <CustomImage src={custom} alt="custom" />
          <CustomButton>GET YOURS</CustomButton>
        </CustomPacks>
      </CartContainer>
      <Footer style={{ marginTop: "0px" }} />
    </div>
  );
};
export default CartPage;
