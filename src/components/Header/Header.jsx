import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Importa o CSS modular

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">Meu Site</Link>
        </div>
        <ul className={styles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;