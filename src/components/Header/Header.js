import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, LinkHref } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
     
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>         */}
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li> 
      <li>
        <LinkHref href="Resume.pdf" target="_blank">
          <NavLink>Resume</NavLink>
        </LinkHref>
      </li>      
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/sourabhsuman-iitk" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sourabh-suman-iitk22" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        {/* <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons> */}
      </Div3>
    </Container>
);

export default Header;
