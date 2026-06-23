import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CertificateModal from './components/CertificateModal/CertificateModal';
import { ArrowUp } from 'lucide-react';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [certSrc, setCertSrc] = useState(null);
  const [certOpen, setCertOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openCert = (src) => { setCertSrc(src); setCertOpen(true); };
  const closeCert = () => { setCertOpen(false); setTimeout(() => setCertSrc(null), 300); };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>

      <div className={`loading-screen${loading ? '' : ' hidden'}`}>
        <div style={{ textAlign: 'center' }}>
          <div className="loading-spinner" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>
            Chargement<span style={{ animation: 'blink 1s infinite' }}>...</span>
          </h2>
        </div>
      </div>

      <Header scrollProgress={scrollProgress} />

      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Experience onViewCertificate={openCert} />
        <Contact />
      </main>



      <CertificateModal isOpen={certOpen} imageSrc={certSrc} onClose={closeCert} />

      <button className={`scroll-top-btn${showTop ? ' visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Retour en haut">
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
