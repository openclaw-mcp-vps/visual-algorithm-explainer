import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Visual Algorithm Explainer',
  description: 'Generate visual step-by-step explanations for any algorithm. Perfect for CS educators, bootcamp instructors, and technical writers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c67a309a-df4a-4102-a229-5f84fd406a46"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
