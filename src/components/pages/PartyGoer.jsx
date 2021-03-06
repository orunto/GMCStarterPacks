import React from "react";

import {
    Container,
    Wrapper,
    Title,
    OrderList,
    ListWrap,
    Listing,
    ListItem,
    ScrollText,
    ScrollIcon,
    PartyImage,
} from "../styles/Components.styles";

import partygoer from "../../assets/partygoer.png";
import downarrow from "../../assets/downarrow.png";

import {
    PackNavList,
    PackNavListMobile,
    OrderContainer,
    Navbar,
    NavbarMobile,
    Carousel,
    Footer,
} from "../constants";
import { TechBroItems } from "../constants/TechBroItems";

const PartyGoer = () => {
    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <Container>
                <PackNavList type={"partygoer"} />
                <PackNavListMobile type={"partygoer"} />
                <Wrapper>
                    <PartyImage
                        sxm={{
                            "@media screen and (max-width: 576px)": {
                                marginTop: "-52px",
                                marginLeft: "32%",
                            },
                        }}
                        src={partygoer}
                        alt="image"
                    />
                    <Title>PARTY GOER</Title>
                </Wrapper>
                <OrderList>
                    <ListWrap>
                        <Listing style={{ marginTop: 0 }}>3</Listing>
                        <ListItem>Patterned Shirt</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>2</Listing>
                        <ListItem>Jean</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>1</Listing>
                        <ListItem>Denim Jackets</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>3</Listing>
                        <ListItem>Chinos</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>2</Listing>
                        <ListItem>Pants</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>2</Listing>
                        <ListItem>Aloha Shirts</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>2</Listing>
                        <ListItem>Sneakers</ListItem>
                    </ListWrap>
                    <ScrollText>
                        Scroll for more
                        <span style={{ width: "20px", marginTop: "18px" }}>
                            <ScrollIcon src={downarrow} alt="downarrow" />
                        </span>
                    </ScrollText>
                </OrderList>
                <OrderContainer id="partygoer" />
            </Container>
            <Carousel slides={TechBroItems} />
            <Footer />
        </div>
    );
};

export default PartyGoer;
