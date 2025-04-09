"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type React from "react"

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const inputVariants = {
  focus: { scale: 1.02, boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)" },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Contact Me</h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              variants={inputVariants}
              whileFocus="focus"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              variants={inputVariants}
              whileFocus="focus"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
              variants={inputVariants}
              whileFocus="focus"
            ></motion.textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
