import React, { Component } from "react";

// import { Wrapper } from "../styles/Navbar.styles";
import {
    // Container, 
    Wrapper,
    LogoContainer,
    // LogoTitle, 
    Arm,
    Center,
    Product,
    MenuItem,
    Sub,
    ProductItem,
    Arrow,
    MenuIcon,
    Menu,
    IconsContainer,
    SearchIcon,
    CartIcon,
    PersonIcon,
    // NavbarText, 
    // NavText, 
    // NavTextIcon
}
    from '../styles/NavbarMobile.styles';

import chair1 from '../../assets/chair1.svg';
import arrow from '../../assets/arrow.png';
import search1 from '../../assets/search1.svg';
import cart1 from '../../assets/cart1.svg';
import person1 from '../../assets/person1.svg';
import menu from '../../assets/menu.svg'
// import cancel from '../../assets/cancel.png';


class NavbarMobile extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <Wrapper style={{ width: '100vw', height: '100%' }}>
                <LogoContainer>
                    {/* <LogoTitle>GENTLEMEN'S CRIB</LogoTitle> */}
                    <Arm src={chair1} alt='armchair' />
                </LogoContainer>
                {/* <Center>
                    <Product>
                        <MenuItem>Products</MenuItem>
                        <Arrow src={arrow} alt='arrow' />
                    </Product>
                    <MenuItem style={{marginLeft: "30px"}}>Company</MenuItem>
                    <MenuItem style={{marginLeft: "30px"}}>Support</MenuItem>
                    <MenuItem style={{marginLeft: "30px"}}>Reads</MenuItem>
                </Center> */}
                <IconsContainer>
                    <SearchIcon src={search1} alt='search' />
                    <CartIcon src={cart1} alt='cart' />
                    <PersonIcon src={person1} alt='person' />
                    <MenuIcon onClick={this.handleClick}>
                        {this.state.clicked ? (<i className='fas fa-times' style={{ width: '20px', height: "20px" }}></i>)
                            : (<Menu src={menu} />)
                        } </MenuIcon>

                    <Center $active={this.state.clicked}>
                        <Product>
                            <MenuItem>Products</MenuItem>
                            <Arrow src={arrow} alt='arrow' />
                            <Sub>
                                <ProductItem>Starter Packs</ProductItem>
                                <ProductItem>Community</ProductItem>
                                <ProductItem>Mobile App</ProductItem>
                            </Sub>
                            
                        </Product>
                        <MenuItem style={{ marginLeft: "30px", marginTop: "30px" }}>Company</MenuItem>
                        <MenuItem style={{ marginLeft: "30px" }}>Support</MenuItem>
                        <MenuItem style={{ marginLeft: "30px" }}>Reads</MenuItem>
                        <MenuItem style={{ marginLeft: "30px", color: "#E28F1D" }}>Visit Crib</MenuItem>
                    </Center>

                </IconsContainer>
            </Wrapper>

        )



    }
}
export default NavbarMobile;