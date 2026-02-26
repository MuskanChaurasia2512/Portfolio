import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiLayers, FiLayout, FiServer, FiSmartphone } from 'react-icons/fi'
import {
    SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiPython, SiFirebase
} from 'react-icons/si'

const categories = [
    { name: 'All', icon: FiLayers },
    { name: 'Full Stack', icon: FiServer },
    { name: 'Frontend', icon: FiLayout },
    { name: 'Mobile', icon: FiSmartphone },
]

const projects = [
    {
        title: 'E-Commerce Universe',
        desc: 'A futuristic shopping experience with real-time inventory, secure payments, and a sleek glassmorphic dashboard.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop',
        category: 'Full Stack',
        tech: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss],
        github: 'https://github.com/Muskanchaurasia2512',
        live: '#',
        featured: true
    },
    {
        title: 'Task Orchestrator',
        desc: 'Manage your productivity with a high-performance drag-and-drop system and cloud synchronization.',
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2032&auto=format&fit=crop',
        category: 'Frontend',
        tech: [SiReact, SiTailwindcss, SiJavascript],
        github: 'https://github.com/Muskanchaurasia2512',
        live: '#'
    },
    {
        title: 'Nexus Chat',
        desc: 'Instant messaging platform with encrypted rooms, file sharing, and live presence indicators.',
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop',
        category: 'Full Stack',
        tech: [SiReact, SiNodedotjs, SiExpress, SiFirebase],
        github: 'https://github.com/Muskanchaurasia2512',
        live: '#'
    },
    {
        title: 'Gourmet Express',
        desc: 'High-end restaurant platform with interactive menu and instant reservation system.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
        category: 'Frontend',
        tech: [SiReact, SiTailwindcss, SiJavascript],
        github: 'https://github.com/Muskanchaurasia2512',
        live: '#'
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

function ProjectCard({ project }) {
    return (
        <motion.div
            layout
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9 }}
            className="group relative flex flex-col bg-[var(--bg-card)] rounded-[1.5rem] border border-[var(--border)] overflow-hidden transition-all duration-500 hover:border-[var(--accent)]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] h-full"
        >
            {/* Image Container with 3D Hover effect logic visually */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--accent)] transition-colors">
                        <FiGithub size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--accent)] transition-colors">
                        <FiExternalLink size={20} />
                    </a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest text-white">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-black text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors leading-tight">
                    {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[13px] leading-relaxed line-clamp-2 mb-5">
                    {project.desc}
                </p>

                {/* Tech & Action */}
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-2.5">
                        {project.tech.map((Icon, idx) => (
                            <div key={idx} className="text-lg text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                                <Icon />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hover Borders */}
            <div className="absolute inset-0 border-2 border-[var(--accent)]/0 group-hover:border-[var(--accent)]/20 transition-all duration-500 rounded-[1.5rem] pointer-events-none" />
        </motion.div>
    )
}

export default function Projects() {
    const [activeTab, setActiveTab] = useState('All')
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(p => p.category === activeTab)

    return (
        <section id="projects" ref={ref} className="relative py-[150px] overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {/* Digital Grid Layer */}
                <div className="absolute inset-0 bg-grid opacity-[0.05] dark:opacity-[0.03]" />

                {/* Floating Tech Icons Decor */}
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]">
                    <SiReact className="absolute top-20 right-[25%] text-9xl animate-spin-slow text-[var(--text-muted)]" />
                    <SiTailwindcss className="absolute bottom-40 left-[15%] text-8xl animate-float-slow text-[var(--accent)]" />
                    <SiJavascript className="absolute top-1/2 left-[5%] text-7xl animate-float text-[var(--text-muted)]" />
                </div>

                {/* Animated Glowing Orbs */}
                <motion.div
                    animate={{
                        x: [0, 80, -80, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.2, 0.8, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--accent)]/5 rounded-full blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -60, 60, 0],
                        y: [0, 40, -40, 0],
                        scale: [1, 0.9, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-pink-500/5 rounded-full blur-[100px]"
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-[1px] w-10 bg-[var(--accent)]/30" />
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--accent)]">
                            Featured Work
                        </span>
                        <div className="h-[1px] w-10 bg-[var(--accent)]/30" />
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight mb-4">
                        Latest <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] mt-3 max-w-2xl mx-auto text-base leading-relaxed">
                        Explore my recent work across different technology stacks.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveTab(cat.name)}
                            className={`group relative flex items-center gap-2.5 px-6 py-2.5 rounded-full transition-all duration-500 ${activeTab === cat.name
                                ? 'bg-[var(--accent)] text-white shadow-[0_10px_20px_rgba(139,92,246,0.2)]'
                                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/50'
                                }`}
                        >
                            <cat.icon className={`text-sm transition-transform duration-500 ${activeTab === cat.name ? 'scale-110' : 'group-hover:scale-110'}`} />
                            <span className="font-black text-[10px] uppercase tracking-widest">{cat.name}</span>

                            {activeTab === cat.name && (
                                <motion.div
                                    layoutId="project-tab-glow"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-24 text-center"
                >
                    <a
                        href="https://github.com/Muskanchaurasia2512"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl text-[var(--text-primary)] font-black text-xs uppercase tracking-[0.2em] transition-all hover:border-[var(--accent)]/50 hover:shadow-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/5 to-[var(--accent)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <FiGithub className="text-lg group-hover:rotate-12 transition-transform" />
                        View Archive on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
