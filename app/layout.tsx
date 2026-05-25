import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mamuka - AdTech Solutions | Revenue Optimization Platform',
  description: 'Clear, comprehensible AdTech solutions for modern publishers. Optimize revenue with dynamic floor pricing, Prebid integration, and advanced yield management.',
  keywords: ['AdTech', 'GAM', 'Prebid', 'UPR', 'Programmatic Advertising', 'Yield Optimization'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  openGraph: {
    title: 'Mamuka - AdTech Solutions',
    description: 'Revenue optimization for modern publishers',
    url: 'https://mamuka-site.vercel.app',
    siteName: 'Mamuka',
    images: [
      {
        url: 'https://mamuka-site.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f0f0f" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.vercel.sh" />
      </head>
      <body>
        <a href="#main" className="skip-to-content">
          Skip to main content
        </a>

        <header role="banner">
          <nav role="navigation" aria-label="Main navigation">
            <Link href="/" className="nav-logo" aria-label="Mamuka home">
              <Image
                src="/logo.svg"
                alt="Mamuka logo"
                width={40}
                height={40}
                priority
              />
            </Link>
            <ul className="nav-links">
              <li>
                <a href="/#services" aria-label="Navigate to services">
                  Services
                </a>
              </li>
              <li>
                <a href="/case-studies" aria-label="Navigate to case studies">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/team" aria-label="Navigate to team">
                  Team
                </a>
              </li>
              <li>
                <a href="/#contact" aria-label="Navigate to contact">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/" className="cta-button" aria-label="Get started with Mamuka">
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main id="main" role="main">
          {children}
        </main>

        <footer role="contentinfo">
          <p>&copy; 2026 Mamuka. All rights reserved.</p>
          <p>
            <a href="/privacy" aria-label="Privacy Policy">
              Privacy Policy
            </a>{' '}
            •
            <a href="/terms" aria-label="Terms of Service">
              Terms of Service
            </a>{' '}
            •
            <a href="mailto:hello@mamuka.dk" aria-label="Contact email">
              Contact Us
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
