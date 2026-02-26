import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { FiDownload, FiSend, FiUsers, FiCheck, FiCode, FiCoffee } from 'react-icons/fi'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman } from 'react-icons/si'
import CodingBackground from './CodingBackground'

function ProfessionalCodingAnimation({ inView }) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"])

    const codeLines = [
        { text: "const developer = {", x: "10%", y: "20%" },
        { text: "  name: 'Muskan Chaurasia',", x: "15%", y: "30%" },
        { text: "  skills: ['React', 'Node'],", x: "15%", y: "40%" },
        { text: "  passion: 'Full Stack'", x: "15%", y: "50%" },
        { text: "};", x: "10%", y: "60%" },
        { text: "// Building amazing apps", x: "10%", y: "70%" }
    ]

    const techIcons = [
        { Icon: FaReact, color: "#61DAFB", x: "70%", y: "25%" },
        { Icon: FaNodeJs, color: "#339933", x: "80%", y: "45%" },
        { Icon: SiMongodb, color: "#47A248", x: "75%", y: "65%" }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                x.set((e.clientX - rect.left) / rect.width - 0.5)
                y.set((e.clientY - rect.top) / rect.height - 0.5)
            }}
            onMouseLeave={() => {
                x.set(0)
                y.set(0)
            }}
            className="relative cursor-none hidden lg:block"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
            {/* Main Code Editor Container */}
            <div
                className="relative w-96 h-80 rounded-2xl bg-gray-900 border border-gray-700 p-6 overflow-hidden shadow-2xl"
                style={{ transform: "translateZ(30px)" }}
            >
                {/* Editor Header */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-4 text-xs text-gray-400 font-mono">portfolio.js</div>
                </div>

                {/* Code Content */}
                <div className="space-y-2 font-mono text-sm">
                    {codeLines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-gray-300"
                            style={{
                                paddingLeft: line.text.includes('const') ? '0' : '2rem',
                                color: line.text.includes('//') ? '#6b7280' : 
                                       line.text.includes('name') ? '#60a5fa' :
                                       line.text.includes('skills') ? '#f59e0b' :
                                       line.text.includes('passion') ? '#10b981' : '#d1d5db'
                            }}
                        >
                            {line.text}
                        </motion.div>
                    ))}
                </div>

                {/* Floating Tech Icons */}
                {techIcons.map((tech, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                        style={{
                            position: 'absolute',
                            left: tech.x,
                            top: tech.y,
                            color: tech.color
                        }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <tech.Icon size={24} />
                    </motion.div>
                ))}

                {/* Cursor Blinking */}
                <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-green-400 ml-1"
                />
            </div>

            {/* Floating Code Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, -Math.random() * 50],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                    }}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`
                    }}
                />
            ))}
        </motion.div>
    )
}

export default function About() {
    const containerRef = useRef(null)
    const inView = useInView(containerRef, { once: true, margin: "-100px" })

    return (
        <section id="about" ref={containerRef} className="relative py-[30px] lg:py-[40px] overflow-hidden bg-white">
            {/* Coding Background */}
            <CodingBackground />
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative max-w-7xl mx-auto px-6 sm:px-10 py-4 border-2 rounded-[3rem] shadow-lg backdrop-blur-3xl bg-white/70"
                style={{ borderColor: '#7c3aed', background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)' }}
            >
                {/* Floating Purple Cubes (Stickers) */}
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 90, 180] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 -left-8 w-16 h-16 rounded-xl opacity-70"
                    style={{ backgroundColor: '#7c3aed' }}
                />
                <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, -90, -180] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-10 -right-8 w-12 h-12 rounded-lg opacity-70"
                    style={{ backgroundColor: '#7c3aed' }}
                />
                <motion.div
                    animate={{ x: [0, 10, 0], rotate: [0, 45, 90] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-1/2 left-10 w-8 h-8 rounded-md opacity-70"
                    style={{ backgroundColor: '#7c3aed' }}
                />

                {/* Floating Emoji (Sticker) */}
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 360, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-20 right-16 text-5xl"
                >
                    😎
                </motion.div>

                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

                    {/* ── Left Content: Story & Mission ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-10 text-center lg:text-left order-2 lg:order-1"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-purple-600 dark:text-purple-400">
                                <FiUsers /> I'm Muskan Chaurasia
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-black leading-tight text-[var(--text-primary)] tracking-tighter">
                                A Full Stack Developer<br />Based in India
                            </h2>
                            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                                <p>
                                    I'm passionate about creating exceptional digital experiences through clean code and innovative design.
                                </p>
                                <p>
                                    Specializing in modern web technologies, I transform ideas into powerful, scalable applications that make a difference.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 rounded-3xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 flex items-center gap-5 group"
                        >
                            <motion.div 
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-12 h-12 rounded-2xl bg-purple-200 dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 shadow-lg"
                            >
                                <FiCheck size={24} />
                            </motion.div>
                            <span className="text-[var(--text-primary)] font-bold tracking-tight text-sm sm:text-base text-left">
                                Turning complex problems into elegant solutions.
                            </span>
                        </motion.div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                            <motion.a 
                                href="#contact" 
                                className="btn-primary px-10 py-4 text-base flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiSend /> Learn More
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="btn-outline px-10 py-4 text-base flex items-center gap-3 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiDownload Download /> View Resume
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* ── Right Content: Eye-Catching Animation ── */}
                    <div className="flex justify-center items-center order-1 lg:order-2">
                        <ProfessionalCodingAnimation inView={inView} />
                        {/* Mobile Only Animation */}
                        <div className="sm:hidden relative w-64 h-80 rounded-[3rem] bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-3xl border-2 border-purple-300 p-6 shadow-2xl">
                            <div className="w-full h-full flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-center"
                                >
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-4xl">
                                        ✨
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}
