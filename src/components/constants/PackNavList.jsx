import React from 'react';

import { PackNav, PackItem } from '.';

const PackNavList = ({type}) => {
  return (
      <PackNav>
        <span>Select a template</span>
          <PackItem id={type=== "techbro"? "current" : "techbro"} href="/">Tech Bro</PackItem>
          <PackItem id={type=== "workfromhome" ? "current" : "workfromhome"} href="/workfromhome">Work from home</PackItem>
          <PackItem id={type=== "gym"? "current" : "gym"} href="/gym">Gym</PackItem>
          <PackItem id={type=== "owanbe"? "current" : "owanbe"} href="/owanbe">Owanbe</PackItem>
          <PackItem id={type=== "student"? "current" : "student"} href="/student">Student</PackItem>
          <PackItem id={type=== "corporate"? "current" : "corporate"} href="/corporatecasual">Corporate</PackItem>
          <PackItem id={type=== "partygoer"? "current" : "partygoer"} href="/partygoer">Party</PackItem>
          <PackItem id={type=== "rainingseason"? "current" : "rainingseason"} href="/rainingseason">Raining</PackItem>
          <PackItem id={type=== "datenightspecial"? "current" : "datenightspecial"} href="/datenightspecial">Date Night</PackItem>
      </PackNav>
      

  )
  }

export default PackNavList;
