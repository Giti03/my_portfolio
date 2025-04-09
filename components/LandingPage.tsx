"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
}

export default function LandingPage({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [loadingText, setLoadingText] = useState("")
  const fullText = "Gitiparna Paul"

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setLoadingText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
        setTimeout(onLoadingComplete, 1000) // Delay before transitioning to main content
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center">
      <div className="text-5xl text-blue-400 font-bold mb-8">
        {loadingText}
        <motion.span
          variants={cursorVariants}
          animate="blinking"
          className="inline-block w-[4px] h-[50px] bg-blue-400 ml-1"
        />
      </div>
      <motion.div
        className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-blue-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}
