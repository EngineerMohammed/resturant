import React, { useState } from "react";
import { Row, Form, Container, Nav, Navbar } from "react-bootstrap";
const NavBar = ({ filterbySearch }) => {
  const [searchvalue, setSearchvalue] = useState("");
  
  const onSearch = (e) => {
    filterbySearch(searchvalue);
    setSearchvalue('')
  };
  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث.."
                className="mx-2"
                onChange={(e) => setSearchvalue(e.target.value)}
                value={searchvalue}
              />
              <button
                onClick={() => onSearch()}
                className="btn-search"
              >
                بـحـث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
