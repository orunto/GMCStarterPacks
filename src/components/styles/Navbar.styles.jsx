import styled from "styled-components";
import { device } from "../config"; 

export const Container = styled.div`
margin: 0;
`;

export const  Wrapper = styled.div`
height: 88px;
display: flex;
justify-content: space-between;
font-family: 'Montserrat', sans-serif;
`;
export const LogoContainer = styled.div`
display: flex;
`;
export const LogoTitle = styled.div`
margin: 45px 0 0 50px;
font-size: 20px;
line-height: 24px;
color: #18191F;
width: 209px;
height: 21px;
`;

export const Arm = styled.img`
margin: 47px 0 0 0;
width: 25px;
height: 18px;
`;
export const Center = styled.div`
display: flex;
align-items: center;
margin-top: 22px;
`;
export const MenuItem = styled.div`
color: #18191F;
font-size: 18px;
`;
export const Product = styled.div`
display: flex;
`;
export const Arrow = styled.img`
width: 10px;
height: 5px;
margin: 8px 0 0 7px;
`;
export const IconsContainer = styled.div`
display: flex;
margin: 45px 50px;
`;
export const SearchIcon = styled.img`
color: #18191F;
width: 20px;
height: 20px;
`;
export const CartIcon = styled.img`
color: #18191F;
width: 22.24px;
height: 20px;
margin-left: 30px;
`;
export const PersonIcon = styled.img`
color: #18191F;
width: 23px;
height: 23px;
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