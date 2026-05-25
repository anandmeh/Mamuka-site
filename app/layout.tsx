import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mamuka - AdTech Solutions',
  description: 'Clear, comprehensible AdTech solutions for modern publishers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/" className="nav-logo">Mamuka</a>
          <ul className="nav-links">
            <li><a href="/#services">Services</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><button className="cta-button">Get Started</button></li>
          </ul>
        </nav>
        {children}
        <footer>
          <p>&copy; 2026 Mamuka. All rights reserved.</p>
          <p>
            <a href="#privacy">Privacy Policy</a> •
            <a href="#terms">Terms of Service</a> •
            <a href="mailto:hello@mamuka.dk">Contact Us</a>
          </p>
        </footer>
      </body>
    </html>
  )
}
