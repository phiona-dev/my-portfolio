import { motion } from "framer-motion"
import { RotateCw } from "lucide-react"
import { JOURNEY_DATA, PROCESS_DATA, SKILLS_DATA } from "../data/aboutData"
import { JourneyCard } from "./JourneyCard"
import { ProcessStep } from "./ProcessStep"
import { SkillBadge } from "./SkillBadge"

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF7F5] px-6 py-24">
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100/80 px-3.5 py-1.5 text-xs font-semibold text-amber-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400"/>
            Background & Mindset
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            About Me
          </h2>
        </motion.div>

        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h3 className="text-4xl font-medium leading-[1.1] tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
            Building ideas into{' '}
            <span className="relative inline-block font-semibold text-rose-500">
              products,
              <svg
                className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-rose-300/80"
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
            </span>
            <br />
            one project at a time.
          </h3>

          <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-stone-600 sm:text-xl">
            <p>
              Hi, I'm <span className="font-semibold text-stone-900">Phiona</span>, a Software Engineering student and developer based in Nairobi.
            </p>
            <p>
              I started with frontend development, got curious about what happens behind the screen and somehow ended up exploring APIs, databases, authentication, real-time systems and the process of turning ideas into products.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-stone-300/60 bg-stone-200/60 px-4 py-2 text-xs font-medium text-stone-700 sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"/>
              Nairobi, Kenya
            </div>
            <div className="rounded-full border border-rose-200 bg-rose-100/60 px-4 py-2 text-xs font-medium text-rose-800 sm:text-sm">
              Open to engineering opportunities
            </div>
          </div>
        </motion.div>

        {/*My journey section */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
              My Journey
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Curiosity took me beyond the interface.
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-stone-500">
              What started with designing interfaces gradually grew into an interest in understanding the systems behind the products I build.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {JOURNEY_DATA.map((item, index) => (
              <JourneyCard key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>

        {/*process section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
              How I Build
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              From an idea to something real
            </h3>
            <p className="mt-4 leading-relaxed text-stone-500">
              I enjoy the journey just as much as the final result.
            </p>
          </motion.div>

          <div className="relative mt-16">
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-stone-200 md:block"/>
            <div className="relative grid grid-cols-2 gap-10 md:grid-cols-4">
              {PROCESS_DATA.map((step, index) => (
                <ProcessStep key={step.title} step={step} index={index} />
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex items-center justify-center gap-2 text-xl italic text-stone-500"
          >
            And then I start again. 
            <RotateCw className="h-5 w-5 animate-spin-slow text-rose-500"/>
          </motion.p>
        </div>

        {/*tech ecosystem section */}
        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
              My Stack
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
              My Tech Ecosystem
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone-500">
              Technologies and tools I've used while experimenting, learning, and building.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4 py-6 sm:gap-5">
              {SKILLS_DATA.map((skill, idx) => (
                <SkillBadge key={skill.name} skill={skill} idx={idx} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About