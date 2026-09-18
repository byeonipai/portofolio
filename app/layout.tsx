import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { profile } from '@/lib/content'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description:
    'Portfolio of Fayza Kamila — System Analyst with UI/UX and Frontend Development experience. Turning user needs and business requirements into structured systems, intuitive interfaces, and functional digital products.',
  generator: 'v0.app',
  keywords: [
    'Fayza Kamila',
    'System Analyst',
    'UI/UX Designer',
    'Frontend Developer',
    'Portfolio',
    'Information Systems',
  ],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.role,
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#231a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
