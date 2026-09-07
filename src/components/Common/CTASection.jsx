import React from 'react';
import Container from './Container';
import Button from './Button';

export default function CTASection({
  title,
  titlePart,
  titleHighlight,
  titleQuestion = '',
  description,
  buttonText = 'Start Your Project ↗',
  buttonHref = '/contact',
  buttonVariant = 'accent',
  bgSurface = true,
  className = '',
}) {
  const renderedTitle = title || (
    <>
      {titlePart}
      {titleHighlight && (
        <span className="frprotech-gradient-text">{titleHighlight}</span>
      )}
      {titleQuestion}
    </>
  );

  return (
    <section className={`section ${bgSurface ? 'section-bg-surface' : ''} ${className}`.trim()}>
      <Container>
        <div className="card cta-banner-card">
          <h2 className="heading-2 cta-banner-card__title">
            {renderedTitle}
          </h2>
          {description && (
            <p className="cta-banner-card__text">
              {description}
            </p>
          )}
          <Button href={buttonHref} variant={buttonVariant} size="lg" className="frprotech-btn-pill">
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
