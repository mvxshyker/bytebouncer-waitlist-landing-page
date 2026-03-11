import { useState } from 'react'

function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [validationError, setValidationError] = useState('')

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    if (!isValidEmail(email)) {
      setValidationError('Enter a valid email address.')
      return
    }
    setValidationError('')
    try {
      const res = await fetch('https://formspree.io/f/meergrpq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _replyto: email, _subject: "You're on the ByteBouncer waitlist!" }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  const productLinks = ['Features', 'Pricing', 'How It Works', 'Changelog']
  const companyLinks = ['About', 'Blog', 'Careers', 'Press Kit']
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

  return (
    <footer className="relative">
      {/* Final CTA Section */}
      <section id="join" className="reveal border-t border-bb-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(190,255,0,0.05) 0%, transparent 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 text-center">

          <div className="reveal inline-flex items-center gap-2 bg-bb-dark border border-bb-border rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-bb-lime" />
            <span className="text-xs font-medium text-bb-gray">Closing beta soon — spots are limited</span>
          </div>

          <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Stop the leak.{' '}
            <span className="text-gradient-lime">Take back control.</span>
          </h2>

          <p className="reveal reveal-delay-2 text-bb-gray text-lg md:text-xl max-w-lg mx-auto mb-10">
            Join 847 users already on the waitlist. Get early access, founding member status, and a say in what we build next.
          </p>

          {submitted ? (
            <div className="reveal reveal-delay-3 flex items-center justify-center gap-3 max-w-md mx-auto mb-5 rounded-2xl py-5 px-8" style={{ background: 'rgba(190,255,0,0.07)', border: '1px solid rgba(190,255,0,0.2)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6V12C4 16.42 7.38 20.52 12 21.5C16.62 20.52 20 16.42 20 12V6L12 2Z" fill="rgba(190,255,0,0.2)" stroke="#BEFF00" strokeWidth="1.5" />
                <path d="M9 12L11 14L15 10" stroke="#BEFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-bb-lime font-semibold">You're on the list. We'll be in touch.</span>
            </div>
          ) : (
            <div className="reveal reveal-delay-3 max-w-md mx-auto mb-5">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setValidationError('') }}
                  placeholder="your@email.com"
                  className="flex-1 bg-bb-dark border border-bb-border rounded-full px-6 py-4 text-white placeholder-bb-gray text-base outline-none focus:border-bb-lime transition-colors duration-200"
                />
                <button type="submit" className="btn-primary text-base whitespace-nowrap">
                  <span>Claim My Spot</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
              {validationError && <p className="text-bb-red text-sm mt-3">{validationError}</p>}
              {error && <p className="text-bb-red text-sm mt-3">Something went wrong. Try again or email us at hello@bytebouncer.app</p>}
            </div>
          )}

          <p className="reveal text-sm text-bb-gray">Free during beta · No credit card · Unsubscribe anytime</p>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-bb-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
            {/* Logo & Description */}
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-bb-lime/10 border border-bb-lime/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 6V12C4 16.42 7.38 20.52 12 21.5C16.62 20.52 20 16.42 20 12V6L12 2Z" fill="rgba(190, 255, 0, 0.15)" stroke="#BEFF00" strokeWidth="1.5" />
                    <path d="M9 12L11 14L15 10" stroke="#BEFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-white font-bold text-lg tracking-tight">ByteBouncer</span>
              </div>
              <p className="text-sm text-bb-gray leading-relaxed max-w-xs">
                A local firewall for iPhone that blocks background trackers, ad networks, and analytics — 100% on-device.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <a href="#" className="text-bb-gray hover:text-white transition-colors duration-200" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="text-bb-gray hover:text-white transition-colors duration-200" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-bb-gray hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-bb-gray hover:text-white transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-bb-gray hover:text-white transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-bb-gray hover:text-white transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-bb-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-bb-gray">© 2026 ByteBouncer. All rights reserved.</p>
            <p className="text-sm text-bb-gray">Made with conviction in Prague 🇨🇿</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
