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
    ScrollIcon,
    PriceContainer,
    Price
} from "../styles/Components.styles";

import workfromhome from '../../assets/workfromhome .png';
import downarrow from '../../assets/downarrow.png';

import {  PackNav, PackItem } from '../constants';

const WorkFromHome = () => {
    return (
    <Container>
        <PackNav>
        <span>Select a template</span>
          <PackItem id="techbro" href="/">Tech Bro</PackItem>
          <PackItem id="current" href="/workfromhome">Work from home</PackItem>
          <PackItem id="gym" href="/gym">Gym</PackItem>
          <PackItem id="owanbe" href="/owanbe">Owanbe</PackItem>
          <PackItem id="student" href="/student">Student</PackItem>
          <PackItem id="corporate" href="/corporatecasual">Corporate</PackItem>
          <PackItem id="partygoer" href="/partygoer">Party</PackItem>
          <PackItem id="rainingseason" href="/rainingseason">Raining</PackItem>
          <PackItem id="datenightspecial" href="/datenightspecial">Date Night</PackItem>
      </PackNav>
      {/* <PackNavMobile></PackNavMobile> */}
        <Wrapper>
            <Image src={workfromhome} alt='image' />
            <Title>WORK FROM HOME 
STARTER</Title>
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
            <ScrollText>Scroll for more<span><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
        </OrderList>
        <PriceContainer>
            <Price>Order Pack for N170000</Price>
        </PriceContainer>
    </Container>
    
    )
}

export default WorkFromHome;

// import React from 'react';
// import './App.css';
// import { Routes, Route } from 'react-router-dom';

// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import TechBro from './components/TechBro';
// import WorkFromHome from './components/WorkFromHome';

// const App = () => {
//   return (
//    <div>
//     <Navbar />
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route exact path='/techbro' component={<TechBro/>} />
//       <Route exact path='/workfromhome' component={<WorkFromHome/>}/>


//     </Routes>

//    </div>
//   )
// };

// export default App;
