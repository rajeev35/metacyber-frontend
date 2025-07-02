import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Features.css';

export default function Features() {
  return (
    <>
      <section className="features">
        <div className="container">
          <h2 className="features-title">Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3 className="feature-name">Aadhar, PAN & Passport</h3>
              <p className="feature-desc">
                Online form filling for all government IDs.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎫</div>
              <h3 className="feature-name">Train, Flight & Hotel</h3>
              <p className="feature-desc">
                Easy booking with best available rates.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3 className="feature-name">Resume & Documents</h3>
              <p className="feature-desc">
                Professional CVs, editing & PDF conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918789242056"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
