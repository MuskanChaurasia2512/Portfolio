import { motion } from 'framer-motion'
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiNodedotjs, SiMongodb, SiPython, SiGit } from 'react-icons/si'

export default function CodingBackground() {
    const codeSnippets = [
        { icon: SiReact, color: "#61DAFB", x: "10%", y: "20%", delay: 0 },
        { icon: SiJavascript, color: "#F7DF1E", x: "85%", y: "15%", delay: 1 },
        { icon: SiHtml5, color: "#E34F26", x: "15%", y: "80%", delay: 2 },
        { icon: SiCss3, color: "#1572B6", x: "90%", y: "85%", delay: 3 },
        { icon: SiNodedotjs, color: "#339933", x: "75%", y: "40%", delay: 4 },
        { icon: SiMongodb, color: "#47A248", x: "25%", y: "60%", delay: 5 },
        { icon: SiPython, color: "#3776AB", x: "60%", y: "70%", delay: 6 },
        { icon: SiGit, color: "#F05032", x: "40%", y: "30%", delay: 7 }
    ]

    const codeLines = [
        { text: "const developer = 'Muskan';", x: "5%", y: "10%", delay: 0 },
        { text: "function createMagic() {", x: "80%", y: "25%", delay: 2 },
        { text: "return awesome;", x: "85%", y: "30%", delay: 2.5 },
        { text: "}", x: "88%", y: "35%", delay: 3 },
        { text: "import React from 'react';", x: "12%", y: "75%", delay: 4 },
        { text: "const skills = [...];", x: "70%", y: "90%", delay: 5 },
        { text: "export default Portfolio;", x: "75%", y: "95%", delay: 5.5 }
    ]

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Floating Code Icons */}
            {codeSnippets.map((snippet, i) => (
                <motion.div
                    key={`icon-${i}`}
                    style={{
                        position: 'absolute',
                        left: snippet.x,
                        top: snippet.y,
                        color: snippet.color,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, -10, 0],
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: snippet.delay
                    }}
                    className="text-2xl md:text-3xl"
                >
                    <snippet.icon />
                </motion.div>
            ))}

            {/* Floating Code Lines */}
            {codeLines.map((line, i) => (
                <motion.div
                    key={`line-${i}`}
                    style={{
                        position: 'absolute',
                        left: line.x,
                        top: line.y,
                    }}
                    animate={{
                        opacity: [0, 0.2, 0],
                        x: [0, 20, 0],
                        y: [0, -15, 0]
                    }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: line.delay
                    }}
                    className="text-xs md:text-sm font-mono text-gray-400 whitespace-nowrap"
                >
                    {line.text}
                </motion.div>
            ))}

            {/* Binary Code Rain Effect */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={`binary-${i}`}
                    style={{
                        position: 'absolute',
                        left: `${5 + i * 6}%`,
                        top: "-10%",
                    }}
                    animate={{
                        y: ["0vh", "110vh"],
                        opacity: [0, 0.8, 0.8, 0]
                    }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                    className="text-xs font-mono text-green-500/20"
                >
                    {Math.random() > 0.5 ? '0' : '1'}
                </motion.div>
            ))}

            {/* Brackets and Symbols */}
            {['{', '}', '<', '>', '(', ')', '[', ']'].map((symbol, i) => (
                <motion.div
                    key={`symbol-${i}`}
                    style={{
                        position: 'absolute',
                        left: `${10 + i * 12}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 10 + i,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5
                    }}
                    className="text-lg md:text-xl text-purple-400/30 font-bold"
                >
                    {symbol}
                </motion.div>
            ))}

            {/* Glowing Orbs */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`orb-${i}`}
                    style={{
                        position: 'absolute',
                        left: `${20 + i * 30}%`,
                        top: `${15 + i * 20}%`,
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 1.5
                    }}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-2xl"
                />
            ))}
        </div>
    )
}
