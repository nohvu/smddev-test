import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className={styles.container}>
        <Nav.Link as={Link} to="/">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            width="25"
            height="25"
            className="d-inline-block align-top"
          />{" "}
        </Nav.Link>
        <Navbar.Brand as={Link} to="/">
          AppleStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.catalog} as={Link} to="/catalog">
              Catalog
            </Nav.Link>

            <Nav.Link className={styles.admin} as={Link} to="/admin">
              Create Device
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
