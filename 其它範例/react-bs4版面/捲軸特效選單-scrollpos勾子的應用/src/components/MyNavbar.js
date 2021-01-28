import React, { useState, useEffect, useMemo } from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
// 先安裝useScrollPosition勾子
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  // 兩個狀態切換
  const [show, setShow] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    // 這裡可以監視目前的捲軸狀態
    console.log(currPos.x)
    console.log(currPos.y)
    if (currPos.y < -200) {
      setShow(false)
    } else {
      setShow(true)
    }
  })

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
        className={
          show ? 'nav-shink-normal' : 'nav-shink-hide'
        }
      >
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              會員登入
            </Nav.Link>
            <Nav.Link as={NavLink} to="/member">
              會員管理
            </Nav.Link>
            <NavDropdown
              title="產品分類"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/product/men"
              >
                MEN 男性
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/product/baby"
              >
                Baby 嬰兒
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={NavLink}
                to="/product/women"
              >
                WOMEN 女性
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
