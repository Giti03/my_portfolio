"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MousePointer2, ExternalLink } from "lucide-react"
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa"
import { SiRedux, SiMongodb } from "react-icons/si"
import WaveBackground from "@/components/WaveBackground"
import { useState, useEffect } from "react"

type Project = {
  title: string
  description: string
  tech: string[]
  githubLink?: string
  demoLink?: string
}

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
]

const projects: Project[] = [
  {
    title: "E-Commerce Site",
    description:
      "Developed a responsive e-commerce site using HTML, CSS and Javascript. Implemented dynamic product listing, a shopping cart, and secure checkout functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Giti03/ecom.git",
    demoLink: "https://giti03.github.io/ecom/",
  },
  {
    title: "Weather Site",
    description:
      "A weather site built with HTML, CSS, and JavaScript fetches real-time weather data using a weather API. It displays the current temperature, weather conditions, and location details for a user-specified city.",
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    demoLink: "https://giti03.github.io/Weather-/",
  },
  {
    title: "Todo List",
    description:
      "This project demonstrated core React principles, including component-based architecture, state management, and user interaction. Enhanced user experience with features for creating, completing, and deleting tasks while ensuring data persistence across sessions.",
    tech: ["React", "State Management"],
    demoLink: "https://giti03.github.io/todo-react/",
  },
  {
    title: "Photo Gallery",
    description:
      "This gallery allows users to click on images to view them in a lightbox-style slider, complete with next/prev navigation and slideshow feature that cycles through images every few seconds.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://giti03.github.io/photo-gallery/",
  },
]

export default function Home() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 0.1
      })
    }, 10)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative">
      <WaveBackground />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4">
              <div className="w-1 h-16 bg-[#8B5CF6]" />
              <h1 className="text-6xl font-bold">
                Hi, I'm <span className="text-[#8B5CF6]">Gitiparna</span>
              </h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-2xl text-white/80"
            >
              Frontend Developer | CSE Student
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-12 top-1/2 text-white/60"
        >
          {progress.toFixed(2)}%
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-[#8B5CF6]"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-white/80"
          >
            I am a final-year CSE student at St Thomas College of Engineering and Technology with a passion for frontend
            development. Over the past few years, I've honed my skills in development side. I'm driven by a deep
            curiosity for learning new technologies and concepts, constantly pushing myself to stay updated with the
            latest trends.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-white/80"
          >
            <p className="font-semibold mb-2">Education:</p>
            <ul className="space-y-2">
              <li>B.Tech in CSE - St Thomas College of Engineering and Technology </li>
              <li>12th - M.P.Birla Foundation Higher Secondary School </li>
              <li>10th - M.P.Birla Foundation Higher Secondary School </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-[#8B5CF6]"
          >
            Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center gap-2"
              >
                <skill.icon size={64} color={skill.color} />
                <span className="text-sm text-white/80">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-[#8B5CF6]"
          >
            Projects
          </motion.h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex space-x-3">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" title="Live Demo">
                        <ExternalLink className="w-5 h-5 text-[#8B5CF6] hover:text-[#9d78fa] transition-colors" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                        <Github className="w-5 h-5 text-[#8B5CF6] hover:text-[#9d78fa] transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-[#8B5CF6]"
          >
            Contact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4"
          >
            <a
              href="mailto:gitiparnapaul03@gmail.com"
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>gitiparnapaul03@gmail.com</span>
            </a>
            <a
              href="tel:+918910070663"
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 8910070663</span>
            </a>
            <a
              href="https://linkedin.com/in/gitiparna-paul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>linkedin.com/in/gitiparna-paul</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2"
      >
        <MousePointer2 className="w-6 h-6 text-white/60 animate-bounce" />
      </motion.div>
    </main>
  )
}
