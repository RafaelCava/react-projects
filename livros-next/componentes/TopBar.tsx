import Link from 'next/link';
import React from 'react';
export default function TopBar() {
  return (
    <nav className='bg-dark'>
      <ul className="nav ">
        <li className="nav-item">
          <Link className={`nav-link text-light`} href={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-light`} href={"/LivroLista"}>Catálogo</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-light`} href={"/LivroDados"}>Novo</Link>
        </li>
      </ul>
    </nav>
  );
}