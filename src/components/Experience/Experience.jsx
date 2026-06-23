import React from 'react';
import { Briefcase, FileText, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Développeur Full-Stack',
    company: 'Ncl auto services',
    date: '2024 - 2025',
    desc: 'Amélioration des fonctionnalités front-end en utilisant React et Next.js tout en développant des API robustes avec TypeScript RPC. Contribution à la qualité du code par des revues approfondies et de la documentation. Collaboration efficace dans un environnement agile via des réunions quotidiennes et la planification des sprints.'
  },
  {
    role: 'Développeur Full Stack',
    company: 'DHCT',
    date: '2024',
    desc: 'Développement et maintenance d\'une application web avec React.js lors d\'un stage. Collaboration en équipe pour implémenter de nouvelles fonctionnalités et optimiser l\'existant. Expérience pratique en développement front-end et résolution de problèmes en télétravail.'
  },
  {
    role: 'Développeur Full Stack',
    company: 'Clinique Medicale',
    date: '2024',
    desc: 'Conception et développement d\'un site web moderne pour la Clinique Médicale.'
  },
];

export default function Experience({ onViewCertificate }) {
  return (
    <section id="experience" className="section-py">
      <div className="section-container">
        <div className="exp-section-title">
          <h2 className="section-title">Parcours &amp; <span className="gradient-text">Expérience</span></h2>
          <div className="title-divider" />
        </div>

        <div className="exp-single-column">
          <h3 className="exp-column-heading">
            <Briefcase size={20} className="exp-heading-blue" /> Historique Professionnel
          </h3>
          <div className="timeline-container">
            {experiences.map((e, i) => (
              <div key={i} className="timeline-item-wrap">
                <div className="timeline-dot-blue" />
                <div className="glass-card exp-card">
                  <div className="exp-card-header">
                    <div>
                      <h4 className="exp-role-title">{e.role}</h4>
                      <p className="exp-company-sub">{e.company}</p>
                    </div>
                    <span className="badge badge-blue">
                      <Calendar size={12} /> {e.date}
                    </span>
                  </div>
                  <p className="exp-description">{e.desc}</p>
                  <div className="exp-card-footer">
                    <button
                      onClick={() => onViewCertificate('/certificate_mock.png')}
                      className="exp-cert-btn"
                    >
                      <FileText size={14} /> Certificat d'expérience
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
