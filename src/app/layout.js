import './globals.css'

export const metadata = {
  title: 'VentureAI Search Partners | Executive Search & Recruitment',
  description: 'A human-first executive search experience. Building C-suite and board leadership teams for high-growth VC and PE-backed companies.',
  keywords: 'executive search, recruitment, C-suite, board placement, venture capital, private equity, AI talent',
  openGraph: {
    title: 'VentureAI Search Partners',
    description: 'A human-first executive search experience for VC and PE-backed companies.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
