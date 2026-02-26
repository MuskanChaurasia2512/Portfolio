import { FiGithub, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import { FiCode } from 'react-icons/fi'
import { motion } from 'framer-motion'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
]

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative border-t border-gray-200 bg-gradient-to-br from-white via-purple-50 to-pink-50 py-8">
            {/* Animated Background Elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 text-2xl text-purple-300"
            >
                <FiCode />
            </motion.div>
            
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-4 right-4 text-xl text-pink-300"
            >
                <FiHeart />
            </motion.div>

            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3"
                    >
                        <motion.div 
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                        >
                            <FiCode className="text-white text-lg" />
                        </motion.div>
                        <div>
                            <h3 className="font-black text-gray-900 text-lg">Muskan.dev</h3>
                            <p className="text-xs text-gray-600">Full Stack Developer</p>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-4"
                    >
                        <motion.a
                            href="https://github.com/Muskanchaurasia2512"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-gray-700 hover:text-purple-600 hover:border-purple-300 transition-all duration-300 shadow-sm"
                        >
                            <FiGithub size={18} />
                        </motion.a>
                        
                        <motion.a
                            href="mailto:muskanc2512@gmail.com"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-gray-700 hover:text-purple-600 hover:border-purple-300 transition-all duration-300 shadow-sm"
                        >
                            <FiMail size={18} />
                        </motion.a>
                        
                        <motion.a
                            href="/Muskan_Resume.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
                        >
                            Resume
                        </motion.a>
                    </motion.div>

                    {/* Scroll to Top */}
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-gray-700 hover:text-purple-600 hover:border-purple-300 transition-all duration-300 shadow-sm"
                    >
                        <FiArrowUp size={18} />
                    </motion.button>
                </div>

                {/* Bottom Copyright */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="pt-6 mt-6 border-t border-gray-200 text-center"
                >
                    <p className="text-xs text-gray-600 flex items-center justify-center gap-2">
                        © {new Date().getFullYear()} <span className="font-bold text-purple-600">Muskan Chaurasia.</span> 
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-block"
                        >
                            Made with <FiHeart className="text-pink-500 mx-1 inline" /> using React
                        </motion.span>
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
