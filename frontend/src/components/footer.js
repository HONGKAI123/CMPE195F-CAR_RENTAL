import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerstyle";

  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "White", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        YIYI RENTAL: Professional Car Rental Company
      </h1>
      <Container>
        <Row >
          <Column >
            <Heading>About Us</Heading>
            <FooterLink href="#"><img src ='/peoplelog.png' alt='logo' width='55px' height='30px'/>Team Members </FooterLink>
          
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#"><img src ='/reselog.png' alt='logo' width='55px' height='30px'/>Resevartion</FooterLink>
            <FooterLink href="#"><img src ='/livechatlogo.png' alt='logo' width='55px' height='30px'/>Livechat</FooterLink>
         
          </Column>
          <Column>
            <Heading>Power by</Heading>
            <FooterLink href="https://reactjs.org/" target="_blank"><img src ='/favicon.ico' alt='logo' width='55px' height='30px'/>React</FooterLink>
            <FooterLink href="https://expressjs.com/" target="_blank"><img src ='/nodelogo.png' alt='logo' width='70px' height='30px'/>Express</FooterLink>
         
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
            <img src ='/facebooklogo.svg' alt='logo' width='50px' height='30px'/>
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
            <img src ='/inslogo.png' alt='logo' width='50px' height='30px'/>
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;