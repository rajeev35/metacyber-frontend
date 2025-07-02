import React from 'react';
import './Promotions.css';

export default function Promotions() {
  return (
    <section className="promotions">
      <div className="container">
        <h2 className="promotions-title">Special Offers</h2>
        <div className="promotions-grid">
          <div className="promo-card">
            <div className="promo-icon">⚡</div>
            <h3 className="promo-name">Express Form Filling</h3>
            <p className="promo-desc">PAN/Aadhar delivered in 30 minutes.</p>
          </div>

          <div className="promo-card">
            <div className="promo-icon">🔖</div>
            <h3 className="promo-name">Resume Boost</h3>
            <p className="promo-desc">Professional CV at just ₹99.</p>
          </div>

          <div className="promo-card">
            <div className="promo-icon">🎫</div>
            <h3 className="promo-name">Ticket Discounts</h3>
            <p className="promo-desc">Save up to 15% on bookings.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
