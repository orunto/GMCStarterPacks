import React, { useState } from "react";
import CartItems from "../CartItem";
import { Footer } from "../constants";
import {
  CartContainer,
  CartItemsWrapper,
  CustomPacks,
  CustomTitle,
  PackContainer,
  PackWrapper,
  CheckoutInfo,
  Address,
  CardContainer,
  RegisterInput,
  Register,
  CardInput,
  FormContainer,
  Discount,
  DiscountPrice,
  Save,
  CustomButton
} from "../styles/Components.styles";

const CheckoutPage = () => {
  const [values, setValues] = useState({
    email: "",
    phoneNumber: "",
    billingAddress: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    zipCode: "",
    promoCode: "",
  });

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handlePhoneNumberInputChange = (event) => {
    setValues({ ...values, phoneNumber: event.target.value });
  };
  const handleBillingAddressInputChange = (event) => {
    setValues({ ...values, billingAddress: event.target.value });
  };
  const handleCardNumberInputChange = (event) => {
    setValues({ ...values, cardNumber: event.target.value });
  };
  const handleExpiryDatenputChange = (event) => {
    setValues({ ...values, expiryDate: event.target.value });
  };
  const handleCvvInputChange = (event) => {
    setValues({ ...values, cvv: event.target.value });
  };
  const handleZipCodeInputChange = (event) => {
    setValues({ ...values, zipCode: event.target.value });
  };
  const handlePromoCodeInputChange = (event) => {
    setValues({...values, promoCode: event.target.value});
  };

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
          <CustomTitle>
            Complete your purchase by providing your payment details
          </CustomTitle>
          <CheckoutInfo>
            <Address>Email Address</Address>
            <Register>
              <RegisterInput
                onChange={handleEmailInputChange}
                value={values.emailAddress}
                className="form-field"
                placeholder="johndoe@example.com"
                name="emailAddress"
              />
            </Register>
            <Address>Phone Number</Address>
            <Register>
              <RegisterInput
                onChange={handlePhoneNumberInputChange}
                value={values.phoneNumber}
                className="form-field"
                placeholder="+234 - 000 - 000 - 0000"
                name="phoneNumber"
              />
            </Register>
            <Address>Billing Address</Address>
            <Register>
              <RegisterInput
                onChange={handleBillingAddressInputChange}
                value={values.billingAddress}
                // className='form-field'
                placeholder="No 1, Example Street, Test Town"
                name="billingAddress"
              />
            </Register>
            <Address>Card Number</Address>
            <Register>
              <RegisterInput
                onChange={handleCardNumberInputChange}
                value={values.cardNumber}
                className="form-field"
                placeholder="0000 - 0000 - 0000 - 0000"
                name="cardNumber"
              />
            </Register>
            <CardContainer>
                <FormContainer>
              <Address>Expiry Date</Address>
              <Register>
                <CardInput
                  onChange={handleExpiryDatenputChange}
                  value={values.expiryDate}
                  className="form-field"
                  placeholder="MM / YY"
                  name="expiryDate"
                />
              </Register>
              </FormContainer>
              <FormContainer>
              <Address>CVV</Address>
              <Register>
                <CardInput
                  onChange={handleCvvInputChange}
                  value={values.cvv}
                  className="form-field"
                  placeholder="000"
                  name="cvv"
                />
              </Register>
              </FormContainer>
              <FormContainer>
              <Address>Zip Code</Address>
              <Register>
                <CardInput
                  onChange={handleZipCodeInputChange}
                  value={values.zipCode}
                  className="form-field"
                  placeholder="0000"
                  name="zipCode"
                />
              </Register>
              </FormContainer>
            </CardContainer>
            <Address>Promo Code</Address>
            <Register>
              <RegisterInput
                onChange={handlePromoCodeInputChange}
                value={values.promoCode}
                className="form-field"
                placeholder="PROMO CODE"
                name="promoCode"
              />
            </Register>
            <Discount>
                <Save>SAVE 0%</Save>
                <DiscountPrice>- ₦0.00</DiscountPrice>
            </Discount>
          </CheckoutInfo>
          <CustomButton>Pay ₦510,000</CustomButton>
        </CustomPacks>
      </CartContainer>
      <Footer/>
    </div>
  );
};
export default CheckoutPage;
