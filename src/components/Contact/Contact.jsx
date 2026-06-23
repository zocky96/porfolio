import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-py">
      <div className="section-container">

        <div className="contact-section-title">
          <h2 className="section-title">Contactez-<span className="gradient-text">moi</span></h2>
          <div className="title-divider" />
        </div>

        <div className="contact-grid">

          <div className="contact-info-col">
            <h3 className="contact-info-heading">
              Bâtissons quelque chose de formidable ensemble !
            </h3>
            <p className="contact-info-desc">
              Je suis ouvert aux contrats, au conseil logiciel, aux collaborations ou aux opportunités de développeur à plein temps.
              Laissez-moi un message et je vous répondrai sous 24 heures.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="contact-label">Email Direct</h4>
                  <div className="contact-value">
                    <a href="mailto:desirrenaldo03@gmail.com">desirrenaldo03@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="contact-label">Localisation</h4>
                  <div className="contact-value">Cap-Haïtien, Haïti</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="contact-label">Téléphone</h4>
                  <div className="contact-value">
                    <a href="tel:+50934951243">+509 3495-1243</a>
                  </div>
                  <div className="contact-value">
                    <a href="tel:+50941732075">+509 4173-2075</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="glass-card contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div>
                  <label htmlFor="name" className="contact-form-label">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="votre nom"
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="contact-form-label">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="utilisateur@exemple.com"
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="contact-form-label">
                    Votre Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    placeholder="Bonjour Renaldo, parlons de..."
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'success' && (
                  <div className="contact-status contact-status-success">
                    <CheckCircle2 size={18} className="contact-status-icon" />
                    Message envoyé avec succès ! Merci.
                  </div>
                )}

                {status === 'error' && (
                  <div className="contact-status contact-status-error">
                    <AlertCircle size={18} className="contact-status-icon" />
                    Veuillez remplir tous les champs.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="contact-form-btn"
                >
                  {status === 'sending' ? (
                    <>
                      Envoi en cours...
                      <span className="loading-spinner" />
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
