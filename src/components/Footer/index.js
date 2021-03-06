import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";

import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";
import { FcMoneyTransfer } from "react-icons/fc";

const Footer = () => {
	const toggleHome = () => scroll.scrollToTop();

	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us</FooterLinkTitle>

							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Testimonials</FooterLink>
							<FooterLink to="/">Career</FooterLink>
							<FooterLink to="/">Investors</FooterLink>
							<FooterLink to="/">Terms of service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>

							<FooterLink to="/">Contact</FooterLink>
							<FooterLink to="/">Support</FooterLink>
							<FooterLink to="/">Destination</FooterLink>
							<FooterLink to="/">Sponsorship</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>

							<FooterLink to="/">Submit Video</FooterLink>
							<FooterLink to="/">Ambassadors</FooterLink>
							<FooterLink to="/">Agency</FooterLink>
							<FooterLink to="/">Influencer</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>

							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Facebook</FooterLink>
							<FooterLink to="/">Youtube</FooterLink>
							<FooterLink to="/">Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							<FcMoneyTransfer />
							Modern Cash
						</SocialLogo>
						<WebsiteRights>
							Modern Cash?? {new Date().getFullYear()}
							<br></br>
							All rights reserved
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Youtube">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Linkedin">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
