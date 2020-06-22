import React, { useState, useEffect } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap"


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)


  return (
    <Navbar id={"navbar"} className={"fixed-top navbar-dark"}  expand="md" >
        <NavbarBrand href="/">Synetich e-Campus</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/*<NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>*/}
          </Nav>
          <NavbarText>Social Icons</NavbarText>
        </Collapse>
      </Navbar>
  )
}

export default NavBar