import { motion } from 'framer-motion'

export const SkillBadge = ({ skill, idx }) => {
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{
        y: [0, idx % 2 === 0 ? -6 : 6, 0],
      }}
      transition={{
        opacity: { duration: 0.4, delay: idx * 0.04 },
        scale: { duration: 0.4, delay: idx * 0.04 },
        y: {
          duration: 3 + (idx % 4) * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      whileHover={{ scale: 1.12, y: -10 }}
      className={`group relative flex cursor-default items-center gap-2.5 rounded-full border bg-linear-to-br px-5 py-3 shadow-sm ${skill.color}`}
    >
      {IconComponent && <IconComponent className="h-4 w-4 shrink-0" />}
      <span className="relative z-10 text-xs font-semibold tracking-wide sm:text-sm">
        {skill.name}
      </span>
    </motion.div>
  )
}
