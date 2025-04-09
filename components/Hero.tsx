"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 className="text-6xl font-bold mb-4 text-blue-400" variants={itemVariants}>
          Gitiparna Paul
        </motion.h1>
        <motion.p className="text-2xl text-gray-300 mb-8" variants={itemVariants}>
          Passionate Developer | Creative Problem Solver
        </motion.p>
        <motion.button
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59, 130, 246)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </section>
  )
}
