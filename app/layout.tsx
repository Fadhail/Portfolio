import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fadel - AI Engineer & System Developer",
  description:
    "Portfolio of Fadel, an Informatics Engineering student building AI-powered and system-driven tools. Showcasing projects in machine learning, distributed systems, and full-stack development.",
  keywords: ["AI Engineer", "Machine Learning", "System Developer", "Full Stack", "Portfolio"],
  authors: [{ name: "Fadel" }],
    generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
