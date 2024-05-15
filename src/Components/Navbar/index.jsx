import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const links = [
    {
      name : "Inicio",
      href : "/Inicio",
      sublinks: []
    },
    {
      name : "Libros",
      href : "/Libros",
      sublinks: []
    },
    {
      name : "Categorias",
      href : "/Categorias",
      sublinks : [
        { name: "Aventura", link: "/Categories/aventura" },
        { name: "Filosofía", link: "/Categories/filosofia" },
        { name: "Infantil", link: "/Categories/infantil" },
      ]
    },
    {
      name : "Disponibilidad",
      href : "/Disponibilidad",
      sublinks: [
        { name: "Libros Disponibles", link: "/Disponibilidad/disponibles" },
        { name: "Libros no Disponibles", link: "/Disponibilidad/no-disponibles" },
      ]
    },
  ];
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
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