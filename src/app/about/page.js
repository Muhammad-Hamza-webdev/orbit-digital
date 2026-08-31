import React from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import { teamData } from '../../data/team';

export const metadata = {
  title: "About Us | Orbit Digital",
  description: "Learn about Orbit Digital's mission, technical leadership team, and digital product architecture expertise.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="section-badge">Who We Are</span>
            <h1 className="heading-1" style={{ marginBlock: '16px 24px' }}>
              We Are <span className="text-gradient">Orbit Digital</span>
            </h1>
            <p className="text-lead">
              A boutique digital agency specializing in Next.js performance engineering, fluid responsive design systems, and enterprise cloud solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <Container>
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-badge section-badge-accent">Our Mission</span>
              <h2 className="heading-2" style={{ marginBlock: '16px 24px' }}>
                Eliminating Responsive Friction & Architectural Debt
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
                At Orbit Digital, we believe digital applications should adapt naturally to human context — whether accessed on a 320px mobile viewport or a 3840px 4K display workstation.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                We eliminate fixed breakpoint hacks, bloated UI frameworks, and unmaintainable code, replacing them with fluid custom CSS architecture and modern Next.js engineering.
              </p>
            </div>

            <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-surface) 0%, #FFFFFF 100%)' }}>
              <h3 className="heading-3" style={{ marginBottom: '16px' }}>Core Agency Principles</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>01.</span>
                  <div>
                    <strong style={{ display: 'block' }}>Zero Symptom Patching</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>We fix underlying responsive & architectural root causes.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>02.</span>
                  <div>
                    <strong style={{ display: 'block' }}>Native Standard Web APIs</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Leveraging standard browser APIs and lightweight CSS over heavy libraries.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>03.</span>
                  <div>
                    <strong style={{ display: 'block' }}>Empirical Performance</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Core Web Vitals scores and accessibility compliance on every release.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section section-bg-surface">
        <Container>
          <SectionHeading
            badge="Leadership & Engineering"
            title="Meet the Minds Behind Orbit Digital"
            description="Our multi-disciplinary team brings together senior web architects, UI/UX strategists, and growth engineers."
            align="center"
          />

          <div className="grid grid-4">
            {teamData.map((member) => (
              <div key={member.id} className="card card-hover" style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', marginInline: 'auto', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: '800' }}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="heading-4" style={{ marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '700', marginBottom: '12px' }}>
                  {member.role}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
