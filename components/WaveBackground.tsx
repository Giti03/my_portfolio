"use client"

import { useEffect, useRef } from "react"

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0
    const color = "#8B5CF6"

    const animate = () => {
      ctx.fillStyle = "#0A0A0F"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.1

      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)

        for (let x = 0; x < canvas.width; x += 10) {
          const y = Math.sin(x * 0.01 + time + i) * 100 + canvas.height / 2
          ctx.lineTo(x, y)
        }

        ctx.stroke()
      }

      time += 0.005
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}
