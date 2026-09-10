// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../data/contactData';
import { InputField } from './InputField';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#FAF7F5] px-6 py-24">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100/80 px-3.5 py-1.5 text-xs font-semibold text-rose-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
            Get In Touch
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Let's build something together.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send a message and I'll get back to you shortly.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Contact Details & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div className="space-y-8">
              {/* Quick Info Cards */}
              <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                <h3 className="text-lg font-semibold text-stone-900">Contact Details</h3>
                
                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-stone-500">Direct Email</p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="mt-0.5 text-sm font-semibold text-stone-800 hover:text-rose-600 transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-stone-500">Location</p>
                      <p className="mt-0.5 text-sm font-semibold text-stone-800">
                        {CONTACT_INFO.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-stone-500">Status</p>
                      <p className="mt-0.5 text-sm font-medium text-stone-700">
                        {CONTACT_INFO.availability}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                <h3 className="text-lg font-semibold text-stone-900">Online Profiles</h3>
                <div className="mt-4 divide-y divide-stone-100">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 text-stone-700 transition-colors hover:text-rose-600"
                    >
                      <span className="text-sm font-medium">{link.name}</span>
                      <div className="flex items-center gap-1 text-xs text-stone-400 group-hover:text-rose-600">
                        <span>{link.username}</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-stone-200/80 bg-white p-7 shadow-sm sm:p-10"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-stone-900">Send a Message</h3>
              <p className="mt-1 text-sm text-stone-500">Fill out the form below and I'll get back to you within 24 hours.</p>

              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <InputField
                    label="Your Name"
                    name="name"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <InputField
                  label="Subject"
                  name="subject"
                  placeholder="Project inquiry / Attachment opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <InputField
                  label="Message"
                  name="message"
                  textarea
                  rows={5}
                  placeholder="Tell me a bit about what you are looking for..."
                  value={formData.message}
                  onChange={handleChange}
                />

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-900 px-6 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500 disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <span>Sending message...</span>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}