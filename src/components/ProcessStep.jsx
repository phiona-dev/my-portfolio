import { motion } from "framer-motion"

export const ProcessStep = ({ step, index }) => {
    const IconComponent = step.icon;

  return (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="text-center"
    >
        <motion.div
            whileHover={{
            scale: 1.12,
            rotate: index % 2 === 0 ? 5 : -5,
            }}
            className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-stone-200 bg-white text-rose-500 shadow-sm"
        >
            <IconComponent className="h-8 w-8 stroke-[1.75]" />
        </motion.div>
        <h4 className="mt-5 font-semibold text-stone-900">
            {step.title}
        </h4>

        <p className="mx-auto mt-2 max-w-45 text-sm leading-relaxed text-stone-500">
            {step.description}
        </p>
    </motion.div>
  )
}
