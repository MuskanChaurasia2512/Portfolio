import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiArrowRight, FiCode, FiCpu, FiGlobe, FiDatabase, FiLayers } from 'react-icons/fi'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiJavascript, SiMongodb } from 'react-icons/si'
import CodingBackground from './CodingBackground'

const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Certificates', value: '4+' },
]

const techIcons = [
    { Icon: RiReactjsLine, color: '#61DAFB', top: '10%', right: '-5%' },
    { Icon: SiJavascript, color: '#F7DF1E', bottom: '15%', left: '-10%' },
    { Icon: RiTailwindCssFill, color: '#06B6D4', bottom: '-5%', right: '15%' },
    { Icon: SiMongodb, color: '#47A248', top: '20%', left: '5%' },
]

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0)
    const roles = ['Frontend Developer', 'Full Stack Dev', 'MERN Specialist', 'Problem Solver']
    const [displayed, setDisplayed] = useState('')
    const [deleting, setDeleting] = useState(false)
    const [charIdx, setCharIdx] = useState(0)

    useEffect(() => {
        const current = roles[roleIdx]
        let timeout
        if (!deleting && charIdx <= current.length) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIdx))
                setCharIdx(i => i + 1)
            }, 70)
        } else if (!deleting && charIdx > current.length) {
            timeout = setTimeout(() => setDeleting(true), 1500)
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIdx - 1))
                setCharIdx(i => i - 1)
            }, 40)
        } else if (deleting && charIdx === 0) {
            setDeleting(false)
            setRoleIdx(i => (i + 1) % roles.length)
        }
        return () => clearTimeout(timeout)
    }, [charIdx, deleting, roleIdx])

    return (
        <section id="home" className="relative min-h-[70vh] flex items-center pt-[120px] pb-[60px] overflow-hidden bg-white">
            {/* Coding Background */}
            <CodingBackground />
            {/* ── Refined Ambient Background ── */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

                <div className="absolute inset-0 bg-grid opacity-[0.1] dark:opacity-[0.04]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

                {/* ── Left Content: Premium Typography ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Digital Craftsmanship</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-[var(--text-primary)] via-[var(--text-primary)] to-[var(--text-primary)]/30">
                        MUSKAN<br />
                        <span className="gradient-text">CHAURASIA</span>
                    </h1>

                    <div className="text-xl sm:text-2xl font-bold mb-8 h-10 flex items-center gap-2">
                        <span className="text-[var(--text-secondary)]">I specialize in</span>
                        <span className="text-[var(--accent)]">{displayed}</span>

                        <span className="w-0.5 h-6 bg-[var(--accent)] animate-blink shadow-[0_0_10px_var(--accent)]" />
                    </div>

                    <p className="max-w-xl text-[var(--text-secondary)] text-base sm:text-lg leading-loose mb-16">
                        I build <span className="text-[var(--text-primary)] font-semibold">robust, scalable full-stack applications</span> with
                        a focus on exceptional user experiences and performance optimization.
                    </p>

                    <div className="flex flex-wrap items-center gap-8 mb-24">
                        <a href="#contact" className="btn-primary px-10 py-4.5 text-lg flex items-center gap-3 group">
                            Start a Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#projects" className="btn-outline px-10 py-4.5 text-lg">
                            My Portfolio
                        </a>
                    </div>

                    {/* Enhanced Stats */}
                    <div className="flex items-center gap-16 pt-16 border-t border-[var(--border)]">
                        {stats.map(s => (
                            <div key={s.label} className="group cursor-default">
                                <div className="text-4xl font-black transition-colors group-hover:text-[var(--text-primary)]" style={{ color: 'var(--accent)' }}>{s.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--text-secondary)] mt-2">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Right Content: Professional Image ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:flex justify-center items-center mt-20"
                >
                    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                        {/* Professional Image Container */}
                        <div className="relative w-80 h-96 rounded-[2rem] overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.2)] border border-[var(--border)]">
                            <img 
                                src="/src/images/muskanimage.webp" 
                                alt="Muskan Chaurasia" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]/50 to-transparent" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Link */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-2">Explore Portfolio</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex justify-center p-1"
                >
                    <div className="w-1 h-2 bg-[var(--accent)] rounded-full" />
                </motion.div>
            </div>
        </section>
    )
}
