import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle, SectionSubHead } from '../../styles/GlobalComponents';
import { SectionSubHeadLink, SectionSubHeadLink2, SectionSubText4, List, ListContainer, ListItem, ListParagraph, ListTitle, SectionSubText3 } from './ExperienceStyles';

const Experience = () =>  (
  <Section id="tech">
   
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
        <SectionSubHead>
            Frontend Intern <SectionSubHeadLink href="https://quicksell.co/" target="_blank">@QuickSell</SectionSubHeadLink>
        </SectionSubHead>
        <SectionSubText4>January - March,  2022</SectionSubText4>
        QuickSell helps merchants increase their conversion rate and shorten sales cycle with a personal e-commerce strategy.
    <List>
        <ListItem>
        <ListParagraph>
            Effectively performed state management using react hooks and redux to manage the state of the app in a single place and keep
            changes made in the app more predictable and traceable.
        </ListParagraph>
        </ListItem>

        <ListItem>
        <ListParagraph>
        Wrote and deployed features in collaboration with the engineering team and worked on bug fixes and improvements.

        </ListParagraph>
        </ListItem>

        <ListItem>
        <ListParagraph>
            Setup the Chat API for WhatsApp API trigger to run a workflow which integrates with the Firebase Admin SDK API
        </ListParagraph>
        </ListItem>
    </List>
    </SectionText>
    <SectionText>
        <SectionSubHead>
            Software Developer and UI/UX Intern <SectionSubHeadLink href="https://www.khetipoint.in/" target="_blank">@Khetipoint Pvt Ltd</SectionSubHeadLink>
        </SectionSubHead>
        <SectionSubText4>June - September,  2020</SectionSubText4>
      Khetipoint is an integrated platform in the Agrotech space to provide farmers with tech based solutions.
    <List>
        <ListItem>
        <ListParagraph>
             Managed the setup and creation of crop library on <SectionSubHeadLink2 href="https://firebase.google.com/" target="_blank">Firebase</SectionSubHeadLink2> linking multiple crops and their details on Cloud Firestore. 
        </ListParagraph>
        </ListItem>

        <ListItem>
        <ListParagraph>
            Performed the setup and management of admin portal with secure login, admin roles and a user friendly dashboard allowing CRUD operations on the crop library.

        </ListParagraph>
        </ListItem>

        <ListItem>
        <ListParagraph>
            Designed the logo and created userflows, prototypes, mockups, and wireframes for the <SectionSubHeadLink2 href="https://play.google.com/store/apps/details?id=com.farmer.khetipoint" target="_blank">Khetipoint Mobile Application.</SectionSubHeadLink2> 
        </ListParagraph>
        </ListItem>
    </List>
    </SectionText>

    <SectionDivider colorAlt />
  </Section>
);

export default Experience;
