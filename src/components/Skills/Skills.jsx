import React, { useState } from 'react';
import { Code, Globe, Server, Layers, Settings } from 'lucide-react';
import './Skills.css';

const tabs = [
  { id: 'programming', label: 'Langages de programmation', icon: Code },
  { id: 'frontend', label: 'Développement Frontend', icon: Globe },
  { id: 'backend', label: 'Développement Backend', icon: Server },
  { id: 'cloud', label: 'Cloud & Déploiement', icon: Layers },
];

const skills = {
  programming: [
    { name: 'JavaScript' }, { name: 'Python' }, { name: 'C#' }, { name: 'Dart' }, { name: 'R' }
  ],
  frontend: [
    { name: 'React.js' }, { name: 'Next.js' }, { name: 'HTML5 & CSS3' }, { name: 'Tailwind CSS' },
  ],
  backend: [
    { name: 'Node.js' }, { name: 'Express.js' }, { name: 'MySQL' },
    { name: 'Redis' }, { name: 'REST APIs' },
  ],
  cloud: [
    { name: 'Docker' }, { name: 'Git & GitHub' },
  ],
};

const tools = ['Git', 'GitHub', 'thunder client', 'Gemini', 'ChatGPT'];

export default function Skills() {
  const [active, setActive] = useState('programming');

  const TabIcon = tabs.find((t) => t.id === active)?.icon || Code;

  return (
    <section id="skills" className="section-py">
      <div className="section-container">
        <div className="section-title-wrap">
          <h2 className="section-title">Compétences <span className="gradient-text">Techniques</span></h2>
          <div className="title-divider" />
        </div>

        <div className="skill-tabs">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`skill-tab${active === id ? ' active' : ''}`}
              onClick={() => setActive(id)}
            >
              <Icon size={18} />
              <span className="tab-label">{label}</span>
            </button>
          ))}
        </div>

        <div key={active} className="tab-content-active glass-card skill-content-card">
          <h3 className="skill-content-heading">
            <TabIcon size={18} className="skill-icon-blue" />
            <span className="gradient-text">{tabs.find(t => t.id === active)?.label}</span>
          </h3>
          <div className="skill-grid">
            {skills[active].map((sk) => (
              <div key={sk.name} className="glass-card skill-card">
                <div className="skill-card-icon">
                  <Code size={16} />
                </div>
                <p className="skill-card-name">{sk.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card tools-card">
          <h3 className="tools-heading">
            <Settings size={16} className="tools-icon-purple" /> Outils additionnels &amp; Intégration LLM
          </h3>
          <div className="tools-list">
            {tools.map((t) => (
              <span key={t} className="tool-badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
