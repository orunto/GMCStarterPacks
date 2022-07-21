import styled from "styled-components";
import { device } from "../config"; 

export const Container = styled.div`
flex: 1;
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
  display: none;
}
`;

export const OrderList = styled.div`
// display: flex;
margin: 0 0 0 100px;
width: 380px;
height: 568px;
overflow: auto;
z-index: 2;
&:first-child{
  margin-top: 0;
}
`;

export const ListWrap = styled.div`
display: flex;
font-family: 'Sora', sans-serif;
margin-top: 24px;
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
`;

export const ListItem = styled.div`
margin-left: 24px;
font-size: 24px;
margin-top: 10px;
`;

export const ScrollText = styled.div`
font-family: 'Montserrat', sans-serif;
position: absolute;
width: 370px;
height: 60px;
left: 100px;
top: 943px;
align-items:center;
justify-content: center;
font-size: 18px;
display: flex;
cursor: pointer;
`;

export const ScrollIcon = styled.img`
flex: 1;
margin: 5px 0 0 12px;
`;

export const PriceContainer = styled.div`
background: #E28F1D;
width: 289px;
height: 58px;
position: absolute;
margin-top: 56px;
margin-left: 141px;
border-radius: 35px;
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
margin-top: 135px;

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


// NavBar