import React from 'react'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a href="#" className="navbar-brand">Technic Trainer</a>  

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
            </button>


          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a href="#clube" className="nav-link">Clube</a>
                </li><li className="nav-item">
                    <a href="#calendario" className="nav-link">Calendário</a>
                </li>
                <li className="nav-item">
                    <a href="#perfil" className="nav-link">Perfil</a>
                </li>
            </ul>
          </div>
        </div>
    </nav>
    </div>

        
  )
}