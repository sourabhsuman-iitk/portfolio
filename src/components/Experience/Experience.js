import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle, SectionSubHead } from '../../styles/GlobalComponents';
import { SectionSubHeadLink, SectionSubHeadLink2, SectionSubText4, List, ListContainer, ListItem, ListParagraph, ListTitle, SectionSubText3 } from './ExperienceStyles';

const Experience = () =>  (
  <Section id="tech">
   
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
        <SectionSubHead>
            Frontend Developer <SectionSubHeadLink href="https://quicksell.co/" target="_blank">@QuickSell</SectionSubHeadLink>
        </SectionSubHead>
        <SectionSubText4>August 2022 - March 2023</SectionSubText4>
        QuickSell helps merchants increase their conversion rate and shorten sales cycle with a personal e-commerce strategy. 
    <List>
        <ListItem>
        <ListParagraph>
        ◦ Developed a CRM website <SectionSubHeadLink href="https://web.doubletick.io/" target="_blank">Doubletick</SectionSubHeadLink> working in collaboration with the engineering team focused on sales, marketing and
        customer support through WhatsApp Business API
        </ListParagraph>
        </ListItem>

        <ListItem>
        <ListParagraph>
        ◦ Redesigned and improved the existing micro e-commerce on CRM website with a high performant one which led to
        more conversions due to simpler and intuitive UI

        </ListParagraph>
        </ListItem>

        <ListItem>
        <ListParagraph>
        ◦ Redeveloped the user onboarding flow on CRM website allowing users to test out features using demo account
        </ListParagraph>
        </ListItem>
        <ListItem>
        <ListParagraph>
        ◦ Designed and developed an order flow enabling e-commerce product order management directly in customer chat
        that also updates over android and ios apps in real time
        </ListParagraph>
        </ListItem>
        <ListItem>
        <ListParagraph>
        ◦ Employed Jotai for complex state management and virtualized lists to improve the user experience
        </ListParagraph>
        </ListItem>
    </List>
    </SectionText>
    <SectionText>
        <SectionSubHead>
            Frontend Intern <SectionSubHeadLink href="https://quicksell.co/" target="_blank">@QuickSell</SectionSubHeadLink>
        </SectionSubHead>
        <SectionSubText4>January - March,  2022</SectionSubText4>
    <List>
        <ListItem>
        <ListParagraph>
        ◦ Worked on redesigning and developing the transaction flow on the business catalogue website which led to steady
        improvements across the funnel and conversions nearly doubled
        </ListParagraph>
        </ListItem>

        <ListItem>
        <ListParagraph>
        ◦ Developed several features in micro react app that can be used in WebViews, iFrames, and native mobile apps

        </ListParagraph>
        </ListItem>

        <ListItem>
        <ListParagraph>
        ◦ Setup the Chat API for WhatsApp API trigger to run a workflow which integrates with the Firebase Admin SDK API
        </ListParagraph>
        </ListItem>
        <ListItem>
        <ListParagraph>
        ◦ Implemented technologies like React js, Next js, CSS, Javascript, JSX, TSX, Typescript, React Router
        </ListParagraph>
        </ListItem>
    </List>
    </SectionText>
    <SectionText>
        <SectionSubHead>
            Full-stack Developer and UI/UX <SectionSubHeadLink href="https://www.khetipoint.in/" target="_blank">@Khetipoint Pvt Ltd</SectionSubHeadLink>
        </SectionSubHead>
        <SectionSubText4>June 2020 - Dec 2021</SectionSubText4>
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
