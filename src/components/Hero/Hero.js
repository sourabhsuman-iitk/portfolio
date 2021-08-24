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
        Hello World! My name is 
        </SectionSubText2>
        <SectionTitle2 main center>
          Sourabh Suman. <br />
          I love exploring and building <br />
          new things.
        </SectionTitle2>
        <SectionText>
          I am a senior year undergrad at IIT Kanpur with a passion for coding, learning and innovating.
          You can either find me curiously looking at the latest tech or developing something awesome for the web. 
        </SectionText>
        <Link href="mailto:sourabhsumaniitk@gmail.com">
         <Button onClick={props.handleClick}>Get in Touch</Button>
         </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;