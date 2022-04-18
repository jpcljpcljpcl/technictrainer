import React from 'react'
import Nav from 'react-bootstrap/Nav';


export default function Navbar() {
  return (
    <div>

        <Nav activeKey="/home" fill variant="tabs" defaultActiveKey="">
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
      <Nav.Link eventKey="Log Out">
        Log Out
      </Nav.Link>
    </Nav.Item>
  </Nav>

  </div>
  )
}


