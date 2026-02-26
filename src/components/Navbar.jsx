import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('home')
    const { theme, toggle } = useTheme()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (href) => {
        setOpen(false)
        setActive(href.replace('#', ''))
    }

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                style={{
                    backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(18px)' : 'none',
                    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                }}
                className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-[80px]">

                    {/* ── Logo on Left ── */}
                    <div className="flex items-center gap-6">
                        <a href="#home" className="flex items-center gap-2 group">
                            <span
                                className="font-black text-2xl tracking-tighter transition-all duration-300 group-hover:text-[var(--accent)]"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                Muskan <span style={{ color: 'var(--accent)' }}>Chaurasia</span>
                            </span>
                        </a>
                    </div>

                    {/* ── Center: Nav Links ── */}
                    <ul className="hidden md:flex items-center gap-10">
                        {links.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => handleNav(link.href)}
                                    className="relative py-1.5 text-sm font-semibold transition-all duration-200 group"
                                    style={{
                                        color: active === link.href.replace('#', '')
                                            ? 'var(--accent)'
                                            : 'var(--text-secondary)',
                                    }}
                                >
                                    {link.label}
                                    {active === link.href.replace('#', '') && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                                            style={{ background: 'var(--accent)' }}
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* ── Right Section: Hire Me Button + Theme toggle ── */}
                    <div className="hidden md:flex items-center gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-2 border-purple-600 hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            Hire Me
                        </motion.a>
                        <button
                            onClick={toggle}
                            className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] hover:scale-105"
                            style={{
                                color: theme === 'dark' ? '#fbbf24' : '#6366f1',
                            }}
                            title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                        >
                            <motion.div
                                whileTap={{ rotate: 180, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {theme === 'dark' ? <HiSun size={22} /> : <HiMoon size={22} />}
                            </motion.div>
                        </button>
                    </div>

                    {/* ── Mobile Controls ── */}
                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={toggle}
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border)]"
                            style={{
                                color: theme === 'dark' ? '#fbbf24' : '#6366f1',
                            }}
                        >
                            {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
                        </button>
                        <button
                            onClick={() => setOpen(!open)}
                            className="p-1 rounded-lg"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {open ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ── Mobile Menu ── */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-[80px] inset-x-0 z-40 md:hidden overflow-hidden"
                        style={{
                            background: 'var(--nav-bg)',
                            backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid var(--border)',
                        }}
                    >
                        <ul className="flex flex-col p-6 gap-6">
                            {links.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => handleNav(link.href)}
                                        className="text-lg font-bold transition-colors"
                                        style={{
                                            color: active === link.href.replace('#', '')
                                                ? 'var(--accent)'
                                                : 'var(--text-secondary)',
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
