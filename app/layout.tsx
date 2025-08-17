import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lil Nouns Proposal Templates - Draft Professional DAO Proposals",
  description:
    "Professional proposal templates for Lil Nouns DAO submissions. Choose from curated templates and create compelling proposals in minutes.",
  openGraph: {
    type: "website",
    siteName: "Lil Nouns Proposal Templates",
    title: "Lil Nouns Proposal Templates - Draft Professional DAO Proposals",
    description:
      "Professional proposal templates for Lil Nouns DAO submissions. Choose from curated templates and create compelling proposals in minutes.",
  },
  twitter: {
    card: "summary",
    title: "Lil Nouns Proposal Templates - Draft Professional DAO Proposals",
    description:
      "Professional proposal templates for Lil Nouns DAO submissions. Choose from curated templates and create compelling proposals in minutes.",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
