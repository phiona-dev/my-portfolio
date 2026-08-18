import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener*("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]


  return (
    <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F5]/90 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
          : 'bg-[#FAF7F5]/80 backdrop-blur-md border-b border-stone-200/40 py-5'
      }`}
    >
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2.5 group">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400 group-hover:bg-rose-400 transition-colors duration-300"/>
                <div className="flex flex-col">
                    <span className="text-lg font-semibold tracking-tight text-stone-900 group-hover:text-rose-500 transition-colors">Phiona Beatrice</span>
                    <span className="text-xs text-stone-500 font-medium tracking-wide">Software Developer</span>
                </div> 
            </a>

            <div className="hidden md:flex items-center gap-8">
               {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors relative group"
                >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-rose-400 group-hover:w-full transition-all duration-300" />
                </a>
               ))}

               <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-full bg-stone-900 text-stone-100 text-sm font-medium hover:bg-stone-800 shadow-sm transition-all duration-200"
               >
                Resume
               </motion.a>
            </div>

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="md:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-200/50 transition-colors focus:outline-none"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </nav>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="md:hidden bg-[#FAF7F5] border-b border-stone-200/80 px-6 py-6 shadow-lg overflow-hidden"
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-stone-700 hover:text-rose-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 text-center py-2.5 rounded-full bg-stone-900 text-stone-100 text-sm font-medium hover:bg-stone-800 transition-colors"
                        >
                            Resume
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </header>
  )
}

export default Navbar