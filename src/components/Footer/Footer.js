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
import Logo from '../../images/Auraphics.png';
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
            {/* <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription> */}
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        {/* <FooterLink to='/'>How it works</FooterLink> */}
                        <FooterLink target="_blank"><a href="https://www.facebook.com/Auraphics/reviews/?ref=page_internal" target="_blank" aria-label="Reviews">Reviews</a></FooterLink>
                        {/* <FooterLink to='/'>Terms of Service</FooterLink> */}
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink target="_blank"><a href="mailto:auraphics@outlook.sg">Email</a></FooterLink>
                        <FooterLink target="_blank"><a href="https://www.facebook.com/Auraphics/" target="_blank" aria-label="FB Messenger">FB Messenger</a></FooterLink>
                        {/* <FooterLink to='/'>COMING SOON</FooterLink>
                        <FooterLink to='/'>COMING SOON</FooterLink> */}
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink target="_blank"><a href="https://www.facebook.com/Auraphics/" target="_blank" aria-label="Digital App Gallery">LTA</a></FooterLink>
                        <FooterLink target="_blank"><a href="https://www.youtube.com/watch?v=cP88zCPzxl0&list=PLj3TZFBRahSAwkji_8gtlBTkK9Dw8SCfP&index=2" target="_blank" aria-label="SHRE">SingHealth</a></FooterLink>
                        <FooterLink target="_blank"><a href="https://www.youtube.com/watch?v=Ihu3JyhZJwY&list=PLj3TZFBRahSAB9LkgsSy8NYvj5aZKryKx&index=4" target="_blank" aria-label="Roysbrewcoffee">Roy's Brew Coffee</a></FooterLink>
                        <FooterLink target="_blank"><a href="https://www.youtube.com/watch?v=-RPO4D-4rjg&list=PLj3TZFBRahSCyKSRcM-UvIXUdS9W7jg5g&index=16" target="_blank" aria-label="TruEnviro">TruEnviro</a></FooterLink>
                        <FooterLink target="_blank"><a href="https://www.youtube.com/watch?v=cYU06Ypdxhg&list=PLj3TZFBRahSAwkji_8gtlBTkK9Dw8SCfP&index=14" target="_blank" aria-label="Battle Spheres">Ixora Studios</a></FooterLink>
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
                    <img src={Logo} alt="Auraphics Logo" width="84rem" height="84rem" style={{ marginRight: "10px" }}/>
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
