import React from 'react';
import { Container, 
  Wrapper,  
  Image, 
  Title, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  PriceContainer, 
  Price } from '../styles/Components.styles';
  
import owanbe from '../../assets/owanbe.png';
// import downarrow from '../../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

import { PackNav, PackItem } from '../constants';

const Owanbe = () => {
  return (
    <Container>
      <PackNav>
        <span>Select a template</span>
          <PackItem id="techbro" href="/">Tech Bro</PackItem>
          <PackItem id="workfromhome" href="/workfromhome">Work from home</PackItem>
          <PackItem id="gym" href="/gym">Gym</PackItem>
          <PackItem id="current" href="/owanbe">Owanbe</PackItem>
          <PackItem id="student" href="/student">Student</PackItem>
          <PackItem id="corporate" href="/corporatecasual">Corporate</PackItem>
          <PackItem id="partygoer" href="/partygoer">Party</PackItem>
          <PackItem id="rainingseason" href="/rainingseason">Raining</PackItem>
          <PackItem id="datenightspecial" href="/datenightspecial">Date Night</PackItem>
      </PackNav>
      <Wrapper>
        <Image src={owanbe} alt='image'/>
        <Title>OWANBE STARTER 
PACK</Title>
      </Wrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>2</Listing>
          <ListItem>Senator</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Loafers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Agbada</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Ankara shorts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Brogues</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Palms</ListItem>
        </ListWrap>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </Container>
  )
  }

export default Owanbe;
