"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A React-based task management application with drag-and-drop functionality",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard using OpenWeatherMap API and Chart.js",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

export default function Projects() {
  const [[page, direction], setPage] = useState([0, 0])

  const projectIndex = Math.abs(page % projects.length)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">My Projects</h2>
        <div className="relative h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="bg-gray-700 rounded-lg shadow-lg p-6">
                <img
                  src={projects[projectIndex].image || "/placeholder.svg"}
                  alt={projects[projectIndex].title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{projects[projectIndex].title}</h3>
                <p className="text-gray-300">{projects[projectIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-blue-400" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  )
}
