import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'gold' | 'black' | 'white';
}

export default function Logo({ className = "", variant = 'gold' }: LogoProps) {
  const colorClass = {
    gold: 'text-gold',
    black: 'text-black',
    white: 'text-white'
  }[variant];

  return (
    <div className={`flex items-center ${className}`}>
      <span 
        className={`font-signature text-4xl md:text-5xl lg:text-7xl py-1 bg-clip-text text-transparent`}
        style={{ backgroundImage: 'var(--background-gold-gradient)' }}
      >
        Charles Guy Etienne
      </span>
    </div>
  );
}
