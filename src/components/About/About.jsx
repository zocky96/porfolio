import React from 'react';
import { Mail, MapPin, GraduationCap } from 'lucide-react';
import './About.css';

const tags = [
  'Développement Web Full-Stack',
  'APIs Backend', 'React + Next.js', 'Node.js + Express',
  'TypeScript', 'MySQL', 'Pratiques DevOps (Docker)',
];

const education = [
  { degree: 'Sciences et Génie Informatique (UNASMOH)', school: 'Universite Americaine des sciences moderne d\'haiti', date: 'Nov 2017 - Dec 2022', grade: '' },
  { degree: 'Secondaire', school: 'Lycee national philippe Guerrier', date: '2009 - 2016', grade: '' }
];

const info = [
  { Icon: Mail, label: 'Email', value: 'desirrenaldo03@gmail.com' },
  { Icon: MapPin, label: 'Localisation', value: 'Cap-Haïtien, HAÏTI' },
  { Icon: GraduationCap, label: 'Éducation', value: 'Sciences et Génie Informatique (UNASMOH)' },
];

export default function About() {
  return (
    <section id="about" className="section-py">
      <div className="section-container">
        <div className="section-title-wrap">
          <h2 className="section-title">À propos de <span className="gradient-text">Moi</span></h2>
          <div className="title-divider" />
        </div>

        <div className="about-grid">
          <div className="glass-card about-card">
            <p className="about-text">
              Je suis un développeur passionné par la création de systèmes logiciels évolutifs et performants.
              J'interviens aussi bien sur le développement full-stack que sur l'intégration de technologies modernes.
              J'aime utiliser mes compétences solides en backend et les technologies web actuelles pour résoudre des
              problèmes concrets et concevoir des applications fiables.
            </p>

            <div className="about-info-list">
              {info.map(({ Icon, label, value }) => (
                <div key={label} className="about-info-item">
                  <div className="about-info-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="about-info-label">{label}</p>
                    <p className="about-info-value">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-tags-section">
              <p className="about-tags-heading">Domaines Clés</p>
              <div className="about-tags-wrap">
                {tags.map((t) => <span key={t} className="badge badge-blue">{t}</span>)}
              </div>
            </div>
          </div>

          <div className="about-edu-col">
            <h3 className="about-edu-heading">
              <GraduationCap size={20} className="about-edu-icon" /> Formation
            </h3>
            <div className="about-edu-list">
              {education.map((e) => (
                <div key={e.degree} className="glass-card about-edu-card">
                  <h4 className="about-edu-degree">{e.degree}</h4>
                  <p className="about-edu-school">{e.school}</p>
                  <div className="about-edu-footer">
                    <span>{e.date}</span>
                    <span className="about-edu-grade">{e.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
