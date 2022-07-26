import React from 'react';
import { Container, 
  Wrapper,  
  CorporateImage, 
  Title, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  // ScrollText,
  // ScrollIcon, 
  } from '../styles/Components.styles';
  
import corporate from '../../assets/corporate.png';

import { PackNavList, PackNavListMobile, OrderContainer } from '../constants';

const CorporateCasual = () => {
  return (
    <Container>
      <PackNavList type={"corporate"}/>
      <PackNavListMobile type={"corporate"} />
      <Wrapper>
        <CorporateImage sxm={{
          "@media screen and (max-width: 576px)": {marginTop: "2px", maxWidth: "280px"
          }
        }}
       src={corporate} alt='image'/>
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
        {/* <ScrollText>Scroll for more<span style={{width: "20px", marginTop: "18px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText> */}
      </OrderList>
      <OrderContainer />
    </Container>
  )
  }

export default CorporateCasual;
