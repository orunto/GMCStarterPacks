import React from "react";
import { 
    FooterContainer, 
    FooterRow, 
    FooterColumn, 
    FooterHeadings, 
    Link, 
    Socials,
    SocialLink,
    FooterBreak, 
    LastSection, 
    FooterEnd,
    FooterWrapper, 
    LogoContainer, 
    LogoTitle, 
    WhiteArm
} from '../styles/Footer.styles';

import whiteArmchair from '../../assets/whiteArmchair.png';

export const Footer = () => {
    return (
        <FooterWrapper>
        <FooterContainer>
          <FooterRow>
            <FooterColumn>
              <FooterHeadings>Company</FooterHeadings>
              <Link href="#">About Us</Link>
              <Link href="#">Reads</Link>
              <Link href="#">FAQs</Link>
            </FooterColumn>
            <FooterColumn>
              <FooterHeadings>Products</FooterHeadings>
              <Link href="#">Starter Packs</Link>
              <Link href="#">Community</Link>
              <Link href="#">Mobile App</Link>
            </FooterColumn>
            <FooterColumn>
              <FooterHeadings>Legal</FooterHeadings>
              <Link href="#">Cookies & Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </FooterColumn>
            <FooterColumn>
              <FooterHeadings>Get In Touch</FooterHeadings>
              {/* <Link> */}
                <Socials>
                    <SocialLink href="#"><ion-icon name="logo-instagram"></ion-icon></SocialLink>
                    <SocialLink href="#"><ion-icon name="logo-twitter"></ion-icon></SocialLink>
                    <SocialLink href="#"><ion-icon name="logo-whatsapp"></ion-icon></SocialLink>
                    <SocialLink href="#"><ion-icon name="logo-facebook"></ion-icon></SocialLink>
                    <SocialLink href="#"><ion-icon name="logo-linkedin"></ion-icon></SocialLink>
                </Socials>
              {/* </Link> */}
              <Link href="#">support@gentlemenscrib.com</Link>
              <Link href="#">Block 2, Flat 6, Baba Omojola Estate, Bagada, Lagos</Link>
            </FooterColumn>
          </FooterRow>
        </FooterContainer>
        <FooterBreak />
        <LastSection>
          <FooterEnd>© 2022 Gentlemen'scrib. All rights reserved</FooterEnd>
          <FooterEnd>
            <LogoContainer>
              <LogoTitle>GENTLEMEN'S CRIB</LogoTitle>
                <WhiteArm src={whiteArmchair} alt='armchair' />
            </LogoContainer>
          </FooterEnd>
          <FooterEnd>Terms of Service | Privacy Policy</FooterEnd>
        </LastSection>
      </FooterWrapper>
    )
}
export default Footer;