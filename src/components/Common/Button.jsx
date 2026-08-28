import React from 'react';
import Link from 'next/link';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'accent'
  size = 'md',        // 'sm' | 'md' | 'lg'
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  icon,
  className = '',
  ...props
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size !== 'md' ? `btn-${size}` : '';
  const fullWidthClass = fullWidth ? 'btn-full' : '';
  
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${fullWidthClass} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (href) {
    // Internal vs External Link Handling
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={combinedClasses} 
          target="_blank" 
          rel="noopener noreferrer" 
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={combinedClasses} 
      onClick={onClick} 
      {...props}
    >
      {content}
    </button>
  );
}
