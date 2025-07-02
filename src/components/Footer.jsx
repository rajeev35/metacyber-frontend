// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-col">
          <img
            src="/metacyber.png"
            alt="Metacyber"
            className="footer-logo"
          />
          <p>Your one-stop digital cyber café. Fast, secure & 100% online.</p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Aadhar, PAN & Passport</li>
            <li>Train, Flight & Hotel</li>
            <li>Resume & Documents</li>
            <li>Scholarships & Exams</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Help Center</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>
            Email:{' '}
            <a href="mailto:metacyberservices@gmail.com">
              metacyberservices@gmail.com
            </a>
          </p>
          <p>
            WhatsApp:{' '}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 8789242056
            </a>
          </p>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=61577802190111" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/metacyber.in/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/metacyberservices/?viewAsMember=true" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Metacyber. All rights reserved.
      </div>
    </footer>
  );
}
