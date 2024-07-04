import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument, CgMail } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToContact();
      }, 100); 
    } else {
      scrollToContact();
    }
    updateExpanded(false);
  };

  function scrollToContact() {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <div
            style={{ fontWeight: "bolder", color: "#c770f0" }}
            className="title"
          >
            Sadat Riyad .
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <NavLink
                exact="true"
                to="/"
                onClick={() => updateExpanded(false)}
                className="nav-link"
                activeclassname="active"
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/about"
                onClick={() => updateExpanded(false)}
                className="nav-link"
                activeclassname="active"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/project"
                onClick={() => updateExpanded(false)}
                className="nav-link"
                activeclassname="active"
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="nav-link"
                activeclassname="active"
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </NavLink>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as="span"
                onClick={handleContactClick}
                style={{ cursor: "pointer", position: "relative" }}
              >
                <CgMail style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/SadatRiyad"
                target="_blank"
                className="fork-btn-inner"
              >
                <ImGithub style={{ fontSize: "1.2em" }} />{" "}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
