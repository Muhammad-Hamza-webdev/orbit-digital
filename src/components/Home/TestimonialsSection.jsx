'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '../Common/Container';
import { testimonialsData } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="section section-bg-surface">
      <Container>
        <div className="section-heading text-center">
          <span className="section-badge">Client Testimonials</span>
          <h2 className="heading-2">
            Trusted by Fast-Growing{' '}
            <span className="frprotech-gradient-text">Enterprise Teams</span>
          </h2>
          <p className="text-lead" style={{ marginTop: '12px' }}>
            Hear what digital leaders say about partnering with Orbit Digital for product development and web architecture.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '48px' }}
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: '#F59E0B', fontSize: '1.2rem' }}>
                    {'★'.repeat(item.rating)}
                  </div>
                  <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-text)', marginBottom: '24px', lineHeight: '1.6' }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.2rem', flexShrink: 0 }}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>{item.author}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      {item.role} • <strong style={{ color: 'var(--color-secondary)' }}>{item.company}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
