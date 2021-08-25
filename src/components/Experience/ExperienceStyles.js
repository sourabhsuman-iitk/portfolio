import styled from 'styled-components'


export const SectionSubHeadLink = styled.a`
  max-width: 800px;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: rgba(255,255,255,0.8);
  &:hover {
    text-decoration: underline;
}
    cursor:pointer;
  

@media ${(props) => props.theme.breakpoints.md} {
    padding-top: 20px;
    max-width: 672px;
    font-size: 20px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    padding-top: 0px;
    line-height: 22px;
  }
`
export const SectionSubHeadLink2 = styled.a`
  max-width: 800px;
  
  font-weight: 600;
  color: rgba(208,187,87,1);
    cursor:pointer;
    &:hover {
        text-decoration: underline;
    }
`
export const SectionSubText4 = styled.p`
  padding-top: 5px;
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.75);
  line-height:32px;
  letter-spacing: 2px;

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  letter-spacing: 1px;

  }
`
export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
list-style-type: disc;
`

export const ListItem = styled.li`
  margin: 20px;

@media ${props => props.theme.breakpoints.md}{
    margin: 15px;
}

@media ${props => props.theme.breakpoints.sm}{
    margin: 10px;
}
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 22px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 20px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 16px;
    line-height: 22px;
  }
`



export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
