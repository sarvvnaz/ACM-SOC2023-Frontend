import React from "react";
import "../assets/styles/Header.css";
import Logo from "../assets/images/logo1.webp";
import SearchIcon from "../assets/images/search.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useParams, Link } from "react-router-dom";

function Header() {

  return (
    <>
      <header>

        <Container className="container-fluid row">
          <Navbar className=" main-navbar navbar-expand navbar-dark uppercase">
            <div className="left-section">
              <Link to={'/'}>
              <Navbar.Brand  >

                <img className="logo" src={Logo} alt="Logo" />
              </Navbar.Brand>
              </Link>
              <Navbar.Toggle
                type="button"
                data-toggle="collapse"
                aria-controls="navbarScroll"
                className="navbar-toggler-icon"
              />
              <Container className="menu-area">
                <Container className="menu-tabs">
                  <Nav className="navbar navbar-default navbar-custom top-level-nav">
                    <NavbarCollapse className="collapse navbar-collapse flex-parent">
                      <Nav className="nav navbar-nav flex-child-menu menu-left">
                        <li className=" active">
                          <a href="#">Movies</a>
                        </li>
                        <li className="not-active">
                          <a href="#">TV Shows</a>
                        </li>
                      </Nav>
                    </NavbarCollapse>
                  </Nav>
                </Container>
                <Container
                  className="menu-toggles collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <li className="nav-item">
                      <Nav.Link className="nav-link" href="#">
                        filters{" "}
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link className="nav-link" href="#">
                        latest
                      </Nav.Link>
                    </li>
                    <li className="nav-item dropdown">
                      <NavDropdown
                        title=".  Categories"
                        id="navbarScrollingDropdown"
                      >
                        <NavDropdown.Item href="">Action</NavDropdown.Item>
                        <NavDropdown.Item href="">Animation</NavDropdown.Item>
                        <NavDropdown.Item href="">Comedy</NavDropdown.Item>
                        <NavDropdown.Item href="">Crime</NavDropdown.Item>
                        <NavDropdown.Item href="">Drama</NavDropdown.Item>
                        <NavDropdown.Item href="">Documentary</NavDropdown.Item>
                        <NavDropdown.Item href="">Sci-Fi</NavDropdown.Item>
                        <NavDropdown.Item href="">Family</NavDropdown.Item>
                        <NavDropdown.Item href="">History</NavDropdown.Item>
                        <NavDropdown.Item href="">Fantasy</NavDropdown.Item>
                        <NavDropdown.Item href="">Horror</NavDropdown.Item>
                        <NavDropdown.Item href="">Music</NavDropdown.Item>
                        <NavDropdown.Item href="">Mystery</NavDropdown.Item>
                        <NavDropdown.Item href="">Romance</NavDropdown.Item>
                        <NavDropdown.Item href="">Thriller</NavDropdown.Item>
                        <NavDropdown.Item href="">War</NavDropdown.Item>
                        <NavDropdown.Item href="">Western</NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    <li className="nav-item">
                      <Nav.Link className="nav-link" >
                        genres
                      </Nav.Link>
                    </li>
                  </Nav>
                </Container>
              </Container>
            </div>
            <div className="right-section">
           

              <Container className="search-section">
                <Form className="d-flex">
                  <button className="search-button" type="submit">
                    <img className="search-icon" src={SearchIcon} />
                  </button>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="search-input me-2"
                    id="search-input"
                    aria-label="Search"
                  />
                </Form>
              </Container>
              <Nav className="buttons">
                <Nav.Item className="login-button">
                  <Button variant="outline-secondary">LOGIN</Button>
                </Nav.Item>
                <Nav.Item className="signup-button uppercase">
                  <Button variant="outline-secondary">SIGNUP</Button>
                </Nav.Item>
              </Nav>
            </div>
          </Navbar>
        </Container>
      </header>
    </>
  );
}

export default Header;
