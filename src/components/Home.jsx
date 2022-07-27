import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Thanks to the index.js file I wrote earlier you can call all the components in a single line
// import { Navbar, NavbarMobile, Footer, Carousel} from './constants'; 
import { CartPage, CorporateCasual, DateNightSpecial, Gym, Owanbe, PartyGoer, RainingSeason, Student, TechBro, WorkFromHome } from './pages'; 

// import { TechBroItems } from './constants/TechBroItems';

import './css/Carousel.css';
import './css/PackNav.css';

const Home = () => {
    return (
        <Router>
            {/* <Navbar /> */}
            {/* <NavbarMobile />  */}
            <Routes>
                <Route path='/' element={<TechBro/>}/>
                <Route path='/owanbe' element={<Owanbe />}/>
                <Route path='/gym' element={<Gym />}/>
                <Route path='/workfromhome' element={<WorkFromHome />}/>
                <Route path='/corporatecasual' element={<CorporateCasual />}/>
                <Route path='/datenightspecial' element={<DateNightSpecial />}/>
                <Route path='/partygoer' element={<PartyGoer />}/>
                <Route path='/rainingseason' element={<RainingSeason />}/>
                <Route path='/student' element={<Student />}/>
                <Route path='/cart' element={<CartPage />}/>
            </Routes>

            {/* <Carousel slides={TechBroItems}/> */}
            

            {/* <Footer /> */}
        </Router>
    )
}
export default Home;