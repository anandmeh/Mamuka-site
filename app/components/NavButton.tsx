'use client'

export function GetStartedButton() {
  return (
    <button
      className="cta-button"
      onClick={() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }}
      aria-label="Get started with Mamuka"
    >
      Get Started
    </button>
  )
}
