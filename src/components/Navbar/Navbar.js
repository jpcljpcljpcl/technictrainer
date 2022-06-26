import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { logout } from '../../firebase';


export default function Navbar() {

  async function handleLogout(){
      try {
       await logout();
      } catch (error) {
        alert("Error!");
      }
  }

  return (
    <div>
        <Nav fill variant="tabs" defaultActiveKey="">
    <Nav.Item>
      <Nav.Link href="/">Atividade</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/calendar">Calendario</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/clubs">Clubes</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={handleLogout} eventKey="Log Out">
        Log Out
      </Nav.Link>
    </Nav.Item>
  </Nav>

  </div>
  )
}


