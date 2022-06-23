import {Link} from 'react-router-dom'
import { Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navs = (props) => {
    return ( 

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link to="/personal-Website">  <Nav.Link href="#home">About Me</Nav.Link></Link>
    <Link to="/projects"> <Nav.Link href="#projects">Projects</Nav.Link> </Link>
    <a style={{color:"rgba(255,255,255,.55)",marginTop:"auto",marginBottom:"auto"}}  href='https://www.scribd.com/document/553485298/My-Resume'
         download='CV.pdf' target="_blank" rel="noopener noreferrer" > CV↓  </a>
      <a style={{color:"rgba(255,255,255,.55)",marginTop:"auto",marginBottom:"auto",marginLeft:"10px"}}  target="_blank" rel="noopener noreferrer"  href='https://www.scribd.com/document/565717418/My-Resume-1' > Curriculo↓ </a>

    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>

           
    )
}
export default Navs