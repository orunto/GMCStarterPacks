import React, { Component } from "react";

import {
  Container,
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
  NavbarText,
  NavText,
  NavTextIcon,
} from "../styles/NavbarMobile.styles";

import chair1 from "../../assets/chair1.svg";
import search1 from "../../assets/search1.svg";
import cart1 from "../../assets/cart1.svg";
import person1 from "../../assets/person1.svg";
import menu from "../../assets/menu.svg";
import arrowUp from "../../assets/arrowUp.svg";
import cancel from "../../assets/cancel.png";

class NavbarMobile extends Component {
  state = {
    clicked: false,
    onProduct: false,
    isNavOpen: true,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleOnProduct = () => {
    this.setState({ onProduct: !this.state.onProduct });
  };

  handleNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };
  // const[isNavOpen, setNav] = useState(true);

  // const closeNav = () => {
  //     setNav(!isNavOpen);
  // }

  render() {
    return (
      <Container>
        <span className="mobile">
          <Wrapper id="mobile" style={{ width: "100vw", height: "100%" }}>
            <LogoContainer>
              <Arm src={chair1} alt="armchair" />
            </LogoContainer>
            <IconsContainer>
              <SearchIcon src={search1} alt="search" />
              <CartIcon src={cart1} alt="cart" />
              <PersonIcon src={person1} alt="person" />
              <MenuIcon onClick={this.handleClick}>
                {this.state.clicked ? (
                  <Menu src={menu} style={{ width: "20px", height: "20px" }} />
                ) : (
                  <Menu src={menu} />
                )}{" "}
              </MenuIcon>

              <Center $active={this.state.clicked}>
                <Product>
                  <MenuItem onClick={this.handleOnProduct}>
                    Products {this.state.clicked || <Arrow />}
                    <Arrow src={arrowUp} alt="arrow" />
                  </MenuItem>
                  {this.state.onProduct && (
                    <Sub>
                      <ProductItem>Starter Packs</ProductItem>
                      <ProductItem>Community</ProductItem>
                      <ProductItem>Mobile App</ProductItem>
                    </Sub>
                  )}
                </Product>
                <MenuItem style={{ marginLeft: "30px" }}>Company</MenuItem>
                <MenuItem style={{ marginLeft: "30px" }}>Support</MenuItem>
                <MenuItem style={{ marginLeft: "30px" }}>Reads</MenuItem>
                <MenuItem style={{ marginLeft: "30px", color: "#E28F1D" }}>
                  Visit Crib
                </MenuItem>
              </Center>
            </IconsContainer>
          </Wrapper>
          {this.state.isNavOpen && (
            <NavbarText>
              <NavText>
                These are template packs, we will create packs to be suited
                specially for you.
              </NavText>
              <NavTextIcon onClick={this.handleNav} src={cancel} alt="cancel" />
            </NavbarText>
          )}
        </span>
      </Container>
    );
  }
}
export default NavbarMobile;
