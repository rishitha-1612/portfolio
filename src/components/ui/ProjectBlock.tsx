import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectBlock = ({ project }: { project: any }) => {
  // @ts-ignore - demo property added dynamically to constant
  const githubLink = project.link.includes('github.com') ? project.link : null;
  // @ts-ignore - demo property added dynamically to constant
  const demoLink = project.demo || (!project.link.includes('github.com') && project.link !== '#' ? project.link : null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border-b border-border py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white/[0.02] transition-all duration-500 px-4"
    >
      <div className="max-w-2xl">
        <h3 className="text-3xl font-display uppercase mb-4 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-muted text-lg mb-6 leading-relaxed">{project.description}</p>
        
        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-8 space-y-3">
            {project.achievements.map((ach: string, i: number) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-sm text-muted"
              >
                <div className="mt-1.5 w-1.5 h-1.5 bg-accent shrink-0 shadow-[0_0_8px_var(--color-accent)]" />
                <span>{ach}</span>
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-border text-muted group-hover:border-accent/30 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4">
        <motion.a 
          whileHover={{ scale: 1.1, rotate: 5 }}
          href={demoLink || '#'} 
          target={demoLink ? "_blank" : undefined}
          rel="noreferrer" 
          className={`p-4 border border-border hover:border-accent hover:text-accent transition-all ${demoLink ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}
          title="Live Demo"
        >
          <ExternalLink className="w-6 h-6" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1, rotate: -5 }}
          href={githubLink || '#'} 
          target={githubLink ? "_blank" : undefined}
          rel="noreferrer"
          className={`p-4 border border-border hover:border-accent hover:text-accent transition-all ${githubLink ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}
          title="GitHub Repository"
        >
          <Github className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.div>
  );
};
