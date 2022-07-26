import React from 'react';
import { Container, 
  Wrapper,  
  Image, 
  Title, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem} from '../styles/Components.styles';
  
import gym from '../../assets/gym.png';

import { PackNavList, PackNavListMobile, OrderContainer} from '../constants';

const Gym = () => {
  return (
    <Container>
      <PackNavList type={"gym"}/>
      <PackNavListMobile type={"gym"} />
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
      <OrderContainer />
    </Container>
  )
  }

export default Gym;
