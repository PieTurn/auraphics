import React from 'react';
import {
    FaFacebook, 
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
    FaDribbble,
    FaBehance
} from 'react-icons/fa';
import { Button } from '../../globalStyles'; 
import { 
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink target="_blank"><a href="https://www.facebook.com/Auraphics/" target="_blank" aria-label="Facebook">Facebook</a></FooterLink>
                        <FooterLink target="_blank"><a href="https://www.instagram.com/auraphics/" target="_blank" aria-label="Instagram">Instagram</a></FooterLink>
                        <FooterLink target="_blank"><a href="https://www.linkedin.com/in/auraphics-sg-9ba33618a/?originalSubdomain=sg" target="_blank" aria-label="Linkedin">LinkedIn</a></FooterLink>
                        <FooterLink target="_blank"><a href="https://www.behance.net/junjie1195d002" target="_blank" aria-label="Behance">Behance</a></FooterLink>
                        <FooterLink target="_blank"><a href="https://dribbble.com/junjiechooo" target="_blank" aria-label="Dribbble">Dribbble</a></FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        Auraphics
                    </SocialLogo>
                    <WebsiteRights>
                        Auraphics 2021
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/Auraphics/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/auraphics/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/auraphics-sg-9ba33618a/?originalSubdomain=sg" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.behance.net/junjie1195d002" target="_blank" aria-label="Behance">
                            <FaBehance />
                        </SocialIconLink>
                        <SocialIconLink href="https://dribbble.com/junjiechooo" target="_blank" aria-label="Dribbble">
                            <FaDribbble />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
        
    );
};
export default Footer;
