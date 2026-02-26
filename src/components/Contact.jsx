import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    FiMail, FiPhone, FiMapPin, FiGithub, FiSend, FiCheckCircle,
    FiUser, FiMessageSquare
} from 'react-icons/fi'
import CodingBackground from './CodingBackground'

const contactInfo = [
    { icon: <FiMail className="text-purple-400" />, label: 'Email', value: 'muskanc2512@gmail.com', href: 'mailto:muskanc2512@gmail.com' },
    { icon: <FiPhone className="text-pink-400" />, label: 'Phone', value: '+91 7477285790', href: 'tel:+917477285790' },
    { icon: <FiMapPin className="text-blue-400" />, label: 'Location', value: 'Ujjain, Madhya Pradesh, India', href: '#' },
    { icon: <FiGithub className="text-green-400" />, label: 'GitHub', value: 'Muskanchaurasia2512', href: 'https://github.com/Muskanchaurasia2512' },
]

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        try {
            // Send email using EmailJS or similar service
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'your_service_id',
                    template_id: 'your_template_id',
                    user_id: 'your_user_id',
                    template_params: {
                        from_name: form.name,
                        from_email: form.email,
                        message: form.message,
                        to_email: 'muskanc2512@gmail.com'
                    }
                })
            })
            
            if (response.ok) {
                setSent(true)
                setForm({ name: '', email: '', message: '' })
                setTimeout(() => setSent(false), 4000)
            }
        } catch (error) {
            // Fallback: open email client
            window.location.href = `mailto:muskanc2512@gmail.com?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}`
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" ref={ref} className="relative py-[40px] overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50 transition-all duration-300">
            {/* Coding Background */}
            <CodingBackground />
            {/* Light Background with animated elements */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {/* Floating Gradient Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, -100, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.2, 0.8, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-20 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 80, 0],
                        y: [0, 30, -30, 0],
                        scale: [1, 0.7, 1.3, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl"
                />
                
                {/* Animated Icons */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 right-10 text-3xl text-purple-300"
                >
                    <FiMail />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 text-2xl text-pink-300"
                >
                    <FiSend />
                </motion.div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-purple-300" />
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-purple-600">
                            Get In Touch
                        </span>
                        <div className="h-[1px] w-12 bg-purple-300" />
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
                        Contact <span className="text-purple-600">Me</span>
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
                        Have an opportunity or just want to say hi? I'd love to hear from you! 🙌
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border-2 border-gray-200 p-6 shadow-xl relative overflow-hidden">
                        {/* Floating Animated Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-4 right-4 text-2xl text-purple-400"
                        >
                            <FiMail />
                        </motion.div>
                        
                        <motion.div
                            animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-4 left-4 text-xl text-pink-400"
                        >
                            <FiSend />
                        </motion.div>
                        
                        {/* Floating Particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    x: [0, Math.random() * 40 - 20, 0],
                                    y: [0, -30, 0],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    delay: i * 0.8,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-2 h-2 bg-purple-300 rounded-full"
                                style={{
                                    top: `${10 + i * 15}%`,
                                    left: `${5 + i * 18}%`
                                }}
                            />
                        ))}
                        
                        {/* Pulsing Rings */}
                        {[...Array(2)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 1.5
                                }}
                                className="absolute inset-4 border-2 border-purple-200 rounded-full"
                            />
                        ))}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <FiUser className="text-purple-500" size={16} />
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    placeholder="Muskan Chaurasia"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-purple-50 transition-all duration-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <FiMail className="text-purple-500" size={16} />
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    placeholder="hello@example.com"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-purple-50 transition-all duration-300"
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <FiMessageSquare className="text-purple-500" size={16} />
                                Message
                            </label>
                            <textarea
                                required
                                rows={4}
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                placeholder="Hi Muskan! I'd like to connect with you..."
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-purple-50 transition-all duration-300 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-3 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    >
                                        <FiSend />
                                    </motion.div>
                                    Sending...
                                </>
                            ) : sent ? (
                                <>
                                    <FiCheckCircle /> Message Sent Successfully!
                                </>
                            ) : (
                                <>
                                    <FiSend /> Send Message
                                </>
                            )}
                        </button>
                        
                        {/* Quick Contact Info */}
                        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap justify-center gap-4">
                            <a href="mailto:muskanc2512@gmail.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
                                <FiMail className="text-purple-500" size={16} />
                                muskanc2512@gmail.com
                            </a>
                            <a href="tel:+917477285790" className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
                                <FiPhone className="text-pink-500" size={16} />
                                +91 7477285790
                            </a>
                            <a href="https://github.com/Muskanchaurasia2512" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
                                <FiGithub className="text-blue-500" size={16} />
                                GitHub
                            </a>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
