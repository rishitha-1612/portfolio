import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-border text-center relative overflow-hidden mt-auto">
      <div className="absolute inset-0 bg-accent/5 blur-[100px] pointer-events-none" />
      <p className="text-muted text-xs font-bold uppercase tracking-[0.5em] relative z-10">
        &copy; {new Date().getFullYear()} Rishitha Rasineni
      </p>
    </footer>
  );
};
