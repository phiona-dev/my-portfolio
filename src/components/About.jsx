import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skillsData = {
    Frontend: {
      badge: 'bg-rose-100 text-rose-700 border-rose-200',
      skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3'],
    },
    Backend: {
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      skills: ['Node.js', 'Express', 'Socket.io', 'RESTful APIs'],
    },
    Databases: {
      badge: 'bg-teal-100 text-teal-800 border-teal-200',
      skills: ['PostgreSQL', 'MongoDB', 'Git / GitHub', 'Vite'],
    },
  };

  // Stagger Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="py-24 px-6 relative bg-[#FAF7F5] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-xs font-semibold text-amber-800 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Background & Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900">
            About Me
          </h2>
        </motion.div>

        {/* Content Layout Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          
          {/* Bio Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 bg-white/80 border border-stone-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-300 via-amber-300 to-teal-300" />
            
            <h3 className="text-2xl font-semibold text-stone-900 mb-4 leading-snug">
              Driven by clean code & thoughtful user experiences.
            </h3>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
              I am a Software Engineering student at USIU-Africa with a deep passion for building robust web architectures, real-time engines, and visually captivating digital interfaces.
            </p>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              Whether engineering data-efficient backend systems or designing fluid frontend components, I focus on building scalable solutions that balance performance with elegance.
            </p>

            <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>📍 Based in Nairobi, Kenya</span>
              <span className="text-rose-500 font-semibold">Available for Roles</span>
            </div>
          </motion.div>

          {/* Technical Skills Cards */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 border border-stone-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-stone-900 mb-6 flex items-center gap-2">
                <span>Technical Stack</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {Object.entries(skillsData).map(([category, { badge, skills }]) => (
                  <div key={category} className="space-y-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${badge}`}>
                      {category}
                    </span>
                    <ul className="space-y-2 pt-1">
                      {skills.map((skill) => (
                        <motion.li
                          key={skill}
                          whileHover={{ x: 4 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className="text-stone-700 text-sm font-medium flex items-center gap-2 cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-rose-400 transition-colors" />
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}