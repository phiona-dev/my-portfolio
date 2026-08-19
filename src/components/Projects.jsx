import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { filter } from 'framer-motion/client';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Full-Stack", "Real-Time"];


  const projectsData = [
    {
      id: 'mrembo-hakiki',
      title: 'Mrembo Hakiki',
      subtitle: 'Anti-Counterfeit Web Platform',
      description:
        'A data-efficient anti-counterfeit web platform engineered to verify beauty product authenticity and protect consumers.',
      tech: ['Express', 'PostgreSQL', 'React', 'Tailwind CSS'],
      badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
      accentGlow: 'from-rose-200/40 via-amber-100/30 to-transparent',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'campus-connect',
      title: 'Campus Connect',
      subtitle: 'Real-Time Campus Networking App',
      description:
        'A high-performance real-time networking platform enabling seamless instant messaging, event hubs, and campus collaboration.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
      accentGlow: 'from-teal-200/40 via-purple-100/30 to-transparent',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeCategory === "All" ? projectsData : projectsData.filter((p) => p.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 }}
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="projects" className="py-24 px-6 relative bg-[#FAF7F5]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-xs font-semibold text-rose-600 mb-3">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              Selected Works
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-stone-600 text-base sm:text-lg max-w-xl">
              A curated showcase of full-stack web architectures, real-time engines, and soft visual interfaces I've crafted.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? 'text-stone-900'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
              {activeCategory === category && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-stone-200/80 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        

        {/* Project Cards Grid */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative group bg-white/80 border border-stone-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-stone-300 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Background Accent Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Title & Subtitle */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900 group-hover:text-rose-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-stone-500 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed my-6">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-xs font-medium text-stone-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-stone-100">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-5 py-2.5 rounded-full bg-stone-900 text-stone-100 text-xs font-semibold hover:bg-rose-500 transition-colors shadow-sm"
                >
                  Live Demo ↗
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-5 py-2.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition-colors"
                >
                  Source Code
                </motion.a>
              </div>
            </motion.article>
            ))}
          </AnimatePresence>
    
          
        </motion.div>

      </div>
    </section>
  );
}