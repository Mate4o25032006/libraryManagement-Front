import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import links from './MyLinks';
import Logo from '../../assets/logo.png'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <img
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            {links.map(link => {
              if (link.sublinks.length > 0) {
                return (
                  <NavDropdown title={link.name} id="navbarScrollingDropdown" key={link.name}>
                    {link.sublinks.map(sublink => (
                      <NavDropdown.Item href={sublink.link} key={sublink.name}>{sublink.name}</NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              } else {
                return (
                  <Nav.Link href={link.href} key={link.name}>{link.name}</Nav.Link>
                );
              }
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;