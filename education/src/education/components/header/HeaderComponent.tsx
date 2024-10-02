import Nav from "react-bootstrap/Nav";
import user_icon from "../../assets/images/user_icon.png";
import { StyledNavContainer, StyledNavLink, StyledNavLinkLogo, StyledNavbar } from "./HeaderStyles";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>
      <StyledNavbar>
        <StyledNavContainer>
          <Nav>
            <StyledNavLinkLogo href="#logo">LOGO</StyledNavLinkLogo>
            <StyledNavLink href="#main">ГОЛОВНА</StyledNavLink>
            <StyledNavLink href="#programs">ПРОГРАМИ НАВЧАННЯ</StyledNavLink>
            <StyledNavLink href="#admin">АДМІНІСТРАЦІЯ</StyledNavLink>

            <StyledNavLink href="#room">
              ТВІЙ КАБІНЕТ <img width={30} src={user_icon} />
            </StyledNavLink>
          </Nav>
        </StyledNavContainer>
      </StyledNavbar>
    </>
  );
}

export default Header;
