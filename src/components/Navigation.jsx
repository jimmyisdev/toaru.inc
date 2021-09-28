import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from "./Logo";
import { RiTeamFill, RiChat3Fill, RiInformationFill } from "react-icons/ri";


export default function Navigation() {
    return (
      <nav>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="/about">
                <RiInformationFill className="iconItem" />
              </Nav.Link>
              <Nav.Link href="/team">
                <RiTeamFill className="iconItem" />
              </Nav.Link>
              <Nav.Link href="/contact">
                <RiChat3Fill className="iconItem" />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </nav>
    );
}
