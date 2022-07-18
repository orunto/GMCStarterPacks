import React from 'react';
import { Container, 
  Wrapper,  
  Image, 
  Title, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  ScrollText,
  ScrollIcon, 
  PriceContainer, 
  Price } from '../styles/Components.styles';
  
import datenight from '../../assets/datenight.png';
import downarrow from '../../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

import {  PackNav, PackItem } from '../constants';

const DateNightSpecial = () => {
  return (
    <Container>
      <PackNav>
        <span>Select a template</span>
          <PackItem id="techbro" href="/">Tech Bro</PackItem>
          <PackItem id="workfromhome" href="/workfromhome">Work from home</PackItem>
          <PackItem id="gym" href="/gym">Gym</PackItem>
          <PackItem id="owanbe" href="/owanbe">Owanbe</PackItem>
          <PackItem id="student" href="/student">Student</PackItem>
          <PackItem id="corporate" href="/corporatecasual">Corporate</PackItem>
          <PackItem id="partygoer" href="/partygoer">Party</PackItem>
          <PackItem id="rainingseason" href="/rainingseason">Raining</PackItem>
          <PackItem id="current" href="/datenightspecial">Date Night</PackItem>
      </PackNav>
      <Wrapper>
        <Image src={datenight} alt='image'/>
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
        <ScrollText>Scroll for more<span style={{width: "20px", marginTop: "18px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </Container>
  )
  }

export default DateNightSpecial;
