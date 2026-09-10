import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-4xl border border-stone-200/80 bg-white/80 shadow-sm transition-all duration-500 hover:border-stone-300 hover:shadow-xl"
    >
      {/* Image Preview Container */}
      <div className="relative m-3 overflow-hidden rounded-3xl bg-stone-100">
        <motion.img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-64 w-full object-cover sm:h-72"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <div
          className={`absolute inset-0 bg-linear-to-br ${project.accentGlow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Category Badge */}
        <div className="absolute left-5 top-5">
          <span
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-sm ${project.badgeColor}`}
          >
            {project.category}
          </span>
        </div>

        {/* Floating Quick View Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-lg backdrop-blur-sm"
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="p-7 pt-5 sm:p-8 sm:pt-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-stone-500">
            {project.role}
          </span>
        </div>

        <h3
          className={`text-2xl font-semibold tracking-tight text-stone-900 transition-colors duration-300 sm:text-3xl ${project.hoverColor}`}
        >
          {project.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-stone-500">
          {project.subtitle}
        </p>

        <p className="my-6 text-sm leading-relaxed text-stone-600 sm:text-base">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="mb-7 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-stone-200/80 bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors duration-300 group-hover:bg-stone-50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 border-t border-stone-100 pt-6">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group/button flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-xs font-semibold text-stone-100 shadow-sm transition-colors duration-300 hover:bg-rose-500"
          >
            View Website
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-100 px-5 py-2.5 text-xs font-semibold text-stone-700 transition-colors duration-300 hover:bg-stone-200"
          >
            {/*<Github className="h-3.5 w-3.5" />*/}
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}