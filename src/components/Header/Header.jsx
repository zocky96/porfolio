import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
const labels = { home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Expérience', contact: 'Contact' };

export default function Header({ scrollProgress }) {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offset = window.scrollY + 120;
      for (const id of [...navLinks].reverse()) {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <button className="logo-btn" onClick={() => go('home')}>
            Desir <span className="gradient-text">Renaldo</span>
          </button>

          <nav className="nav-pill">
            {navLinks.map((id) => (
              <button
                key={id}
                className={`nav-btn${active === id ? ' active' : ''}`}
                onClick={() => go(id)}
              >
                {labels[id]}
              </button>
            ))}
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mobile-nav-panel">
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`mobile-nav-btn${active === id ? ' active' : ''}`}
              >
                {labels[id]}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
