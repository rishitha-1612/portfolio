import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { NavLink, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > lastScrollY.current && latest > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Research', path: '/research' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isNavVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-[1600px] mx-auto px-8 py-6 flex justify-between items-center text-glow">
        <NavLink to="/" className="text-2xl font-display font-black tracking-tighter hover:text-accent transition-colors">RR.</NavLink>
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
      </div>
    </motion.nav>
  );
};
