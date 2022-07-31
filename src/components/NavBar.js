import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../CssComponents/NavBar.css'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{height:'85px'}}>
        <Container>
          <Navbar.Brand href="#home">Church</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#features">Ministry</Nav.Link>
            <Nav.Link href="#pricing">Events</Nav.Link>
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
    </>
  );
}

export default NavBar;