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
  // PriceContainer
   } from '../styles/Components.styles';
  
// import techbro from '../../assets/techbro.png';
import downarrow from '../../assets/downarrow.png';

import { PackNavList, PackNavListMobile, OrderContainer} from '../constants';

import '../css/Carousel.css';

const TechBro = () => {
  return (  
    <Container>
      <PackNavList type={"techbro"}/>
      <PackNavListMobile type={"techbro"} />
      
      <Wrapper>
        <Image src="https://i.imgur.com/h0i2vBY.png" alt='image'/>
        <Title>TECH BRO STARTER</Title>
      </Wrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:"0"}}>2</Listing>
          <ListItem>Jean(s)</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Sweater/Cardigan</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Kakki pants</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Joggers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Jersey</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Plain tees</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Crocs</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Designer tees</ListItem>
        </ListWrap>
        <ScrollText>Scroll for more<span style={{width: "20px", marginTop: "18px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <OrderContainer />
        
    </Container>
  )
  }

export default TechBro;
