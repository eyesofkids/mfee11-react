import React from 'react'
import {
  Button,
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* 用as屬性然後變成Link元件 */}
            <Nav.Link as={Link} to="/">
              首頁
            </Nav.Link>
            <Nav.Link as={Link} to="/user-add">
              會員新增
            </Nav.Link>
            <Nav.Link as={Link} to="/user-edit">
              會員編輯
            </Nav.Link>
            <NavDropdown title="子選單" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">
                登入
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/register">
                註冊
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu
