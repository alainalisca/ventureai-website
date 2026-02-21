import './globals.css'

export const metadata = {
  title: 'VentureAI Search Partners | Executive Search & C-Suite Recruitment',
  description: 'A human-first executive search experience. VentureAI Search Partners builds C-suite, board, and senior leadership teams for high-growth VC-backed and PE-backed companies nationwide. 100% contingency-based with a 1-year guarantee.',
  keywords: [
    'executive search',
    'executive recruitment',
    'C-suite recruiting',
    'CEO search',
    'CFO search',
    'CTO search',
    'board placement',
    'venture capital recruiting',
    'private equity recruiting',
    'VC-backed executive search',
    'PE-backed executive search',
    'leadership hiring',
    'senior executive placement',
    'AI talent recruitment',
    'contingency executive search',
    'nationwide executive search',
    'VP search firm',
    'chief officer recruitment',
    'portfolio company leadership',
    'tech executive search',
  ].join(', '),
  authors: [{ name: 'VentureAI Search Partners' }],
  creator: 'VentureAI Search Partners',
  publisher: 'VentureAI Search Partners',
  robots: 'index, follow',
  openGraph: {
    title: 'VentureAI Search Partners | Executive Search & C-Suite Recruitment',
    description: 'A human-first executive search experience for VC and PE-backed companies. 100% contingency-based. 1-year guarantee on all placements.',
    url: 'https://ventureaisearch.com',
    siteName: 'VentureAI Search Partners',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VentureAI Search Partners | Executive Search & C-Suite Recruitment',
    description: 'A human-first executive search experience for VC and PE-backed companies. Building leadership teams nationwide.',
    creator: '@ventureaisearch',
  },
  metadataBase: new URL('https://ventureaisearch.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2A9D8F" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
