import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';



const Header = () => {
    return ( 


    <header>
{/* bg dark gives the dark bg and variant makes it so the words are still visible. */}
<Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Navbar.Brand href="/">Esther Prep</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/login">SignIn</Nav.Link>
      <Nav.Link href="/cart">Prep Cart</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </header> 

    );
}
 
export default Header;