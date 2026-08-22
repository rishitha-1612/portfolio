import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import PixelTransition from '../components/PixelTransition';
import { RESUME_DATA } from '../constants';

const CATEGORIES = ['Certificates', 'Research', 'Achievements', 'Hackathons'];

export const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('Certificates');

  const getData = () => {
    if (activeCategory === 'Research') return (RESUME_DATA as any).research || [];
    if (activeCategory === 'Achievements') return RESUME_DATA.achievements || [];
    if (activeCategory === 'Hackathons') return (RESUME_DATA as any).hackathons || [];
    return RESUME_DATA.certifications || [];
  };

  const dataToDisplay = getData();

  return (
    <motion.section 
      className="py-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading number="05">Certificates & Achievements</SectionHeading>

      {/* ── Category Navigation ── */}
      <div className="w-full mb-16 border-b border-border overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="flex min-w-max md:min-w-0 md:w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative flex-1 shrink-0 py-3 px-4 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-center ${
                activeCategory === cat ? 'text-accent' : 'text-muted hover:text-fg'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="cert-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{
                    maskImage: `url("data:image/svg+xml,%3Csvg width='16' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3 Q4 1 8 3 T16 3' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='16' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3 Q4 1 8 3 T16 3' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    maskRepeat: 'repeat-x',
                    WebkitMaskRepeat: 'repeat-x',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center'
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content Grid ── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {dataToDisplay.map((item: any, idx: number) => (
            <motion.a
              key={item.title}
              href={item.link || '#'}
              target={item.link ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`block border border-border hover:border-accent transition-all group relative overflow-hidden ${item.link ? 'cursor-pointer hover:bg-white/[0.02]' : 'cursor-default'}`}
            >
              <PixelTransition
                firstContent={
                  <img
                    src={item.image ?? '/placeholder.png'}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                }
                secondContent={
                  <div className="w-full h-full bg-[#111] p-6 flex flex-col justify-center text-left relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-accent transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                      {item.issuer} {item.year ? `| ${item.year}` : ''}
                    </div>
                    <h4 className="text-xl font-display mb-3 text-white">
                      {item.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                      {item.description}
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="var(--color-accent)"
                once={false}
                className="custom-pixel-card"
                style={{ width: '100%', height: '300px' }}
              />
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
