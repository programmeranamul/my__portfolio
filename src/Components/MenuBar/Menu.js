import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <header className="mt-3 container-fluid">
      <Navbar expand="md" className="navbar-dark">
        <Navbar.Brand href="#home" className="logo light__white__color">Anamul</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link activeClassName="active" as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link activeClassName="active" as={NavLink} to="/aboutMe">
              About
            </Nav.Link>
            <Nav.Link activeClassName="active" as={NavLink} to="portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link activeClassName="active" as={NavLink} to="blog">
              Blog
            </Nav.Link>
            <Nav.Link activeClassName="active" as={NavLink} to="contact">
              Contact
            </Nav.Link>
            <a href="">             
              <Button variant="outline-success">Resume</Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Menu;
