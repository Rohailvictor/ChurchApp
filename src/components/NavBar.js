import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../CssComponents/NavBar.css'
import { FaChurch } from 'react-icons/fa';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{height:'85px'}}>
        <Container>
          <Navbar.Brand href="#home" style={{fontSize: '40px', display: 'flex'}} >
            <FaChurch style={{marginTop: '10px', marginRight: '10px'}}/>
            <div>Christ Church</div>
            </Navbar.Brand>
          <Nav className="" style={{fontSize: '20px'}}>
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