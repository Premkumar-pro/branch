import React from 'react';

const Hero = ({ title = "Welcome", subtitle = "This is a simple hero section.", ctaText = "Get Started", onCta }) => {
  return (
    <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', background: '#f5f7ff' }}>
      <div style={{ maxWidth: 720, textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.25rem', margin: '0 0 1rem' }}>{title}</h1>
        <p style={{ color: '#555', margin: '0 0 1.5rem' }}>{subtitle}</p>
        <button
          onClick={onCta}
          style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.75rem 1.25rem', borderRadius: 6, cursor: 'pointer' }}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero;