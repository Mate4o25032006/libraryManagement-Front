import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const links = [
        {
            name : "Home",
            href : "/Home"
        },
        {
            name : "Books",
            href : "/Books"
        },
    ]
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            {links.map(link => (
                <Nav.Link href={link.href} key={link.name}>{link.name}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;