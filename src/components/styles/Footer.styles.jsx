import styled from "styled-components";

export const Socials = styled.div`
display: flex;
width: 256px;
height: 32px;
justify-content: space-between;
margin: 0 0 12px 85px;
&:hover {
  color: #E28F1D;
}
`;

export const SocialLink = styled.a`
background-color: rgba(255,255,255,0.2);
color: #FFFFFF;
height: 32px;
width: 32px;
text-align: center;
line-height: 40px;
border-radius: 50%;
color: #ffffff;
transition: all 0.5s ease;
  &:hover {
    color: #E28F1D;
  }
`;

export const FooterWrapper = styled.div`
background-color: #0B0D17;
// background-color: teal;
height: 420px;
margin-top: 135px;

`;
export const FooterContainer = styled.div`
display: flex;
lex-direction: column;
`;
export const FooterRow = styled.div`
display: flex;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 20px;
`;

export const FooterColumn = styled.div`
display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

`;
export const FooterHeadings = styled.p`
height: 28px;
width: 255px;
margin: 64px 0 24px 85px;
font-family: 'Sora', sans-serif;
font-size: 18px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: #F4F5F7;
cursor: pointer;

`;

export const Link = styled.a`
color: #fff;
text-decoration: none;
margin: 0 0 12px 85px;
font-family: 'Sora', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
&:hover {
  color: #E28F1D;
}
`;

export const Icon = styled.i`
// font-size: 18px;
// border: 5px solid red;
`;
export const FooterBreak = styled.hr`
color: red;
margin-top: 46px;
border: 0.5px solid #FFFFFF;
opacity: 0.1;
`;
export const LastSection = styled.div`
margin: 64px 47px 0 71px;
justify-content: space-between;
display: flex;
font-family: Sora;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
`;
export const FooterEnd = styled.div`
display: flex;
`;
export const LogoContainer = styled.div`
display: flex;
margin: 0!important;
`;
export const LogoTitle = styled.div`
// margin: 45px 0 0 50px;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
width: 209px;
height: 21px;
font-family: 'Montserrat', sans-serif;
`;
export const WhiteArm = styled.img`
// margin: 47px 0 0 0;
width: 25px;
height: 18px;
color: #FFFFFF;
`;
