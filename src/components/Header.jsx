import React from "react";
import "bootstrap";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                MODELOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PRUEBA DE MANEJO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                COTIZAR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PROMOCIONES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DISTRIBUIDORES
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
