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
  
import corporate from '../../assets/corporate.png';
import downarrow from '../../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

import { PackNav, PackItem } from '../constants';

const CorporateCasual = () => {
  return (
    <Container>
      <PackNav>
        <span>Select a template</span>
          <PackItem id="techbro" href="/">Tech Bro</PackItem>
          <PackItem id="workfromhome" href="/workfromhome">Work from home</PackItem>
          <PackItem id="gym" href="/gym">Gym</PackItem>
          <PackItem id="owanbe" href="/owanbe">Owanbe</PackItem>
          <PackItem id="student" href="/student">Student</PackItem>
          <PackItem id="current" href="/corporatecasual">Corporate</PackItem>
          <PackItem id="partygoer" href="/partygoer">Party</PackItem>
          <PackItem id="rainingseason" href="/rainingseason">Raining</PackItem>
          <PackItem id="datenightspecial" href="/datenightspecial">Date Night</PackItem>
      </PackNav>
      <Wrapper>
        <Image src={corporate} alt='image'/>
        <Title>CORPORATE
CASUAL</Title>
      </Wrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>2</Listing>
          <ListItem>Blazers Jacket</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Pant trousers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Turtle Neck</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Plain round neck shirt</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Loafers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>White sneakers</ListItem>
        </ListWrap>
        <ScrollText>Scroll for more<span style={{width: "20px", marginTop: "18px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </Container>
  )
  }

export default CorporateCasual;
