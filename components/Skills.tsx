"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "GraphQL", icon: "🔺" },
  { name: "Tailwind CSS", icon: "🎨" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">My Skills</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <h3 className="text-xl font-semibold text-blue-400">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
