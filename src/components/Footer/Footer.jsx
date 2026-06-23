import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="section-container footer-container">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Desir Renaldo. Tous droits réservés.
        </p>
        <p className="footer-credits">
          Conçu avec ❤️ &bull; Propulsé par React JS, Vite et Vanilla CSS.
        </p>
      </div>
    </footer>
  );
}
