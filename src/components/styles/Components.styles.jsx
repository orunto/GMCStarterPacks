import styled, { css } from "styled-components";
import { device } from "../config"; 

export const Container = styled.div`
flex: 1;

${device.small} {
  flex-direction: reverse;
}
`;
export const Wrapper = styled.div`
display: flex;
position: relative;
`;

export const Image = styled.img`
position: absolute;
margin-left: 32%;
margin-top: 0px;
min-height: 944px;
max-width: 924px;
${device.small} {
  max-width: 287px;
  min-height: 350.18px;
  margin-left: 20%;
  margin-top: 18px;
  z-index: 2;
}
${({sxm}) => sxm && css(sxm)}
`;

export const Title = styled.p`
font-family: rische;
font-weight: 700;
font-size: 100px;
margin: 0 0 0 100px;
width: 652px;
height: 240px;
z-index: 2;
${device.small} {
  // display: none;
  font-family: 'Rische';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
margin: 50px 0 22px 25px;
color: #000000;
width: 150px;
height: auto;

}
`;

export const OrderList = styled.div`
margin: 0 0 0 100px;
width: 380px;
height: 568px;
overflow: auto;
z-index: 2;
&:first-child{
  margin-top: 0;
}

${device.small} {
  width: auto;
height: 210px;
overflow: hidden;
margin: 0 0 0 30px;
z-index: 4;
&:first-child{
  margin-top: 0;
}
}
`;

export const ListWrap = styled.div`
display: flex;
font-family: 'Sora', sans-serif;
margin-top: 24px;
${device.small} {
margin-top: 10px;
}
`;

export const Listing = styled.div`
text-align:center;
display:flex;
align-items:center;
justify-content: center;
border: 1.5px solid #000000;
height: 50px;
width: 80px;
border-radius: 20px 0 20px 0;
font-size: 24px;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);

${device.small} {
  height: 25px;
width: 40px;
border-radius: 10px 0px;
font-size: 14px;
}
`;

export const ListItem = styled.div`
margin-left: 24px;
font-size: 24px;
margin-top: 10px;

${device.small} {
  font-size: 14px;
  margin-left: 12px;
  margin-top: 5px;
  z-index: 2;

}
`;

export const ScrollText = styled.div`
font-family: 'Montserrat', sans-serif;
position: absolute;
// width: 100%;
height: 60px;
left: 100px;
top: 943px;
align-items:center;
justify-content: center;
font-size: 18px;
display: flex;
margin-top: 20px;
cursor: pointer;

${device.small} {
  position: static;
  justify-content: normal;
  height: 32px;
  font-size: 12px;
  margin: 10px 0 7px 0;
}
`;

export const ScrollIcon = styled.img`
flex: 1;
margin: 5px 0 0 12px;
${device.small} {
  font-size: 12px;
}
`;

export const PriceContainer = styled.div`
background: #E28F1D;
width: 289px;
height: 58px;
margin-top: 56px;
margin-left: 141px;
border-radius: 35px;
cursor: pointer;
margin-bottom: 30px;
${device.small} {
  position: absolute;
  margin-top: 180px;
  margin-left: 12%;
  // margin-right: 78px;
}
`;

export const Price = styled.div`
font-family: Montserrat;
font-size: 18px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
align-items:center;
justify-content: center;
display: flex;
padding-top: 18px;
color: #FFFFFF;
cursor: pointer;
`;


// Footer

export const Socials = styled.div`
display: flex;
width: 256px;
height: 32px;
justify-content: space-between;
margin: 0 0 12px 85px;
&:hover {
  color: #E28F1D;
}
`;

export const SocialLink = styled.a`
background-color: rgba(255,255,255,0.2);
color: #FFFFFF;
height: 32px;
width: 32px;
text-align: center;
line-height: 40px;
border-radius: 50%;
color: #ffffff;
transition: all 0.5s ease;
  &:hover {
    color: #E28F1D;
  }
`;

export const FooterWrapper = styled.div`
background-color: #0B0D17;
// background-color: teal;
height: 420px;
margin-top: 30px;

`;
export const FooterContainer = styled.div`
display: flex;
lex-direction: column;
`;
export const FooterRow = styled.div`
display: flex;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 20px;
`;

export const FooterColumn = styled.div`
display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

`;
export const FooterHeadings = styled.p`
height: 28px;
width: 255px;
margin: 64px 0 24px 85px;
font-family: 'Sora', sans-serif;
font-size: 18px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: #F4F5F7;
cursor: pointer;

`;

