import React from 'react'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a href="#" className="navbar-brand">Technic Trainer</a>  

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
            </button>


          <div className="collapse navbar-collapse" id="navmenu">
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </div>
        
  )
}
