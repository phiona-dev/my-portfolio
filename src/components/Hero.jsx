import { useState, useEffect } from "react"
import profile from "../assets/hero.jpeg"
import { motion, AnimatePresence} from "framer-motion"

const Hero = () => {
  const roles = [
    "Full-Stack Software Developer",
    "Real-Time Systems Builder",
    "Creative Tech Innovator"
  ]
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer);
  }, []);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#FAF7F5] text-stone-800 flex items-center justify-center px-6 py-16 overflow-hidden">

      <div 
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none"  
      />
      <div
        animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-md h-112 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" 
      />
      <div
        animate={{ scale: [1, 1.1, 1], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="md:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-rose-200 via-amber-200 to-purple-200 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500"/>
            
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-5 w-[calc(100%+2.5rem)] h-[calc(100%+2.5rem)] text-rose-300/60 pointer-events-none z-10"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeDasharray="4 6"
              />
            </motion.svg>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/80 shadow-xl bg-stone-200">
              <img 
                  src={profile}
                  alt="portrait"
                  className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition duration-700 ease-in-out"
                />
            </div>
          </div>
        </motion.div>
        

        {/*Right Side Content */}
        <motion.div 
          className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl font-semibold tracking-tight text-stone-900 mb-2"
          >
            Hello
          </motion.h1>

          <motion.div variants={itemVariants} className="relative inline-block mb-4">
            <h2 
            className="text-xl sm:text-2xl font-medium text-rose-400 mb-4 tracking-wide"
            >
              A Bit About Me
            </h2>
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-3 text-rose-300/70 pointer-events-none"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path
                d="M 2 8 Q 50 1, 98 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          <motion.div variants={itemVariants} className="h-8 mb-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-stone-500 font-medium text-base sm:text-lg italic"
              >
                - {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
          

          <motion.p 
            variants={itemVariants}
            className="text-stone-600 text-base sm:text-lg max-w-md leading-relaxed mb-8"
          >
            Passionate about building high-performance web systems, real-time architectures and visually captivating, user-centric digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <motion.a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-900 font-semibold text-sm sm:text-base flex items-center justify-center shadow-lg shadow-amber-400/30 hover:scale-105 transition-all duration-300"
            >
              Resume
            </motion.a>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.12, y: -6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-rose-400 hover:bg-rose-300 text-white font-semibold text-sm sm:text-base flex items-center justify-center shadow-lg shadow-rose-400/30 hover:scale-105 transition-all duration-300"
            >
              Projects
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.12, y: -6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-teal-300 hover:bg-teal-200 text-stone-900 font-semibold text-sm sm:text-base flex items-center justify-center shadow-lg shadow-teal-300/30 hover:scale-105 transition-all duration-300"
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero