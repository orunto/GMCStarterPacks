import React, {useState}from "react";

import { PackNavMobile, PackItem } from ".";
import { Arrow, PackItems} from "../styles/NavbarMobile.styles";
import arrowUp from "../../assets/arrowUp.svg";

const PackNavListMobile = ({ type }) => {
  const [onProduct, setState] = useState(false)

  const handleOnProduct = () => {
    setState(!onProduct)
};
  return (
    <PackNavMobile>
      <span onClick={handleOnProduct} style={{display: "flex", alignItems: "center", marginLeft:"30px"}}>
        Select a template {onProduct || <PackItems/>}<Arrow src={arrowUp} alt="arrow" />
      </span>
      {onProduct && <PackItems>
      <PackItem id={type === "techbro" ? "current" : "techbro"} href="/">
        Tech Bro
      </PackItem>
      <PackItem
        id={type === "workfromhome" ? "current" : "workfromhome"}
        href="/workfromhome"
      >
        Work from home
      </PackItem>
      <PackItem id={type === "gym" ? "current" : "gym"} href="/gym">
        Gym
      </PackItem>
      <PackItem id={type === "owanbe" ? "current" : "owanbe"} href="/owanbe">
        Owambe
      </PackItem>
      <PackItem id={type === "student" ? "current" : "student"} href="/student">
        Student
      </PackItem>
      <PackItem
        id={type === "corporate" ? "current" : "corporate"}
        href="/corporatecasual"
      >
        Corporate
      </PackItem>
      <PackItem
        id={type === "partygoer" ? "current" : "partygoer"}
        href="/partygoer"
      >
        Party
      </PackItem>
      <PackItem
        id={type === "rainingseason" ? "current" : "rainingseason"}
        href="/rainingseason"
      >
        Raining
      </PackItem>
      <PackItem
        id={type === "datenightspecial" ? "current" : "datenightspecial"}
        href="/datenightspecial"
      >
        Date Night
      </PackItem>
      </PackItems>}
    </PackNavMobile>
  );
};

export default PackNavListMobile;
