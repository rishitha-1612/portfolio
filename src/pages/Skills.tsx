import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RESUME_DATA } from '../constants';

export const Skills = () => {
  return (
    <motion.section 
      className="py-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1 }}
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
    </motion.section>
  );
};
