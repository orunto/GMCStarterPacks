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

import raining from "../../assets/raining.png";
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

const RainingSeason = () => {
    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <Container>
                <PackNavList type={"rainingseason"} />
                <PackNavListMobile type={"rainingseason"} />
                <Wrapper>
                    <Image
                        sxm={{
                            "@media screen and (max-width: 576px)": {
                                marginTop: "26px",
                            },
                        }}
                        src={raining}
                        alt="image"
                    />
                    <Title>RAINING SEASON</Title>
                </Wrapper>
                <OrderList>
                    <ListWrap>
                        <Listing style={{ marginTop: 0 }}>3</Listing>
                        <ListItem>Dark coloured shirts</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>2</Listing>
                        <ListItem>Black jeans</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>1</Listing>
                        <ListItem>Grey Pants</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>2</Listing>
                        <ListItem>Hoodies</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>1</Listing>
                        <ListItem>Leather Jacket</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>1</Listing>
                        <ListItem>Denim Jacket</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing>2</Listing>
                        <ListItem>Turtle Neck</ListItem>
                    </ListWrap>
                    <ListWrap>
                        <Listing></Listing>
                        <ListItem></ListItem>
                    </ListWrap>
                    <ScrollText>
                        Scroll for more
                        <span style={{ width: "20px", marginTop: "18px" }}>
                            <ScrollIcon src={downarrow} alt="downarrow" />
                        </span>
                    </ScrollText>
                </OrderList>
                <OrderContainer id={1} />
            </Container>
            <Carousel slides={TechBroItems} />
            <Footer />
        </div>
    );
};

export default RainingSeason;
