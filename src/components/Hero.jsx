import AppMockup from './AppMockup'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[400px] z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(190, 255, 0, 0.06) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Copy */}
          <div className="flex-1 text-center lg:text-left w-full">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-bb-dark border border-bb-border rounded-full px-3 py-1.5 mb-6"
              style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}
            >
              <div className="w-2 h-2 rounded-full bg-bb-lime" />
              <span className="text-xs font-medium text-bb-gray">847 people on the waitlist</span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-4 md:mb-6"
              style={{ animation: 'fadeInUp 0.7s ease-out 0.1s forwards', opacity: 0 }}
            >
              Your phone is{' '}
              <span className="text-gradient-lime">leaking data</span>
              {' '}right now.
            </h1>

            {/* Sub-headline */}
            <p
              className="text-base md:text-lg lg:text-xl text-bb-gray leading-relaxed mb-3 max-w-lg mx-auto lg:mx-0"
              style={{ animation: 'fadeInUp 0.7s ease-out 0.2s forwards', opacity: 0 }}
            >
              ByteBouncer is a local firewall for iPhone that blocks apps from phoning home to trackers, ad networks, and analytics servers — without routing your traffic through a VPN.
            </p>

            {/* Platform note */}
            <p
              className="text-sm text-bb-gray mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0"
              style={{ animation: 'fadeInUp 0.7s ease-out 0.25s forwards', opacity: 0 }}
            >
              Runs entirely on-device. Your traffic never leaves your phone.
            </p>

            {/* CTA */}
            <div style={{ animation: 'fadeInUp 0.7s ease-out 0.35s forwards', opacity: 0 }}>
              <a href="#join" className="btn-primary text-base md:text-lg">
                <span>Claim Your Beta Spot</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p
                className="mt-3 text-sm text-bb-gray"
                style={{ animation: 'fadeInUp 0.7s ease-out 0.5s forwards', opacity: 0 }}
              >
                Free during beta · No credit card · iOS only
              </p>
            </div>

            {/* Proof stats — grid on mobile, flex on larger */}
            <div
              className="grid grid-cols-3 gap-3 mt-8 md:mt-10 max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:flex lg:items-center lg:gap-6"
              style={{ animation: 'fadeInUp 0.7s ease-out 0.55s forwards', opacity: 0 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-black text-white">2.4 GB</div>
                <div className="text-[10px] md:text-xs text-bb-gray leading-tight">avg. saved per week</div>
              </div>
              <div className="hidden lg:block w-px h-8 bg-bb-border" />
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-black text-white">342K+</div>
                <div className="text-[10px] md:text-xs text-bb-gray leading-tight">requests blocked daily</div>
              </div>
              <div className="hidden lg:block w-px h-8 bg-bb-border" />
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-black text-white">100%</div>
                <div className="text-[10px] md:text-xs text-bb-gray leading-tight">on-device. no servers</div>
              </div>
            </div>
          </div>

          {/* Mockup — hidden on mobile, visible lg+ */}
          <div
            className="hidden lg:flex flex-shrink-0"
            style={{ animation: 'fadeInUp 0.9s ease-out 0.3s forwards', opacity: 0 }}
          >
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
