import React from 'react';
import CTASection from '../Common/CTASection';
import { siteData } from '../../data/siteData';

export default function ClosingCTA() {
  const { cta } = siteData.home;

  return (
    <CTASection
      titlePart={cta.titlePart}
      titleHighlight={cta.titleHighlight}
      titleQuestion={cta.titleQuestion}
      description={cta.description}
      buttonText={cta.buttonText}
      buttonHref={cta.buttonHref}
      buttonVariant={cta.buttonVariant}
      bgSurface={cta.bgSurface}
    />
  );
}
