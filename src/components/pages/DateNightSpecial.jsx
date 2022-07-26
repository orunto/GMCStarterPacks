import React from 'react';
import { Container, 
  Wrapper,  
  Image, 
  Title, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  // ScrollText,
  // ScrollIcon, 
} from '../styles/Components.styles';
  
import datenight from '../../assets/datenight.png';
// import downarrow from '../../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

import {  PackNavList, PackNavListMobile, OrderContainer } from '../constants';

const DateNightSpecial = () => {
  return (
    <Container>
      <PackNavList type={"datenightspecial"}/>
      <PackNavListMobile type={"datenightspecial"} />
      <Wrapper>
        <Image style={{marginLeft: "20%"}} src={datenight} alt='image'/>
        <Title>DATE NIGHT
SPECIAL</Title>
      </Wrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>3</Listing>
          <ListItem>Collared shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Blazers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Jeans</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Pants</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Accesories
(Wrist Watch)</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Loafers</ListItem>
        </ListWrap>
        {/* <ScrollText>Scroll for more<span style={{width: "20px", marginTop: "18px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText> */}
      </OrderList>
      <OrderContainer />
    </Container>
  )
  }

export default DateNightSpecial;
