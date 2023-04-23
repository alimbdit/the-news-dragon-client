import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto my-auto ">
              <Link className="text-decoration-none me-2 text-black" to={"/category/0"}>Home</Link>

              <Link className="text-decoration-none me-2 text-black" to="#pricing">About</Link>
              <Link className="text-decoration-none me-2 text-black" to="#pricing">Career</Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user && (
                <FaUserCircle style={{ fontSize: "2rem" }} className="me-2"></FaUserCircle>
              )}

              {user ? (
                <Link>
                  <Button variant="secondary">Logout</Button>
                </Link>
              ) : (
                <Link to='/login'>
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
