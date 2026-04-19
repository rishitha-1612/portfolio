import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ExternalLink, 
  ArrowRight,
  ChevronRight,
  Code2,
  BrainCircuit,
  Database,
  Globe,
  Download
} from 'lucide-react';
import { RESUME_DATA } from './constants';

const DownloadButterflyButton = () => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleDownload = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Trigger actual download (replace '#' with your actual resume URL)
    const link = document.createElement('a');
    link.href = '#'; 
    link.download = 'Rishitha_Rasineni_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative mt-12 flex items-center">
      <motion.button
        onClick={handleDownload}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex items-center gap-4 py-2 font-display font-bold uppercase tracking-widest bg-transparent text-muted hover:text-white transition-all duration-300"
      >
        <span className="relative z-10">Download CV</span>
        
        <div className="relative w-6 h-6 flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {!isAnimating ? (
              <motion.div
                key="download-icon"
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <Download className="w-5 h-5 transition-all" />
              </motion.div>
            ) : (
              <motion.div
                key="butterfly-icon"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1.1, 1],
                  x: [0, 15, 30, 40],
                  y: [0, -15, -30, -40],
                }}
                transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                }}
                onAnimationComplete={() => setIsAnimating(false)}
                className="absolute pointer-events-none z-20"
              >
                <svg width="32" height="32" viewBox="0 0 40 40" className="filter drop-shadow-[0_0_10px_var(--color-accent)]">
                  <defs>
                    <linearGradient id="butterfly-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Left Side Wings */}
                  <motion.g
                    animate={{ rotateY: [0, 75, 0] }}
                    transition={{ repeat: Infinity, duration: 0.3, ease: "easeInOut" }}
                    style={{ originX: "20px" }}
                  >
                    {/* Left Upper Wing */}
                    <path 
                      d="M20 20 C20 10 5 8 4 18 C3 25 15 25 20 22" 
                      fill="url(#butterfly-grad)"
                    />
                    {/* Left Lower Wing */}
                    <path 
                      d="M20 22 C18 32 10 38 8 34 C6 30 15 22 20 22" 
                      fill="url(#butterfly-grad)"
                    />
                  </motion.g>

                  {/* Right Side Wings */}
                  <motion.g
                    animate={{ rotateY: [0, -75, 0] }}
                    transition={{ repeat: Infinity, duration: 0.3, ease: "easeInOut" }}
                    style={{ originX: "20px" }}
                  >
                    {/* Right Upper Wing */}
                    <path 
                      d="M20 20 C20 10 35 8 36 18 C37 25 25 25 20 22" 
                      fill="url(#butterfly-grad)"
                    />
                    {/* Right Lower Wing */}
                    <path 
                      d="M20 22 C22 32 30 38 32 34 C34 30 25 22 20 22" 
                      fill="url(#butterfly-grad)"
                    />
                  </motion.g>

                  {/* Central Body */}
                  <path d="M19.5 15 Q20 13 20.5 15 L20.5 32 Q20 34 19.5 32 Z" fill="#fff" />
                  
                  {/* Antennae */}
                  <path d="M19.5 16 Q18 12 14 10" stroke="#fff" fill="none" strokeWidth="0.5" />
                  <path d="M20.5 16 Q22 12 26 10" stroke="#fff" fill="none" strokeWidth="0.5" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
};

const SectionHeading = ({ children, number }: { children: React.ReactNode, number: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-16"
  >
    <div className="flex items-baseline gap-4 mb-4">
      <span className="font-display text-muted text-sm font-bold tracking-tighter">{number}</span>
      <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">{children}</h2>
    </div>
    <div className="h-[1px] w-full bg-border origin-left" />
  </motion.div>
);

const BrutalButton = ({ children, href, primary = false }: { children: React.ReactNode, href: string, primary?: boolean }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`
      inline-flex items-center gap-3 px-10 py-5 border-2 border-fg font-display font-bold uppercase tracking-widest transition-all duration-300
      ${primary ? 'bg-fg text-bg shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'bg-transparent text-fg hover:border-accent hover:text-accent'}
    `}
  >
    {children}
  </motion.a>
);