export const Link = styled.a`
color: #fff;
text-decoration: none;
margin: 0 0 12px 85px;
font-family: 'Sora', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
&:hover {
  color: #E28F1D;
}
`;

export const Icon = styled.i`
// font-size: 18px;
// border: 5px solid red;
`;
export const FooterBreak = styled.hr`
color: red;
margin-top: 46px;
border: 0.5px solid #FFFFFF;
opacity: 0.1;
`;
export const LastSection = styled.div`
margin: 64px 47px 0 71px;
justify-content: space-between;
display: flex;
font-family: Sora;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
`;
export const FooterEnd = styled.div`
display: flex;
`;
export const LogoContainer = styled.div`
display: flex;
margin: 0!important;
`;
export const LogoTitle = styled.div`
// margin: 45px 0 0 50px;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
width: 209px;
height: 21px;
font-family: 'Montserrat', sans-serif;
`;
export const WhiteArm = styled.img`
// margin: 47px 0 0 0;
width: 25px;
height: 18px;
color: #FFFFFF;
`;
export const PartyImage = styled.img`
margin-top: -163px;
position: absolute;
margin-left: 32%;
min-height: 944px;
max-width: 924px;
${device.small} {
  max-width: 375px;
  min-height: 350.18px;
  margin-left: 20%;
  margin-top: 18px;
  z-index: 2;
}
${({sxm}) => sxm && css(sxm)}
`;
export const CorporateImage = styled.img`
position: absolute;
margin-left: 46%;
margin-top: 0px;
height: 950px;
max-width: 924px;
${device.small} {
  max-width: 375px;
  min-height: 350.18px;
  margin-left: 50%;
  margin-top: 18px;
  z-index: 2;
  height: 0px;
}
${({sxm}) => sxm && css(sxm)}

`;


// CartPage
export const CartContainer = styled.div`
display: flex;
font-family: 'Sora', sans-serif;
margin: 0;

`;

export const PackContainer = styled.div`
background: #F2F2F2;
width: 50%;
padding: 0 80px 0 80px;
margin: 0;
`;
export const PackWrapper = styled.div`
padding: 120px 0 50px 0px;
font-size: 24px;
font-weight: 600;
line-height: 30px;
letter-spacing: 0em;
color: #000000;
text-align: left;
`;

export const CartItemsWrapper = styled.div`
background: #FFFFFF;
border: 1px solid #000000;
width: 560px;
height: 150px;
border-radius: 5px;
margin-bottom: 30px;
`;
export const CustomPacks = styled.div`
background: #FFFFFF;
padding-left: 80px;

.custom {
  padding-bottom: 15px;
}
`;
export const CustomTitle = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 20px;
`;
export const CustomImage = styled.img`
padding: 50px 80px 30px 0;
`;
export const CustomButton = styled.button`
background: #E28F1D;
width: 560px;
height: 60px;
border-radius: 30px;
border: 1px solid #E28F1D;
cursor: pointer;
font-weight: 400;
font-size: 16px;
color: #FFFFFF;
margin: 0 0 92px 0;
`;

//CheckoutPage
export const CheckoutInfo = styled.div`
margin-top: 50px;

`;
export const Address = styled.div`
margin-bottom: 20px;
color: #000000;
font-weight: 600;
font-size: 16px;
line-height: 20px;
`;
export const FormContainer = styled.div`
}
`;
export const Register = styled.div`
margin-bottom: 30px;
border: 1px #737373;
border-radius: 5px;

`;
export const RegisterInput = styled.input`
width: 560px;
height: 40px;
padding-left: 15px;
font-family: 'Sora', sans-serif;
font-size: 16px;
line-height: 20px;
color: #B1B1B3;
`;
export const CardContainer = styled.div`
display: flex;
justify-content: space-between;
`;
export const CardInput = styled.input`
width: 150px;
height: 40px;
padding-left: 15px;
font-family: 'Sora', sans-serif;
font-size: 16px;
line-height: 20px;
color: #B1B1B3;
`;
export const Discount = styled.div`
display: flex;
color: #000000;
`;
export const Save = styled.div`
font-weight: 600;
font-size: 16px;
margin: 0 30px 30px 0;
`;
export const DiscountPrice = styled.div`
font-weight: 400;
font-size: 16px;
`;