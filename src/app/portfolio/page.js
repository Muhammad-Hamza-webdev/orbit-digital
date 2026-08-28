"use client";

import React, { useState } from 'react';
import Container from '../../components/Common/Container';
import SectionHeading from '../../components/Common/SectionHeading';
import ProjectCard from '../../components/Portfolio/ProjectCard';
import CtaSection from '../../components/Home/CtaSection';
import { projectsData } from '../../data/projects';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Cloud Solutions', 'Branding'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <>
      <section className="section section-bg-surface">
        <Container>
          <div style={{ maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="section-badge">Case Studies</span>
            <h1 className="heading-1" style={{ marginBlock: '16px 24px' }}>
              Engineered Works & <span className="text-gradient">Digital Impact</span>
            </h1>
            <p className="text-lead">
              Discover how Orbit Digital helps forward-thinking companies build responsive, scalable, and high-converting web applications.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
