import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = 100; // Change this to the height of your first section

      if (scrollTop > windowHeight - sectionHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`navcontainer ${scrolling ? 'scrolled' : ''}`}>
      <Navbar.Brand className='navlogo New-Kansas-Regular' href="/">Egg Master</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className='link' href="/">Home</Nav.Link>
          <Nav.Link className='link' href="/about">About</Nav.Link>
          <Nav.Link className='link' href="/products">Products</Nav.Link>
          {/* <Nav.Link className='link' href="/blog">Eggcyclopedia</Nav.Link> */}
          <Nav.Link className='link' href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

