import { useRef, useState } from 'react'
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { FiExternalLink, FiAward, FiCpu, FiStar, FiTriangle, FiTrendingUp, FiTarget } from 'react-icons/fi'
import CodingBackground from './CodingBackground'

const achievements = [
    {
        title: 'Full Stack Development',
        issuer: 'Skilledu.in',
        icon: FiAward,
        color: 'from-purple-500 to-violet-600',
        glow: 'rgba(139, 92, 246, 0.4)',
        desc: 'Comprehensive mastery of MERN stack ecosystem, encompassing architectural design and advanced state management.',
        type: 'Excellence'
    },
    {
        title: 'OpenAI Buildathon',
        issuer: 'NxtWave',
        icon: FiCpu,
        color: 'from-blue-500 to-cyan-500',
        glow: 'rgba(59, 130, 246, 0.4)',
        desc: 'Architecture of AI-driven solutions powered by OpenAI APIs, recognized for innovation in the build-athon.',
        type: 'Innovation'
    },
    {
        title: 'Gen AI Startup Program',
        issuer: 'Google',
        icon: FiTriangle,
        color: 'from-emerald-500 to-teal-500',
        glow: 'rgba(16, 185, 129, 0.4)',
        desc: 'Selected for intensive Generative AI training, focusing on LLM deployment and cloud optimization.',
        type: 'Startup'
    },
    {
        title: 'DevVerse AI Challenges',
        issuer: 'DevVerse',
        icon: FiStar,
        color: 'from-pink-500 to-rose-600',
        glow: 'rgba(236, 72, 153, 0.4)',
        desc: 'Consistently rank in top tiers for rapid AI feature integration and specialized architectural challenges.',
        type: 'Top Tier'
    }
]

function AnimatedAchievementCard({ cert, index }) {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateX: 5
            }}
            className="relative group cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Glow Effect */}
            <motion.div
                animate={{
                    opacity: isHovered ? [0.5, 1, 0.5] : 0,
                    scale: isHovered ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{ background: cert.glow }}
            />
            
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Floating Badge */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3"
                >
                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${cert.color} text-white shadow-lg`}>
                        {cert.type}
                    </div>
                </motion.div>
                
                {/* Icon Container */}
                <motion.div
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 flex items-center justify-center mb-4 group-hover:border-purple-400 transition-all duration-300"
                >
                    <cert.icon 
                        className="text-2xl" 
                        style={{ color: cert.glow.replace('0.4', '1') }}
                    />
                </motion.div>
                
                {/* Content */}
                <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                        {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {cert.desc}
                    </p>
                </div>
                
                {/* Bottom Decor */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <motion.div
                        animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
                        className="flex items-center gap-2 text-xs font-bold text-purple-600 uppercase tracking-widest"
                    >
                        <FiTarget size={12} />
                        Verified
                    </motion.div>
                    <motion.div
                        animate={{ rotate: isHovered ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
                    >
                        <FiExternalLink size={14} />
                    </motion.div>
                </div>
            </div>
            
            {/* Floating Particles */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                    }}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                        top: `${20 + i * 25}%`,
                        left: `${10 + i * 30}%`
                    }}
                />
            ))}
        </motion.div>
    )
}

export default function Achievements() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="achievements" ref={ref} className="relative py-[60px] overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50 transition-all duration-300">
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
                    className="absolute top-40 right-40 text-4xl text-purple-300"
                >
                    <FiAward />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 left-40 text-3xl text-pink-300"
                >
                    <FiStar />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200/50 text-[10px] font-black uppercase tracking-widest text-purple-600 mb-6">
                        <FiAward /> Achievements
                    </div>
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            Awards & Recognition
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Certifications and achievements that showcase my expertise and commitment to excellence in web development.
                    </p>
                </motion.div>

                {/* Achievements Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((cert, i) => (
                        <AnimatedAchievementCard key={cert.title} cert={cert} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
