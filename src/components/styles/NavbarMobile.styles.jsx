import styled from "styled-components";
import { device } from "../config"; 

export const Container = styled.div`
margin: 0;
`;

export const  Wrapper = styled.div`
// height: 88px;
display: flex;
justify-content: space-between;
font-family: 'Montserrat', sans-serif;
width: 100vw;
height: 100%;


${device.small} {
    // position: relative;
}
`;
export const LogoContainer = styled.div`
display: flex;
width: 100%;
`;
// export const LogoTitle = styled.div`
// margin: 45px 0 0 50px;
// font-size: 20px;
// line-height: 24px;
// color: #18191F;
// width: 11.56rem;
// height: 21px;
// ${device.small} {
//   font-size: 18px;
//   font-weight: 1000;
//   margin: 24px 0 0 24px;
//   // width: 130px;
//   // height: 35px;
// }
// `;

export const Arm = styled.img`
margin: 47px 0 0 50px;
width: 25px;
height: 18px;
${device.small} {
  width: 26.67px;
  height: 20px;
  // margin: 23px 0 0 30px;
  position: absolute;
  transform: translate(25%, 20%);
  z-index: 6;
  // opacity: 0.8;
}
`;
export const Center = styled.div`
display: flex;
align-items: center;
margin-top: 45px;

${device.small} {
    transition: all 0.5s ease;
    opacity: 1;
    width: 100vw;
    top: -45px;
    height: 450px;
    position: absolute;
    left: 0;
    background-color: teal;
    z-index: 5;
    display: flex;
    align-items: end;
    padding: 82px 23px 0 0;
    line-height: 22px;
    letter-spacing: 0em;


    
    flex-direction: column;
    flex-direction: ${({$active}) => $active && 'column'}
}
`;
export const MenuItem = styled.div`
color: #18191F;
font-size: 18px;

&:hover {
  color: #E28F1D;
    transition: all 0.5s ease-out;
}
${device.small} {
  justify-content: end;
  padding-bottom: 30px;
}
`;
export const Product = styled.div`
width: 40px;
height: 40px;
display: flex;
${device.small} {
  width: auto;
  margin-bottom: 5px;
}
`;

export const Sub = styled.div`
display: block;
`;
export const ProductItem = styled.div`
font-size: 14px;
// // flex-direction: column;

`;
export const Arrow = styled.img`
width: 10px;
height: 5px;
margin: 8px 0 0 7px;
`;
export const IconsContainer = styled.div`
display: flex;
margin: 45px 50px;

${device.small} {
    margin: 30px 0px 50px 45px;
    align-items: center;
}
.Center {
    transition: all 0.5s ease;
    margin: 0;
    padding: 0;
    // display: none;
    width: 100%;
    height: 450px;
    position: absolute;
    flex-direction: column;

}
.active {

}
`;
export const SearchIcon = styled.img`
color: ##0B0D17;
width: 20px;
height: 20px;
`;
export const CartIcon = styled.img`
color: ##0B0D17;
width: 20px;
height: 20px;
margin-left: 30px;
`;
export const PersonIcon = styled.img`
color: ##0B0D17;
width: 20px;
height: 20px;
margin-left: 30px;
`;
export const NavbarText = styled.div`
background-color: #0B0D17;
height: 50%;
display: flex;
justify-content: center;
width: 100vw;
${device.small} {
    flex-direction: row;
   
    align-items: start;
    // width: 375px;
    height: 70px;


  }
`;
export const NavText = styled.div`
color: #FFFFFF;
font-family: 'Sora', sans-serif;
padding: 14px 0 13px 0;
font-size: 18px;
dth: 100vw;
${device.small} {
  font-size: 14px;
  height: 36px;
width: 315px;
left: 30px;
top: 187px;
font-weight: 400;


}
`;
export const NavTextIcon = styled.img`
justify-content: end;
width: 14px;
height: 14px;
margin: 15px 50px 0 0;
position: absolute;
right: 0;

${device.small} {
  margin-left: 10px;
  margin-right: 30px;
  margin-top: 25px;
}

`; 

export const MenuIcon = styled.div`
justify-content: flex-end;
margin-left: 30px;
z-index: 6;
margin-right: 16px;
// display: none;
.fa-bars {
  font-size: 35px;
  opacity: 0.8;
    }
.fa-times {
  font-size: 35px;
  opacity: 0.8;
}

`;
export const Menu = styled.img`
width: 26px;
height: 30px;
`;