
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from "lucide-react"
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from "./ProjectCard"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    {
      name: 'All',
      count: PROJECTS_DATA.length,
    },
    {
      name: 'Full-Stack',
      count: PROJECTS_DATA.filter(
        (project) => project.category === 'Full-Stack'
      ).length,
    },
    {
      name: 'Real-Time',
      count: PROJECTS_DATA.filter(
        (project) => project.category === 'Real-Time'
      ).length,
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
          (project) => project.category === activeCategory
        );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };


  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FAF7F5] px-6 py-24"
    >
      {/*  AMBIENT BACKGROUND blur*/}

      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-rose-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />


      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-100px',
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >

          {/* Heading */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100/80 px-3.5 py-1.5 text-xs font-semibold text-rose-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-rose-400" />
              Selected Works
            </div>
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
              A few of the projects where I've turned ideas into
              working products — from full-stack applications to
              real-time experiences.
            </p>
          </div>


          {/*FILTERS*/}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() =>
                  setActiveCategory(category.name)
                }
                className={`relative rounded-full px-4 py-2.5 text-xs font-medium transition-colors duration-300 ${
                  activeCategory === category.name
                    ? 'text-stone-900'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {/* Animated active background */}
                {activeCategory === category.name && (
                  <motion.span
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 -z-10 rounded-full bg-stone-200/80"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">
                  {category.name}
                </span>
                <span
                  className={`relative z-10 ml-1.5 ${
                    activeCategory === category.name
                      ? 'text-stone-500'
                      : 'text-stone-400'
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px',
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project}/>
            ))}

          </AnimatePresence>

        </motion.div>


        {/* EMPTY STATE */}

        {filteredProjects.length === 0 && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="rounded-3xl border border-stone-200 bg-white/60 px-6 py-16 text-center"
          >

            <p className="text-lg font-medium text-stone-700">
              More projects coming soon.
            </p>

            <p className="mt-2 text-sm text-stone-500">
              I'm always experimenting with something new.
            </p>

          </motion.div>

        )}


        {/* BOTTOM CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-stone-200 pt-8 sm:flex-row sm:items-center"
        >

          <div>

            <p className="text-sm font-medium text-stone-800">
              Interested in how I build?
            </p>

            <p className="mt-1 text-sm text-stone-500">
              Explore source repositories and architectural experiments
            </p>

          </div>


          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              x: 4,
            }}
            className="text-sm font-semibold text-stone-900 transition-colors hover:text-rose-500"
          >
            View GitHub
            <ArrowRight className="h-4 w-4" />
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}
