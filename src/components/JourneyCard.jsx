import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react";

export function JourneyCard({ item, index }) {
    const IconComponent = item.icon;
  return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -6 }}
        className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white/70 p-8 backdrop-blur-sm"
    >
        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-rose-100/60 transition-transform duration-500 group-hover:scale-[2.5]"/>
        <span className="relative z-10 text-xs font-bold tracking-[0.2em] text-stone-400">
            {item.number}
        </span>

        <motion.div
            whileHover={{ rotate: 8, scale: 1.1 }}
            className="relative z-10 mt-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600"
        >
            <IconComponent className="h-6 w-6 stroke-2" />
        </motion.div>

        <h4 className="relative z-10 mt-6 text-2xl font-semibold text-stone-900">
            {item.title}
        </h4>

        <p className="relative z-10 mt-1 text-sm font-medium text-rose-500">
            {item.subtitle}
        </p>

        <p className="relative z-10 mt-5 max-w-md text-sm leading-relaxed text-stone-600">
            {item.description}
        </p>

        <motion.div
            className="relative z-10 mt-7 flex items-center gap-1 text-stone-400 group-hover:text-stone-700"
            initial={{ x: 0 }}
            whileHover={{ x: 8 }}
        >
            <ArrowRight className="h-4 w-4" />
        </motion.div>
    </motion.div>
  )
}