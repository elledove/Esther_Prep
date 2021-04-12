import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';



const Header = () => {
    return ( 


    <header>
{/* bg dark gives the dark bg and variant makes it so the words are still visible. */}
<Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
    {/* The container tags centers whatever is inside of it. */}
    <Container>
      <LinkContainer to='/'>
      <Navbar.Brand>Esther Prep</Navbar.Brand>
      </LinkContainer>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      {/* ml-auto is margin left. moves sigin and prep cart links to the right side of page */}
    <Nav className="ml-auto">

      <LinkContainer to='/login'>
      <Nav.Link> <i className=" fas fa-shopping-cart"> </i> SignIn</Nav.Link>
      </LinkContainer>

      <LinkContainer to='/cart'>
      <Nav.Link> <i className=" fas fa-user"> </i>Prep Cart</Nav.Link>
      </LinkContainer>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    </header> 

    );
}
 
export default Header;