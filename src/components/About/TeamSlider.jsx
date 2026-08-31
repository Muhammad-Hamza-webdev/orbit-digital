'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { teamData } from '../../data/team';

// Inline brand SVGs
const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

export default function TeamSlider() {
  const renderCard = (member) => (
    <div key={member.id} className="team-card">
      <div className="team-card__bar" />
      <div className="team-card__avatar-wrap">
        <img
          src={member.image}
          alt={member.name}
          className="team-card__avatar"
          loading="lazy"
        />
      </div>
      <div className="team-card__body">
        <h3 className="heading-4 team-card__title">{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <p className="team-card__bio">{member.bio}</p>

        <div className="team-card__socials">
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} className="team-card__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={16} />
            </a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter} className="team-card__social-link" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={16} />
            </a>
          )}
          {member.socials.github && (
            <a href={member.socials.github} className="team-card__social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
          )}
          {member.socials.dribbble && (
            <a href={member.socials.dribbble} className="team-card__social-link" aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Slider (0px - 550px) */}
      <div className="team-mobile-slider">
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '48px' }}
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              {renderCard(member)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid (> 550px) */}
      <div className="team-desktop-grid grid grid-4 gap-24">
        {teamData.map((member) => renderCard(member))}
      </div>
    </>
  );
}
