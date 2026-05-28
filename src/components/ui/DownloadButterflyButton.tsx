import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download } from 'lucide-react';

export const DownloadButterflyButton = () => {
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
