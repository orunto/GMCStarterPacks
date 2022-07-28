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
} from "../styles/Components.styles";

import owanbe from "../../assets/owanbe.png";

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

const Owanbe = () => {
    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <Container>
                <PackNavList type={"owanbe"} />
                <PackNavListMobile type={"owanbe"} />
                <Wrapper>
                    <Image
                        style={{ marginTop: "-80px" }}
                        src={owanbe}
                        alt="image"
                    />
                    <Title>OWAMBE STARTER</Title>
                </Wrapper>
                <OrderList>
                    <ListWrap>
                        <Listing style={{ marginTop: 0 }}>2</Listing>
                        <ListItem>Senator</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>1</Listing>
                        <ListItem>Loafers</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>1</Listing>
                        <ListItem>Agbada</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>2</Listing>
                        <ListItem>Ankara shorts</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>1</Listing>
                        <ListItem>Brogues</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>1</Listing>
                        <ListItem>Palms</ListItem>
                    </ListWrap>
                </OrderList>
                <OrderContainer id={1} />
            </Container>
            <Carousel slides={TechBroItems} />
            <Footer />
        </div>
    );
};

export default Owanbe;
