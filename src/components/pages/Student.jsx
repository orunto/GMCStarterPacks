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
  
import student from '../../assets/student.png';
import downarrow from '../../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

import { PackNav, PackItem } from '../constants';


const Student = () => {
  return (
    <Container>
    <PackNav>
        <span>Select a template</span>
          <PackItem id="techbro" href="/">Tech Bro</PackItem>
          <PackItem id="workfromhome" href="/workfromhome">Work from home</PackItem>
          <PackItem id="gym" href="/gym">Gym</PackItem>
          <PackItem id="owanbe" href="/owanbe">Owanbe</PackItem>
          <PackItem id="current" href="/student">Student</PackItem>
          <PackItem id="corporate" href="/corporatecasual">Corporate</PackItem>
          <PackItem id="partygoer" href="/partygoer">Party</PackItem>
          <PackItem id="rainingseason" href="/rainingseason">Raining</PackItem>
          <PackItem id="datenightspecial" href="/datenightspecial">Date Night</PackItem>
      </PackNav>
      <Wrapper>
        <Image src={student} alt='image'/>
        <Title>STUDENT 
STARTER PACK</Title>
      </Wrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>3</Listing>
          <ListItem>T-Shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Jeans</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Pant trousers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Collared Shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Polo Shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Chinos</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Palm sandal</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Loafers</ListItem>
        </ListWrap>
        <ScrollText>Scroll for more<span><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </Container>
  )
  }

export default Student;
