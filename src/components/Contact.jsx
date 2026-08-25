import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

export default function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle") //idle | submitting | submitted

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("submitting")

    setTimeout(() => {
      setStatus("submitted");
      setFormData({ name: "", email: "", message: "" })
    }, 1200)
  }

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
    <section id="contact" className="py-24 px-6 relative bg-[#FAF7F5]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-xs font-semibold text-teal-800 mb-3">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            Let's Talk
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-xl">
            Have a project in mind, an opportunity to discuss, or just want to say hello? Drop a message below!
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          
          {/* Direct Contact Info Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 bg-white/80 border border-stone-200/80 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[420px]"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-300 via-rose-300 to-amber-300" />

            <div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-3">
                Let's Connect
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                I am always open to discussing full-stack development roles, collaboration on open-source systems, or creative software ideas.
              </p>

              <div className="space-y-4 text-sm font-medium text-stone-700 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold">
                    ✉
                  </span>
                  <div>
                    <span className="block text-xs text-stone-400 font-normal">Email</span>
                    <a href="mailto:reachphiona@gmail.com" className="hover:text-rose-500 transition-colors">
                      pbndemaru@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold">
                    📍
                  </span>
                  <div>
                    <span className="block text-xs text-stone-400 font-normal">Location</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Pill Buttons */}
            <div className="pt-6 border-t border-stone-100 flex items-center gap-3">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-200 transition-colors"
              >
                GitHub ↗
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-200 transition-colors"
              >
                LinkedIn ↗
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 bg-white/80 border border-stone-200/80 rounded-3xl p-8 sm:p-10 shadow-sm"
          >

            <AnimatePresence mode="wait">
            {status === "submitted" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-2xl font-semibold text-stone-900">Message sent!</h4>
                <p className="text-stone-600 text-sm max-w-sm">
                  Thank you for reaching put. I've received your message and will get back to you shortly!
                </p>
                <motion.button
                  type="button"
                  onClick={() => setStatus("idle")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-stone-900 text-stone-100 text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200/80 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition-all placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200/80 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200/80 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition-all placeholder:text-stone-400 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-stone-900 text-stone-100 text-sm font-semibold hover:bg-rose-500 transition-colors shadow-sm"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
            )}

            </AnimatePresence>
            
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}