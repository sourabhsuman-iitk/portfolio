import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SectionTitle>Get in Touch</SectionTitle>
      <SectionText> My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</SectionText>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact Me</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            sourabhsumaniitk@gmail.com
          </LinkItem>
          <LinkItem href="tel:+91-8130238862">
            Mobile
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"CURIOSITY IS A WILLING, A PROUD, AND EAGER CONFESSION OF IGNORANCE." - S.Leonard Rubinstein</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/sourabhsuman-iitk" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/sourabh-suman-iitk22" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
