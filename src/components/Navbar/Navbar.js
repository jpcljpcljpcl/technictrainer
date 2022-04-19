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
        <Nav activeKey="" fill variant="tabs" defaultActiveKey="">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/calendar">Calendar</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/clubs">Club</Nav.Link>
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


