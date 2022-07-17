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
  
import gym from '../../assets/gym.png';
// import downarrow from '../../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

import { PackNav, PackItem } from '../constants';

const Gym = () => {
  return (
    <Container>
      <PackNav>
        <span>Select a template</span>
          <PackItem id="techbro" href="/">Tech Bro</PackItem>
          <PackItem id="workfromhome" href="/workfromhome">Work from home</PackItem>
          <PackItem id="current" href="/gym">Gym</PackItem>
          <PackItem id="owanbe" href="/owanbe">Owanbe</PackItem>
          <PackItem id="student" href="/student">Student</PackItem>
          <PackItem id="corporate" href="/corporatecasual">Corporate</PackItem>
          <PackItem id="partygoer" href="/partygoer">Party</PackItem>
          <PackItem id="rainingseason" href="/rainingseason">Raining</PackItem>
          <PackItem id="datenightspecial" href="/datenightspecial">Date Night</PackItem>
      </PackNav>
      <Wrapper>
        <Image src={gym} alt='image'/>
        <Title>GYM STARTER</Title>
      </Wrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>5</Listing>
          <ListItem>Racerbacks</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>4</Listing>
          <ListItem>Sleeveless T-Shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>4</Listing>
          <ListItem>Sweatshorts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Sweatpants</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Trainers</ListItem>
        </ListWrap>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </Container>
  )
  }

export default Gym;
