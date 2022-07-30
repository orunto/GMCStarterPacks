import React from "react";

import {
    Container,
    Wrapper,
    Image,
    Title,
    OrderList,
    ListWrap,
    Listing,
    ListItem,
    ScrollText,
    ScrollIcon,
} from "../styles/Components.styles";

import downarrow from "../../assets/downarrow.png";

import {
    Navbar,
    NavbarMobile,
    Carousel,
    PackNavList,
    PackNavListMobile,
    OrderContainer,
    Footer,
} from "../constants";
import { TechBroItems } from "../constants/TechBroItems";

import "../css/Carousel.css";

const TechBro = () => {
    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <Container>
                <PackNavList type={"techbro"} />
                <PackNavListMobile type={"techbro"} />

                <Wrapper>
                    <Image src="https://i.imgur.com/h0i2vBY.png" alt="image" />
                    <Title>TECH BRO STARTER</Title>
                </Wrapper>
                <OrderList>
                    <ListWrap>
                        <Listing style={{ marginTop: "0" }}>2</Listing>
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
                    <ScrollText>
                        Scroll for more
                        <span style={{ width: "20px", marginTop: "18px" }}>
                            <ScrollIcon src={downarrow} alt="downarrow" />
                        </span>
                    </ScrollText>
                </OrderList>
                <OrderContainer id={8} />
            </Container>
            <Carousel slides={TechBroItems} />
            <Footer />
        </div>
    );
};

export default TechBro;