const ProjectBlock = ({ project }: { project: typeof RESUME_DATA.projects[0] }) => {
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
            {project.achievements.map((ach, i) => (
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
          {project.tech.map(t => (
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

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress, scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const lastScrollY = useRef(0);

  React.useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > lastScrollY.current && latest > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroScrollProgress = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(heroScrollProgress.scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(heroScrollProgress.scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(heroScrollProgress.scrollYProgress, [0, 0.5], [1, 0]);

  // Background glow movement
  const glowX1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glowY1 = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
  const glowX2 = useTransform(scrollYProgress, [0, 1], ["-10%", "-20%"]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], ["-10%", "-5%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white selection:bg-accent selection:text-white font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left shadow-[0_0_15px_var(--color-accent)]"
        style={{ scaleX }}
      />

      {/* Grid Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-10 pointer-events-none z-0" />
      
      {/* Background Glows */}
      <motion.div 
        style={{ left: glowX1, top: glowY1 }}
        className="fixed w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        style={{ right: glowX2, bottom: glowY2 }}
        className="fixed w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" 
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isNavVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-border"
      >
        <div className="max-w-[1600px] mx-auto px-8 py-6 flex justify-between items-center text-glow">
          <a href="#" className="text-2xl font-display font-black tracking-tighter hover:text-accent transition-colors">RR.</a>
          <div className="hidden md:flex gap-12">
            {['About', 'Skills', 'Projects', 'Certificates', 'Experience', 'Contact'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase() === 'certificates' ? 'certifications' : item.toLowerCase()}`} 
                className="text-xs font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10 max-w-[1600px] mx-auto px-8">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
          <motion.div
            style={{ y: y2, opacity }}
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-display font-bold uppercase tracking-[0.3em] mb-8 block text-glow"
            >
              Full-Stack AI Engineer
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] leading-[0.85] font-display font-black uppercase tracking-tighter mb-12"
            >
              Rishitha<br />
              <motion.span style={{ x: y1 }} className="inline-block text-muted">Rasineni</motion.span>
            </motion.h1>
            <DownloadButterflyButton />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-40">
          <SectionHeading number="01">About</SectionHeading>
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display leading-tight"
            >
              Building <span className="text-accent text-glow italic">intelligent architecture</span> that converts data into impact.
            </motion.div>
            <div className="space-y-8">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted leading-relaxed"
              >
                {RESUME_DATA.summary}
              </motion.p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Core Focus</h4>
                  <ul className="space-y-2 font-display text-xl">
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> Machine Learning</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> NLP Systems</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> Full-Stack Dev</li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Education</h4>
                  <div className="space-y-4">
                    {RESUME_DATA.education.map((edu, idx) => (
                      <div key={idx} className="font-display">
                        <div className="text-lg leading-tight">{edu.institution}</div>
                        <div className="text-muted text-sm">{edu.degree} ({edu.period})</div>
                        {edu.details && <div className="text-accent text-sm font-bold uppercase tracking-widest mt-1">{edu.details}</div>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-40">
          <SectionHeading number="02">Skills</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Languages", data: RESUME_DATA.skills.languages },
              { title: "Web Technologies", data: RESUME_DATA.skills.web },
              { title: "Frameworks & Libraries", data: RESUME_DATA.skills.frameworks },
              { title: "AI & Data Science", data: RESUME_DATA.skills.ai },
              { title: "Core Concepts", data: RESUME_DATA.skills.core },
              { title: "Databases", data: RESUME_DATA.skills.databases },
              { title: "Data Visualization", data: RESUME_DATA.skills.viz },
              { title: "Tools", data: RESUME_DATA.skills.tools },
              { title: "Soft Skills", data: RESUME_DATA.skills.soft }
            ].map((category, idx) => (
              category.data && (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx % 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-8">{category.title}</h4>
                  <div className="flex flex-wrap gap-4">
                    {category.data.map(skill => (
                      <motion.div 
                        key={skill} 
                        whileHover={{ x: 5, color: "var(--color-accent)" }}
                        className="text-lg font-display border-b border-border pb-2 w-full transition-all group cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-40">
          <SectionHeading number="03">Projects</SectionHeading>
          <div className="border-t border-border">
            {RESUME_DATA.projects.map((project) => (
              <div key={project.title}>
                <ProjectBlock project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-40">
          <SectionHeading number="04">Certificates</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <motion.a
                key={cert.title}
                // @ts-ignore - added link dynamically to type
                href={cert.link || '#'}
                // @ts-ignore
                target={cert.link ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 border border-border hover:border-accent transition-all group relative overflow-hidden ${cert.link ? 'cursor-pointer hover:bg-white/[0.02]' : 'cursor-default'}`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-accent transition-all">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{cert.issuer} | {cert.year}</div>
                <h4 className="text-xl font-display mb-4 group-hover:text-accent transition-colors">{cert.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{cert.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-40">
          <SectionHeading number="05">Experience</SectionHeading>
          <div className="space-y-20">
            {RESUME_DATA.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-3 gap-8 group"
              >
                <div className="text-accent font-display text-xl">{exp.period}</div>
                <div className="lg:col-span-2">
                  <h3 className="text-4xl font-display uppercase mb-4 transition-colors group-hover:text-accent">{exp.role}</h3>
                  <div className="text-xl text-muted mb-6">{exp.company}</div>
                  <p className="text-lg text-muted leading-relaxed border-l-2 border-border pl-8 group-hover:border-accent transition-colors">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 border-t border-border">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl font-display font-black uppercase tracking-tighter mb-12 text-glow">Initiate<br />Contact</h2>
              <div className="flex flex-col gap-6 items-start">
                <motion.a 
                  whileHover={{ color: "var(--color-accent)", x: 10 }}
                  href={`tel:${RESUME_DATA.contact.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center gap-4 text-2xl font-display transition-all group"
                >
                  <div className="p-3 border border-border group-hover:border-accent transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>{RESUME_DATA.contact.phone}</span>
                </motion.a>

                <motion.a 
                  whileHover={{ color: "var(--color-accent)", x: 10 }}
                  href={`mailto:${RESUME_DATA.contact.email}`} 
                  className="flex items-center gap-4 text-2xl font-display transition-all group"
                >
                  <div className="p-3 border border-border group-hover:border-accent transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span>{RESUME_DATA.contact.email}</span>
                </motion.a>

                <motion.a 
                  whileHover={{ color: "var(--color-accent)", x: 10 }}
                  href={RESUME_DATA.contact.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 text-2xl font-display transition-all group"
                >
                  <div className="p-3 border border-border group-hover:border-accent transition-all">
                    <Github className="w-6 h-6" />
                  </div>
                  <span>GitHub</span>
                </motion.a>

                <motion.a 
                  whileHover={{ color: "var(--color-accent)", x: 10 }}
                  href={RESUME_DATA.contact.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 text-2xl font-display transition-all group"
                >
                  <div className="p-3 border border-border group-hover:border-accent transition-all">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-border text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 blur-[100px] pointer-events-none" />
        <p className="text-muted text-xs font-bold uppercase tracking-[0.5em] relative z-10">
          &copy; {new Date().getFullYear()} Rishitha Rasineni
        </p>
      </footer>
    </div>
  );
}
