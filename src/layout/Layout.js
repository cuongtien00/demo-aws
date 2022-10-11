import React from 'react'
import { Container,Navbar} from 'react-bootstrap';
import logo from '../logo.svg';
export default function Layout() {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" style={{color: 'white'}}>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              
            />
             Avatar
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
