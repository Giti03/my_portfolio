import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Code2 } from "lucide-react"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Welcome to my Portfolio - ",
  description: "Personal portfolio of Gitiparna Paul - Frontend Developer and CSE Student",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0A0F] text-white min-h-screen`}>
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
              <Code2 className="w-6 h-6" />
              <span className="font-semibold">GITIPARNA PAUL</span>
            </Link>
            <ul className="flex space-x-8">
              <li>
                <Link href="#about" className="text-white/75 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-white/75 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-white/75 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/75 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}


import './globals.css'