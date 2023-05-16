import React from 'react';

import { Section, SectionText, SectionSubText2, SectionTitle2 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
      <SectionSubText2>
        Hello World! I'm 
        </SectionSubText2>
        <SectionTitle2 main center>
          Sourabh Suman <br />
          I transform ideas <br />
          into exceptional products.
        </SectionTitle2>
        <SectionText>
        I'm a passionate frontend developer graduated from <strong>IIT Kanpur</strong> dedicated to pushing creative boundaries and delivering exceptional digital solutions.
        <br /><br />
        With expertise in modern frameworks like React, Typescript, NextJs, React Native, I create immersive, user-centric websites, web apps, and mobile experiences.<br />

        Let's collaborate and bring your vision to life with captivating designs and seamless functionality. 
        </SectionText>
        <Link href="mailto:sourabhsumaniitk@gmail.com">
         <Button onClick={props.handleClick}>Get in Touch</Button>
         </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;