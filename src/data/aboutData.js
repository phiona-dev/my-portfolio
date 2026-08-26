import { number } from "framer-motion"
import { Compass, HelpCircle, Code2, Rocket, Lightbulb, Layers, Sparkles, MapPin, Briefcase } from "lucide-react"
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiSocketdotio, SiTailwindcss, SiGit } from 'react-icons/si';

export const JOURNEY_DATA = [
    {
        number: "01",
        icon: Sparkles,
        title: "Frontend",
        subtitle: "Where I started",
        description: "I discovered how much I enjoyed turning ideas into interfaces that people could actually see and interact with.",
    },
    {
        number: "02",
        icon: HelpCircle,
        title: "Curiosity",
        subtitle: "Then I wanted to know more",
        description: "Eventually, the interface was not enough. I wanted to understand what powered everything behind it.",
    },
    {
        number: "03",
        icon: Code2,
        title: "Full-Stack",
        subtitle: "Exploring the system",
        description: "That curiosity led me into APIs, databases, authentication, real-time communication and system design.",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Building",
        subtitle: "Where I am now",
        description: "Today, I enjoy taking an idea from its earliest stages and turning it into something real that people can use.",
    }
]

export const PROCESS_DATA = [
    {
        icon: Lightbulb,
        title: "Concept",
        description: "It usually starts with a question.",
    },
    {
        icon: Layers,
        title: "Design",
        description: "Then comes figuring out the experience.",
    },
    {
        icon: Code2,
        title: "Build",
        description: "Where ideas slowly become code.",
    },
    {
        icon: Rocket,
        title: "Product",
        description: "Something real that people can use.",
    }
]

export const SKILLS_DATA = [
    { name: 'React', icon: SiReact, color: 'from-sky-100 to-sky-200 text-sky-900 border-sky-300' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'from-stone-200 to-stone-300 text-stone-900 border-stone-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-100 to-blue-200 text-blue-900 border-blue-300' },
    { name: 'JavaScript', icon: SiJavascript, color: 'from-amber-200 via-amber-300 to-amber-400 text-amber-950 border-amber-300/80' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'from-emerald-200 via-emerald-300 to-emerald-400 text-emerald-950 border-emerald-300/80' },
    { name: 'Express', icon: SiExpress, color: 'from-slate-200 via-slate-300 to-slate-400 text-slate-950 border-slate-300/80' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-indigo-100 to-indigo-200 text-indigo-900 border-indigo-300' },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-emerald-100 to-emerald-200 text-emerald-900 border-emerald-300' },
    { name: 'Socket.io', icon: SiSocketdotio, color: 'from-indigo-200 via-indigo-300 to-indigo-400 text-indigo-950 border-indigo-300/80' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-200 via-cyan-300 to-cyan-400 text-cyan-950 border-cyan-300/80' },
    { name: 'Git & GitHub', icon: SiGit, color: 'from-orange-200 via-orange-300 to-orange-400 text-orange-950 border-orange-300/80' },
]