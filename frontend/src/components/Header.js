import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';



const Header = () => {
    return ( 


    <header>
{/* bg dark gives the dark bg and variant makes it so the words are still visible. */}
<Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
    {/* The container tags centers whatever is inside of it. */}
    <Container>
  <Navbar.Brand href="/">Esther Prep</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      {/* ml-auto is margin left. moves sigin and prep cart links to the right side of page */}
    <Nav className="ml-auto">
      <Nav.Link href="/login"> <i className=" fas fa-shopping-cart"> </i> SignIn</Nav.Link>
      <Nav.Link href="/cart"> <i className=" fas fa-user"> </i>Prep Cart</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    </header> 

    );
}
 
export default Header;