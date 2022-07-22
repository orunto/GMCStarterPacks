import React, { useState} from "react";

import {Container, 
    Wrapper, 
    LogoContainer, 
    LogoTitle, 
    Arm, 
    Center, 
    Product, 
    MenuItem, 
    Arrow, 
    IconsContainer, 
    SearchIcon, 
    CartIcon, 
    PersonIcon, 
    NavbarText, 
    NavText, 
    NavTextIcon} from '../styles/Navbar.styles';

import armchair from '../../assets/armchair.png';
import arrowUp from '../../assets/arrowUp.svg';
import search1 from '../../assets/search1.svg';
import cart1 from '../../assets/cart1.svg';
import person1 from '../../assets/person1.svg';
import cancel from '../../assets/cancel.png';



export const Navbar = () => {

    const[isNavOpen, setNav] = useState(true);

    const closeNav = () => {
        setNav(!isNavOpen);
    }



    return (
        <Container>
            <span className="desktop">
            <Wrapper >
                <LogoContainer>
                    <LogoTitle>GENTLEMEN'S CRIB</LogoTitle>
                    <Arm src={armchair} alt='armchair' />
                </LogoContainer>
                <Center>
                    <Product>
                        <MenuItem>Products</MenuItem>
                        <Arrow src={arrowUp} alt='arrow' />
                    </Product>
                    <MenuItem style={{marginLeft: "30px"}}>Company</MenuItem>
                    <MenuItem style={{marginLeft: "30px"}}>Support</MenuItem>
                    <MenuItem style={{marginLeft: "30px"}}>Reads</MenuItem>
                </Center>
                <IconsContainer>
                    <SearchIcon src={search1} alt='search' style={{color: 'red'}}/>
                    <CartIcon src={cart1} alt='cart' />
                    <PersonIcon src={person1} alt='person' />
                </IconsContainer>
            </Wrapper>
            {
                isNavOpen &&
                <NavbarText>
                    <NavText>These are template packs, we will create packs to be suited specially for you.</NavText>
                    <NavTextIcon onClick={closeNav} src={cancel} alt='cancel'/>
                </NavbarText>
            }         
         </span>

        </Container>

    )
}
export default Navbar;