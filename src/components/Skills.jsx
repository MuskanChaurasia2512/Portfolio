import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import {
    SiHtml5, SiCss3, SiJavascript, SiReact,
    SiTailwindcss, SiNodedotjs, SiExpress,
    SiMongodb, SiFramer, SiGit, SiVite, SiPostman, SiPython
} from 'react-icons/si'
import { FiLayout, FiServer, FiDatabase, FiLayers, FiTool, FiCpu } from 'react-icons/fi'
import CodingBackground from './CodingBackground'

const skillsData = [
    { name: "React.js", icon: SiReact, color: "#61DAFB", category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6", category: "Frontend" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF", category: "Frontend" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
    { name: "Express.js", icon: SiExpress, color: "#000000", category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
    { name: "Python", icon: SiPython, color: "#3776AB", category: "AI/ML" },
    { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
    { name: "Vite", icon: SiVite, color: "#646CFF", category: "Tools" }
]

const categories = [
    { name: "All", icon: FiLayers },
    { name: "Frontend", icon: FiLayout },
    { name: "Backend", icon: FiServer },
    { name: "Database", icon: FiDatabase },
    { name: "AI/ML", icon: FiCpu },
    { name: "Tools", icon: FiTool }
]

function SkillIcon({ skill, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:border-purple-300">
                <skill.icon 
                    className="text-3xl" 
                    style={{ color: skill.color, filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.1))' }}
                />
            </div>
            <span className="text-gray-800 text-sm font-medium text-center">
                {skill.name}
            </span>
        </motion.div>
    )
}

export default function Skills() {
    const [activeTab, setActiveTab] = useState("All")
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    const filteredSkills = activeTab === "All"
        ? skillsData
        : skillsData.filter(skill => skill.category === activeTab)

    return (
        <section id="skills" ref={ref} className="relative py-[100px] overflow-hidden bg-white transition-colors duration-300">
            {/* Coding Background */}
            <CodingBackground />
            {/* Light Background with subtle effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-24"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-gray-300" />
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-600">
                            Technical Arsenal
                        </span>
                        <div className="h-[1px] w-12 bg-gray-300" />
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-black text-gray-900 tracking-tight mb-8">
                        My <span className="text-purple-600">Expertise</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        A power-packed collection of modern technologies and tools I master to build state-of-the-art digital experiences.
                    </p>
                </motion.div>

                {/* Filter Tabs - Light Theme Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveTab(cat.name)}
                            className={`group relative flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-500 ${activeTab === cat.name
                                ? 'bg-purple-600 text-white border-transparent shadow-[0_15px_35px_rgba(147,51,234,0.3)]'
                                : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-purple-400 hover:bg-gray-200'
                                }`}
                        >
                            <cat.icon size={18} className={`transition-transform duration-500 ${activeTab === cat.name ? 'scale-110' : 'group-hover:scale-110'}`} />
                            <span className="font-black text-xs uppercase tracking-widest">{cat.name}</span>

                            {activeTab === cat.name && (
                                <motion.div
                                    layoutId="skill-pill-shimmer"
                                    className="absolute inset-0 bg-white/10 -skew-x-12 animate-[shimmer_2s_infinite]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Skills Horizontal Layout */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {filteredSkills.map((skill, i) => (
                        <SkillIcon key={skill.name} skill={skill} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
