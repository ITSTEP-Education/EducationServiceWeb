import { Container, ListGroup, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledFooterContainer = styled(Navbar)`
  background: #757575;
  padding: 2em;
  height: auto;
  width: 100%;
  display:flex;
  flex-wrap:wrap;
  align-items: center;
`;

export const Contacts = styled(Container)`
  font-weight: 500;
  color: #1e1e1e;
`;
export const HighlitedColon = styled.span`
  color: #f24822;
`;

export const TitlesOfContactInfo = styled.p`
  color: #e6e6e6;
  font-size: 0.9em;
  font-weight: 600;
  display: inline;
`;

export const ContactsInfo = styled(ListGroup)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-gap: 5em;
  & > :nth-child(4) {
    grid-column: span 3;
  }

  justify-content: start;
  align-items: center;

  @media (min-width: 0px) and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7em;
  }
`;
export const ListGroupItems = styled(ListGroup.Item)`
background-color: transparent; 
 border: none;
`;

export const SocialLinks = styled(ListGroup)`
  display: inline-block;
`;

export const Links = styled(ListGroupItems)`
  display: inline;
  padding: 3em;
`;

export const Numbers = styled(ListGroupItems)`
  display: inline;
`;
export const Number = styled(ListGroupItems)`
  display: flex;
`;

export const CopyrightSection = styled(Container)`
  text-align: center;
  color: #e6e6e6;
  font-size: 1.1em;
  display:block !important;
`;
