import React from "react";

import { Container, 
    Wrapper, 
    Image,
    Title,
    OrderList,
    ListWrap,
    Listing,
    ListItem,
    ScrollText,
    ScrollIcon
} from "../styles/Components.styles";

import workfromhome from '../../assets/workfromhome .png';
import downarrow from '../../assets/downarrow.png';

import {  PackNavList, 
    PackNavListMobile,
    OrderContainer } from '../constants';

const WorkFromHome = () => {
    return (
    <Container>
        <PackNavList type={"workfromhome"}/>
        <PackNavListMobile type={"workfromhome"} />
        <Wrapper>
            <Image src={workfromhome} alt='image' />
            <Title>WORK FROM HOME</Title>
        </Wrapper>
        <OrderList>
            <ListWrap>
                <Listing style={{ marginTop: 0 }}>2</Listing>
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
            <ScrollText style={{width: "15%"}}>Scroll for more<span style={{width: "0%"}}>
                <ScrollIcon src={downarrow} alt='downarrow' style={{marginTop: "26px"}}/></span></ScrollText>
        </OrderList>
        <OrderContainer />
    </Container>
    
    )
}

export default WorkFromHome;
