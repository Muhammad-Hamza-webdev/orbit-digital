import React from 'react';
import Container from '../Common/Container';
import SectionHeading from '../Common/SectionHeading';
import { Users, Code2, BarChart3, UserCheck } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    iconVariant: 'primary',
    title: 'One Unified Team',
    desc: "One team for development, design, automation, and marketing — no handoffs, no miscommunication between vendors.",
  },
  {
    icon: Code2,
    iconVariant: 'accent',
    title: 'Modern Tech Stack',
    desc: 'Modern tech stack: Next.js, Shopify, WordPress, and AI-powered tools built for speed and Core Web Vitals.',
  },
  {
    icon: BarChart3,
    iconVariant: 'primary',
    title: 'Transparent Reporting',
    desc: "Transparent reporting — you see exactly what's working, and what we're changing next.",
  },
  {
    icon: UserCheck,
    iconVariant: 'accent',
    title: 'Direct Expert Access',
    desc: 'Direct access to the people doing the work, not a rotating account manager.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section section-bg-white">
      <Container>
        <SectionHeading
          badge="Why Orbit Digital"
          title="Why Businesses Choose Orbit Digital"
          description="We group our services into four connected pillars to replace disjointed vendors with a single, high-performing partner."
          align="center"
        />

        <div className="grid grid-2 sm-gap">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="card card-hover">
                <div className="feature-card__header">
                  <div className={`feature-card__icon feature-card__icon--${item.iconVariant}`}>
                    <IconComponent size={22} />
                  </div>
                  <h3 className="heading-4 feature-card__title">{item.title}</h3>
                </div>
                <p className="feature-card__desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
