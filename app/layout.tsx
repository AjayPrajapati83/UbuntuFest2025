import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1A1A2E',
}

export const metadata: Metadata = {
  title: 'Ubuntu 2025 - Panchtatva',
  description: 'Experience the convergence of five elements at Ubuntu 2025 - The ultimate college fest celebrating Air, Water, Earth, Fire, and Space',
  keywords: 'Ubuntu 2025, Panchtatva, College Fest, Cultural Festival, Technical Events',
  icons: {
    icon: '/circle logo.png',
    shortcut: '/circle logo.png',
    apple: '/circle logo.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Ubuntu 2025',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
