"use client";

import React, { useState } from 'react';
import Button from '../Common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web-development',
    budget: '$10k - $25k',
    message: ''
  });

  const [status, setStatus] = useState({ submitted: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end state handling demonstration as per spec section 31
    setStatus({
      submitted: true,
      message: "Thank you for reaching out! Orbit Digital's team will contact you within 24 hours."
    });
  };

  return (
    <div className="card" style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
      <h3 className="heading-3" style={{ marginBottom: '8px' }}>
        Start a Conversation
      </h3>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
        Tell us about your project requirements and target timeline.
      </p>

      {status.submitted ? (
        <div style={{ padding: '24px', backgroundColor: '#DCFCE7', borderRadius: 'var(--radius-md)', border: '1px solid #86EFAC', color: '#166534' }}>
          <h4 style={{ fontWeight: '800', marginBottom: '8px', fontSize: '1.1rem' }}>Message Received!</h4>
          <p>{status.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Elena Rostova"
                style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="elena@company.com"
                style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div>
              <label htmlFor="phone" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}
              />
            </div>

            <div>
              <label htmlFor="service" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>
                Primary Service Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}
              >
                <option value="web-development">Web Development & Architecture</option>
                <option value="ui-ux-design">UI/UX Product Design</option>
                <option value="digital-strategy">Digital Product Strategy</option>
                <option value="cloud-mobile">Cloud Solutions & Mobile Apps</option>
                <option value="brand-identity">Brand Identity & Motion</option>
                <option value="growth-seo">SEO & Growth Engineering</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="budget" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>
              Project Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}
            >
              <option value="<$10k">Under $10,000</option>
              <option value="$10k - $25k">$10,000 - $25,000</option>
              <option value="$25k - $50k">$25,000 - $50,000</option>
              <option value="$50k+">$50,000+</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>
              Project Summary & Goals *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project, goals, key features, and timeline..."
              style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', resize: 'vertical' }}
            />
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth>
            Submit Inquiry
          </Button>
        </form>
      )}
    </div>
  );
}
