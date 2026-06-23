import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './CertificateModal.css';

export default function CertificateModal({ isOpen, imageSrc, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className={`modal-overlay open`}
      onClick={onClose}
    >
      <div 
        className="modal-img-wrap"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Fermer la visionneuse de certificat"
        >
          <X size={20} />
        </button>

        <img
          src={imageSrc}
          alt="Aperçu du certificat"
        />
      </div>
    </div>
  );
}
