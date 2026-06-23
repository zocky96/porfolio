import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 'new-look-auto',
    title: 'New Look Auto : Logiciel de Gestion de Garage & Atelier en C#',
    name: 'New Look Auto',
    gradient: 'radial-gradient(circle, #f87171, #f87171, #7f1d1d)',
    accentColor: '#dc2626',
    image: '/projects/Screenshot 2026-06-23 090134.png',
    desc: 'Logiciel de bureau robuste développé en C# (.NET) conçu pour optimiser la gestion quotidienne d\'un garage de mécanique.',
    bullets: [
      'Développement d\'une application de bureau performante avec l\'écosystème C# / .NET pour le contrôle de l\'atelier.',
      'Suivi complet des ordres de réparation (OR) et de l\'historique des interventions par véhicule.',
      'Gestion unifiée des fiches clients, de la facturation et de la génération automatique des devis.',
      'Utilisation d\'une base de données MySQL pour la persistance locale et la sécurité des données.',
    ],
    tech: ['C#', '.NET', 'MySQL', 'Windows Forms'],
    link: 'https://github.com/zocky96',
  },
  {
    id: 'ncl-auto-services',
    title: 'Ncl Auto Services : Logiciel de Bureau de Gestion de Garage & Suivi Automobile',
    name: 'Ncl Auto Services',
    gradient: 'radial-gradient(circle, #00c9a7, #00c9a7, #005b4f)',
    accentColor: '#009689',
    image: '/projects/siteease.png',
    desc: 'Logiciel de bureau performant développé avec Electron pour automatiser les flux de travail des ateliers mécaniques et de maintenance.',
    bullets: [
      'Développement d\'une application de bureau autonome convertie en exécutable (.exe) pour Windows via Electron.',
      'Conception et intégration d\'une base de données relationnelle locale et robuste avec MySQL pour le stockage sécurisé des données.',
      'Création d\'un tableau de bord de suivi en temps réel des réparations et de la disponibilité des ponts.',
      'Intégration d\'outils complets de planification de rendez-vous, d\'inventaire de pièces de rechange et de génération de factures.',
    ],
    tech: ['Electron', 'ReactJS', 'MySQL', 'NodeJS', 'TailwindCSS'],
    link: 'https://github.com/zocky96',
  },
];

export default function Projects() {
  return (
    <section id="projects">

      <div className="projects-header">
        <h2 className="section-title">Mes Projets</h2>
        <div className="title-divider projects-header-divider" />
      </div>

      {projects.map((p) => (
        <div
          key={p.id}
          className="project-panel"
        >
          <div className="project-inner">
            <div className="project-visual">
              <div className="project-visual-border">
                <div className="project-visual-inner" style={{ background: p.gradient }}>
                  <div className="project-visual-title">{p.title}</div>
                  <div className="project-preview-img-wrap">
                    {p.image ? (
                      <img src={p.image} alt={p.name + ' preview'} />
                    ) : (
                      <div className="project-console-mock">
                        <div className="project-console-dots">
                          {['#ef4444','#f59e0b','#22c55e'].map((c,i) => (
                            <div
                              key={i}
                              className="project-console-dot"
                              style={{ background: c, animation: `blink ${0.8 + i*0.2}s infinite` }}
                            />
                          ))}
                        </div>
                        <span className="project-console-text">Chargement de la console...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <div className="project-name-row">
                <div className="project-accent-bar" style={{ background: p.accentColor }} />
                <h3 className="project-name">{p.name}</h3>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-checkout-btn">
                  Voir sur GitHub <ExternalLink size={14} />
                </a>
              </div>

              <p className="project-desc">{p.desc}</p>

              <ul className="project-bullets">
                {p.bullets.map((b, i) => (
                  <li key={i} className="project-bullet">
                    <span
                      className="project-bullet-dot"
                      style={{ background: p.accentColor }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="project-tech-list">
                {p.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="projects-view-all">
        <a href="https://github.com/zocky96" target="_blank" rel="noopener noreferrer">
          <button className="view-all-btn">
            Voir tous les projets
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </a>
      </div>
    </section>
  );
}
