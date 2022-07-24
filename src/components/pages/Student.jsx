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

import { PackNavList, PackNavListMobile } from '../constants';


const Student = () => {
  return (
    <Container>
      <PackNavList type={"student"}/>
      <PackNavListMobile type={"student"} />
      <Wrapper>
        <Image sxm={{
          "@media screen and (max-width: 576px)": {marginLeft: "31%"
          }
        }}src={student} alt='image'/>
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
            <ScrollText style={{width: "15%"}}>Scroll for more<span style={{width: "0%"}}>
                <ScrollIcon src={downarrow} alt='downarrow' style={{marginTop: "26px"}}/></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </Container>
  )
  }

export default Student;
