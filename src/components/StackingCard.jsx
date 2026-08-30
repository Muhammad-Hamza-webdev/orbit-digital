'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StackingCard.module.css';
import {
  Palette,
  FileText,
  LayoutGrid,
  Image as ImageIcon,
  Share2,
  Package,
  Presentation,
  Video,
  Monitor,
  Smartphone,
  Columns3,
  Mail,
  Globe,
  Workflow,
  Box,
  ShoppingBag,
  Code2,
  Triangle,
  Database,
  Zap,
  Search,
  Target,
  Code,
  Users,
  BarChart3
} from 'lucide-react';

const servicesCardsData = [
  {
    id: 'service-1',
    title: 'Branding and Identity',
    description: 'Build a memorable brand that stands out in the market and resonates with your target audience.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    tags: [
      { name: 'Logo Design', icon: Palette },
      { name: 'Brand Identity and Guidelines', icon: FileText },
      { name: 'Sub-brand Systems', icon: LayoutGrid },
      { name: 'Visual Direction and Strategy', icon: ImageIcon }
    ]
  },
  {
    id: 'service-2',
    title: 'Graphic Design',
    description: 'Eye-catching designs that communicate your message effectively across all marketing channels.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop',
    tags: [
      { name: 'Ad Creatives', icon: ImageIcon },
      { name: 'Social Media Design', icon: Share2 },
      { name: 'Banners and Web Graphics', icon: LayoutGrid },
      { name: 'Flyers and Brochures', icon: FileText },
      { name: 'Packaging and Label Design', icon: Package },
      { name: 'Pitch Decks and Presentations', icon: Presentation },
      { name: 'Marketing and Print Design', icon: Palette },
      { name: 'Video & Motion Graphics', icon: Video }
    ]
  },
  {
    id: 'service-3',
    title: 'UI/UX & Product Design',
    description: 'User-centered designs that create delightful experiences and drive conversions.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop',
    tags: [
      { name: 'Website UI Design', icon: Monitor },
      { name: 'Mobile App Design', icon: Smartphone },
      { name: 'Dashboard Interfaces', icon: Columns3 },
      { name: 'Landing Pages', icon: LayoutGrid },
      { name: 'Email Design Templates', icon: Mail }
    ]
  },
  {
    id: 'service-4',
    title: 'Website Development',
    description: 'Custom-built websites and web applications tailored to your business needs with modern technologies.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tags: [
      { name: 'Figma to Website Design', icon: Palette },
      { name: 'WordPress Development', icon: Globe },
      { name: 'Webflow Development', icon: Workflow },
      { name: 'Framer Websites', icon: Box },
      { name: 'Shopify E-commerce', icon: ShoppingBag },
      { name: 'Custom React.js Applications', icon: Code2 },
      { name: 'Next.js Development', icon: Triangle },
      { name: 'Full-Stack Development', icon: Database },
      { name: 'API Integration & Backend', icon: Zap }
    ]
  },
  {
    id: 'service-5',
    title: 'SEO & Social Media Marketing',
    description: 'Get discovered online and build a strong social presence that drives traffic and generates leads.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: [
      { name: 'SEO Audit & Strategy', icon: Search },
      { name: 'Keyword Research & Optimization', icon: Target },
      { name: 'On-Page SEO', icon: FileText },
      { name: 'Technical SEO', icon: Code },
      { name: 'Content Marketing', icon: LayoutGrid },
      { name: 'Social Media Strategy', icon: Share2 },
      { name: 'Community Management', icon: Users },
      { name: 'Analytics & Reporting', icon: BarChart3 }
    ]
  }
];

const topOffsets = [119.067, 153.167, 187.267, 221.367, 257.467];
const scaleValues = [0.85, 0.885, 0.92, 0.955, 0.99];

export default function StackingCard() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(`.${styles.stackingCard}`);

      cards.forEach((card, index) => {
        const pinTop = topOffsets[index] || 120 + index * 34;

        ScrollTrigger.create({
          trigger: card,
          start: `top ${pinTop}px`,
          endTrigger: `.${styles.stacking}`,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true
        });

        if (index < cards.length - 1) {
          const nextPinTop = topOffsets[index + 1] || 120 + (index + 1) * 34;
          gsap.to(card, {
            scrollTrigger: {
              trigger: cards[index + 1],
              start: `top 90%`,
              end: `top ${nextPinTop}px`,
              scrub: true,
              invalidateOnRefresh: true
            },
            scale: scaleValues[index],
            ease: 'none'
          });
        }
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className={styles.stackingMain}>
      <h1 className={styles.title}>Our Services</h1>

      <div className={styles.stacking}>
        {servicesCardsData.map((card, index) => (
          <div
            key={card.id}
            id={card.id}
            className={styles.stackingCard}
            style={{ zIndex: index + 1 }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              
              <div className={styles.tagsContainer}>
                {card.tags.map((tag, idx) => {
                  const TagIcon = tag.icon;
                  return (
                    <div key={idx} className={styles.tagPill}>
                      <TagIcon className={styles.tagIcon} size={16} />
                      <span>{tag.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.cardImageContainer}>
              <img
                src={card.image}
                alt={card.title}
                className={styles.cardImage}
                loading="lazy"
                onLoad={() => ScrollTrigger.refresh()}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
