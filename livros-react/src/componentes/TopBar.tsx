import React from 'react';
export default function TopBar() {
  const path = window.location.pathname;
  return (
    <nav className='bg-dark'>
      <ul className="nav ">
        <li className="nav-item">
          <a className={`nav-link text-light ${path === '/' ? 'active' : ''}`}  href="/">Catálogo</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-light ${path === '/dados' ? 'active' : ''}`} href="/dados">Novo</a>
        </li>
      </ul>
    </nav>
  );
}