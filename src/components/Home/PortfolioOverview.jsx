import React from 'react';
import Container from '../Common/Container';
import SectionHeading from '../Common/SectionHeading';
import ProjectCard from '../Portfolio/ProjectCard';
import Button from '../Common/Button';
import { projectsData } from '../../data/projects';

export default function PortfolioOverview({ limit = 3 }) {
  const featuredProjects = projectsData.slice(0, limit);

  return (
    <section className="section section-bg-surface">
      <Container>
        <SectionHeading
          badge="Featured Portfolio"
          title="Case Studies & Digital Impact"
          description="A selection of high-performance web applications, enterprise platforms, and digital products engineered by Orbit Digital."
          align="center"
        />

        <div className="grid grid-3" style={{ marginBottom: '48px' }}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button href="/portfolio" variant="primary" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
