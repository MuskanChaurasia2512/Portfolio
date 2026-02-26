import { useRef, useState } from 'react'
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { FiCalendar, FiMapPin, FiAward, FiBookOpen, FiBriefcase, FiTrendingUp, FiTarget, FiZap } from 'react-icons/fi'
import CodingBackground from './CodingBackground'

const educationData = {
    graduation: [
        {
            title: "Bachelor of Computer Applications (BCA)",
            subtitle: "Govt. Madhav Science College, Ujjain",
            date: "2023 — 2026",
            status: "Pursuing",
            desc: "Focus on software development, CS fundamentals, and modern web technologies including the MERN stack.",
            color: "from-blue-500/20 to-cyan-500/20",
            icon: FiAward
        }
    ],
    schooling: [
        {
            title: "12th Grade (MP Board)",
            subtitle: "Kalidas Montessori School, Ujjain",
            date: "2022 — 2023",
            status: "Completed",
            desc: "Higher Secondary Education.",
            color: "from-purple-500/20 to-pink-500/20",
            icon: FiBookOpen
        }
    ],
    internship: [
        {
            title: "Full Stack Developer Intern",
            subtitle: "Geek Theory",
            date: "Present",
            status: "Ongoing",
            desc: "Building real-world web applications, debugging, and optimizing performance using modern tech stacks.",
            color: "from-emerald-500/20 to-teal-500/20",
            icon: FiBriefcase
        }
    ]
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

function AnimatedTimelineItem({ item, index, side }) {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <motion.div
            initial={{ opacity: 0, x: side === 'left' ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative flex items-center ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-8`}
        >
            {/* Content Box */}
            <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative flex-1 bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
                {/* Animated Background */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 opacity-5 bg-gradient-to-br ${item.color} rounded-2xl`}
                    style={{ backgroundSize: "200% 200%" }}
                />
                
                {/* Floating Badge */}
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3 z-10"
                >
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {item.status}
                    </div>
                </motion.div>
                
                {/* Icon and Content */}
                <div className="flex items-start gap-4 relative z-10">
                    <motion.div
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-purple-400 transition-all duration-300"
                    >
                        <item.icon className="text-xl text-purple-600" />
                    </motion.div>
                    
                    <div className="flex-1 space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <FiMapPin size={12} className="text-purple-500" />
                            </motion.div>
                            {item.subtitle}
                        </p>
                        
                        <div className="flex items-center gap-2 text-xs font-bold text-purple-600 uppercase tracking-widest">
                            <motion.div
                                animate={{ rotate: [0, 180, 360] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <FiCalendar size={10} />
                            </motion.div>
                            {item.date}
                        </div>
                        
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
            
            {/* Timeline Dot */}
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-6 h-6 bg-white border-4 border-purple-500 rounded-full shadow-lg"
            >
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-purple-400 rounded-full"
                />
            </motion.div>
            
            {/* Connecting Line */}
            <div className={`absolute top-1/2 ${side === 'left' ? 'right-full' : 'left-full'} w-8 h-0.5 bg-gradient-to-r ${side === 'left' ? 'from-purple-300 to-transparent' : 'from-transparent to-purple-300'}`} />
        </motion.div>
    )
}

export default function Education() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="education" ref={ref} className="relative py-[100px] overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 transition-all duration-300">
            {/* Coding Background */}
            <CodingBackground />
            {/* Light Background with animated elements */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {/* Floating Gradient Orbs */}
                <motion.div
                    animate={{
                        x: [0, 150, -150, 0],
                        y: [0, -80, 80, 0],
                        scale: [1, 1.4, 0.6, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-32 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -120, 120, 0],
                        y: [0, 60, -60, 0],
                        scale: [1, 0.5, 1.5, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute bottom-32 right-32 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 80, -80, 0],
                        y: [0, -40, 40, 0],
                        scale: [1, 1.2, 0.8, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 left-1/2 w-28 h-28 bg-pink-200/30 rounded-full blur-2xl"
                />
                
                {/* Animated Icons */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 text-5xl text-blue-300"
                >
                    <FiAward />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-20 text-4xl text-purple-300"
                >
                    <FiBookOpen />
                </motion.div>
                <motion.div
                    animate={{ rotate: -360, scale: [1, 0.8, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/3 right-1/3 text-3xl text-pink-300"
                >
                    <FiBriefcase />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-purple-300" />
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-purple-600">
                            My Journey
                        </span>
                        <div className="h-[1px] w-12 bg-purple-300" />
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-black text-gray-900 tracking-tight mb-8">
                        Academic & <span className="text-purple-600">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline Design */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Central Timeline Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 via-pink-300 to-blue-300 transform -translate-x-1/2 origin-top"
                    />
                    
                    {/* Timeline Items */}
                    <div className="space-y-16">
                        {/* Internship */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <motion.div 
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="flex items-center justify-center mb-6"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-3xl mr-3"
                                >
                                    💼
                                </motion.div>
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">Internship</h3>
                            </motion.div>
                            {educationData.internship.map((item, i) => (
                                <AnimatedTimelineItem key={i} item={item} index={i} side="left" />
                            ))}
                        </motion.div>

                        {/* Graduation */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <motion.div 
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="flex items-center justify-center mb-6"
                            >
                                <motion.div
                                    animate={{ rotate: [0, -15, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-3xl mr-3"
                                >
                                    🎓
                                </motion.div>
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">Graduation</h3>
                            </motion.div>
                            {educationData.graduation.map((item, i) => (
                                <AnimatedTimelineItem key={i} item={item} index={i} side="right" />
                            ))}
                        </motion.div>

                        {/* Schooling */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="relative"
                        >
                            <motion.div 
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="flex items-center justify-center mb-6"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-3xl mr-3"
                                >
                                    🏫
                                </motion.div>
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">Schooling</h3>
                            </motion.div>
                            {educationData.schooling.map((item, i) => (
                                <AnimatedTimelineItem key={i} item={item} index={i} side="left" />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

