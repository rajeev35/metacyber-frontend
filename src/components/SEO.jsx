// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
  return (
    <Helmet>
      <title>Metacyber – Online Cyber Café for Forms, Tickets & More</title>
      <meta name="description" content="Metacyber offers 100% online form filling (Aadhar, PAN, Passport), ticket bookings, resume services & more. Fast, secure & affordable." />
      <meta name="keywords" content="form filling, Aadhar PAN, Passport online, ticket booking, resume service, digital cyber café" />
      <link rel="canonical" href="https://metacyber.netlify.app/" />
      {/* Open Graph for social sharing */}
      <meta property="og:title" content="Metacyber – Your Digital Cyber Café" />
      <meta property="og:description" content="Get Aadhar, PAN, Passport forms filled, book train/flight tickets, build resumes & more – all online!" />
      <meta property="og:image" content="https://metacyber.netlify.app/metacyber.png" />
      <meta property="og:url" content="https://metacyber.netlify.app/" />
      <meta property="og:type" content="website" />
        <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Metacyber",
        "image": "https://metacyber.netlify.app/metacyber.png",
        "telephone": "+918789242056",
        "email": "metacyberservices@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delhi",
          "addressCountry": "IN"
        },
        "url": "https://metacyber.netlify.app/",
        "priceRange": "₹",
        "description": "Online cyber café for form filling, tickets & resume services."
      }
    `}
  </script>
    </Helmet>
  );
}
