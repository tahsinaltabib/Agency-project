import React from "react";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import Logo from '../assets/Logo.png'
import Image from './Image'

const Navber = () => {
  return (
    <section className="bg-[#1C1E53] py-[16px]" >
      <Container className="g-0">
        <Navbar expand="lg" className="">
          <Navbar.Brand href="#home">
            <Image src={Logo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-[32px] mr-[48px] list-main">
              <Nav.Link className="text-white navlist no-underline" to="/Home">Home</Nav.Link>
              <Nav.Link className="text-white navlist no-underline" to="/About">About us</Nav.Link>
              <NavLink className="text-white navlist no-underline" to="/Features">Features</NavLink>
              <Nav.Link className="text-white navlist no-underline" to="/Pricing">Pricing</Nav.Link>
              <Nav.Link className="text-white navlist no-underline" to="/ReadCase">FAQ</Nav.Link>
              <Nav.Link className="text-white navlist no-underline" to="/Blog">Blog</Nav.Link>
            </Nav>
            <NavLink to="/Contact" className='no-underline'>
              <button className="text-white px-[48px] py-[16px] border-1 rounded-[41px] hover:bg-[#FCD980] duration-300 ">Contact us</button>
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default Navber;