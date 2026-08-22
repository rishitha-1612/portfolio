import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Github, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RESUME_DATA } from '../constants';

// Derive unique categories from project data
const ALL_CATEGORY = 'All Projects';
const CATEGORIES = [
  ALL_CATEGORY,
  ...Array.from(new Set(RESUME_DATA.projects.map((p: any) => p.category))).sort(),
];

// Individual collapsible project card
const ProjectCard = ({
  project,
  index,
  isRight,
}: {
  key?: string;
  project: any;
  index: number;
  isRight: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const githubLink = project.link?.includes('github.com') ? project.link : null;
  const demoLink = project.demo ?? null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isRight ? 40 : -40 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative w-full md:w-[calc(50%-2rem)] ${isRight ? 'md:ml-auto' : ''}`}
    >
      {/* Timeline dot */}
      <div
        className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)] ${
          isRight ? '-left-[calc(2rem+6px)]' : '-right-[calc(2rem+6px)]'
        }`}
      />

      {/* Card */}
      <div
        className="border border-border hover:border-accent/40 transition-colors duration-300 cursor-pointer group"
        onClick={() => setOpen((o) => !o)}
      >
        {/* Collapsed header — always visible */}
        <div className="flex items-start justify-between gap-4 p-6">
          <div className="min-w-0">
            <h3 className="text-xl font-display uppercase font-bold group-hover:text-accent transition-colors duration-300 truncate">
              {project.title}
            </h3>
            <p className="text-muted text-sm mt-1 leading-snug line-clamp-2">
              {project.subtitle}
            </p>
          </div>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 mt-1 text-muted group-hover:text-accent transition-colors duration-300"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="px-6 pb-6 border-t border-border pt-4">
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {project.achievements && project.achievements.length > 0 && (
                  <div className="mb-5 space-y-2">
                    {project.achievements.map((ach: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-muted">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-accent shrink-0 shadow-[0_0_8px_var(--color-accent)]" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech tags */}
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t: string) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-border text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                  {githubLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 border border-border hover:border-accent hover:text-accent transition-all"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}
                  {demoLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 border border-border hover:border-accent hover:text-accent transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const navRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === ALL_CATEGORY
      ? RESUME_DATA.projects
      : RESUME_DATA.projects.filter((p: any) => p.category === activeCategory);

  return (
    <motion.section
      className="py-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading number="03">Projects</SectionHeading>

      {/* ── Category Navigation ── */}
      <div
        ref={navRef}
        className="w-full mb-16 border-b border-border overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex min-w-max md:min-w-0 md:w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`category-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`relative flex-1 shrink-0 py-3 px-4 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-200 text-center ${
                activeCategory === cat
                  ? 'text-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="active-tab-indicator"
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

      {/* ── Project Count ── */}
      <div className="mb-10 flex items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeCategory}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-bold uppercase tracking-widest text-muted"
          >
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== ALL_CATEGORY ? ` in ${activeCategory}` : ''}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── Zig-Zag Timeline ── */}
      <div className="relative">
        {/* Centre spine (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

        <AnimatePresence mode="popLayout">
          <div className="flex flex-col gap-8">
            {filtered.map((project: any, idx: number) => {
              // @ts-ignore - React 19 key prop warning
              return (
                <ProjectCard
                  key={`${project.title}-${activeCategory}`}
                  project={project}
                  index={idx}
                  isRight={idx % 2 === 1}
                />
              );
            })}
          </div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted text-center py-20"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </motion.section>
  );
};
