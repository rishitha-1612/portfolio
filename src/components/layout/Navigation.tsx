import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const { scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > lastScrollY.current && latest > 100 && !isMobileMenuOpen) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = latest;
    });
  }, [scrollY, isMobileMenuOpen]);

  // Close mobile menu when changing route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isNavVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-border"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 py-5 flex justify-between items-center text-glow">
          <NavLink 
            to="/" 
            className="text-2xl font-display font-black tracking-tighter hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            RR.
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink 
                  key={item.label} 
                  to={item.path} 
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors relative group ${isActive ? 'text-accent' : 'hover:text-accent'}`}
                >
                  {item.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-1 bg-accent transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                    style={{
                      maskImage: `url("data:image/svg+xml,%3Csvg width='16' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3 Q4 1 8 3 T16 3' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='16' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3 Q4 1 8 3 T16 3' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      maskRepeat: 'repeat-x',
                      WebkitMaskRepeat: 'repeat-x',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center'
                    }}
                  />
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-accent focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7 text-accent" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden pt-24 px-8 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-display font-bold uppercase tracking-widest block py-2 border-b border-white/10 ${
                        isActive ? 'text-accent pl-2 border-accent' : 'text-muted hover:text-white'
                      } transition-all`}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-xs text-muted font-mono uppercase tracking-widest border-t border-white/10 pt-6">
              Rishitha Rasineni © Portfolio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
