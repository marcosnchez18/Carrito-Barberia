import React from 'react';
import '../portada.css';
import Logo from './Logo';


const Header2 = () => {
  return (
    <header className='header2'>
      <div className="tooltip">
        <Logo />
        <span className="tooltiptext">
          Bienvenido a la mejor barbería de Sanlúcar de Barrameda,
          <br /> esperamos que tenga una gran experiencia de la mano
          <br /> de nuestros profesionales.
        </span>
      </div>
      <nav aria-label="menuprincipal">
        <ul>
          <li>
            <a href="../pages/OtherPages.jsx" aria-label="Sobre nosotros">
              Sobre nosotros
            </a>
          </li>
          <li>
            <a href="paginas/contacto.html#equipo" aria-label="Equipo">
              Equipo
            </a>
          </li>
          <li>
            <a href="paginas/servicios.html" aria-label="Servicios">
              Servicios
            </a>
          </li>
          <li>
            <a href="paginas/contacto.html#contacto" aria-label="Contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header2;
