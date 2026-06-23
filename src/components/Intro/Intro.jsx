import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, ArrowDown, Mail, Linkedin, Github, Code2 } from 'lucide-react';
import './Intro.css';

const titles = [
  'Développeur Mobile',
  'Développeur Full-Stack',
  'DevOps'
];

export default function Intro() {
  const [displayed, setDisplayed] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const full = titles[titleIdx];

  useEffect(() => {
    let timeout;
    if (!deleting) {
      if (displayed.length < full.length) {
        timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setTitleIdx((i) => (i + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, full]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home">
      <div className="section-container">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="hero-badge">Bonjour, je suis Desir Renaldo</p>
            <h1 className="hero-h1">
              {displayed}
              <span className="hero-cursor" />
            </h1>
            <p className="hero-subtitle">Ingénieur spécialisé en Applications Mobiles, Web et DevOps</p>
            <p className="hero-desc">
              J'aime concevoir des solutions pratiques et à fort impact. Du développement d'applications mobiles
              performantes aux infrastructures DevOps et applications web modernes, je bâtis des systèmes
              fiables, évolutifs et centrés sur l'utilisateur.
            </p>

            <div className="hero-btns">
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                Me contacter <ArrowRight size={16} />
              </button>
              <a
                href="https://drive.google.com/file/d/1xf1HS95Jcarb2Tz0HNTz1whtqYPnaCFK/view?usp=drivesdk"
                download="Desir_Renaldo_Resume.pdf"
                className="btn-outline"
              >
                <Download size={16} /> Télécharger mon CV
              </a>
            </div>

            <div className="social-row">
              {[
                { href: 'https://github.com/zocky96', icon: <Github size={18} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/renaldo-desir-51567821b', icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: 'mailto:desirrenaldo03@gmail.com', icon: <Mail size={18} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-img-wrap">
            <div className="profile-container">
              <div className="profile-glow" />
              <div className="profile-card">
                <img src="/1.webp" alt="Desir Renaldo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="hero-scroll-btn" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <ArrowDown size={18} />
      </button>
    </section>
  );
}
