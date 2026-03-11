const STEPS = [
  {
    number: '01',
    title: 'Install ByteBouncer',
    description: 'Download from the App Store. Setup takes under 60 seconds — no configuration required.',
    detail: 'Free during beta. No payment, no account.',
  },
  {
    number: '02',
    title: 'Enable the Local Firewall',
    description: 'One tap activates your on-device network guardian. Traffic stays on your phone — nothing routes through our servers.',
    detail: 'Uses iOS Network Extension. No VPN profile needed.',
  },
  {
    number: '03',
    title: 'Watch trackers get blocked',
    description: 'See exactly what was being sent — which apps, which domains, and how much data was stopped — in real time.',
    detail: 'Full connection logs. Exportable reports coming in v1.1.',
  },
]

function HowItWorks() {
  return (
    <section className="border-t border-bb-border py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">

        <div className="reveal flex items-center gap-3 mb-4 md:mb-6 justify-center">
          <div className="h-px w-8 bg-bb-lime" />
          <span className="text-xs uppercase tracking-widest text-bb-lime font-semibold">How It Works</span>
          <div className="h-px w-8 bg-bb-lime" />
        </div>

        <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight mb-3 md:mb-4">
          Three steps to{' '}
          <span className="text-gradient-lime">total control.</span>
        </h2>

        <p className="reveal reveal-delay-2 text-bb-gray text-base md:text-lg text-center max-w-xl mx-auto mb-8 md:mb-14">
          No router changes. No technical knowledge. No monthly fees.
        </p>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Connector line — desktop only */}
          <div
            className="absolute left-7 top-10 bottom-10 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, rgba(190,255,0,0.3), rgba(190,255,0,0.05))' }}
          />

          <div className="space-y-4 md:space-y-6">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`reveal ${i > 0 ? `reveal-delay-${i}` : ''} flex gap-4 md:gap-8`}
              >
                {/* Number badge */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-xs md:text-sm"
                    style={{
                      background: 'rgba(190,255,0,0.08)',
                      border: '1px solid rgba(190,255,0,0.25)',
                      color: '#BEFF00',
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-xl md:rounded-2xl p-4 md:p-6"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <h3 className="text-base md:text-xl font-bold text-white mb-1.5 md:mb-2">{step.title}</h3>
                  <p className="text-bb-gray text-sm md:text-base leading-relaxed mb-2 md:mb-3">{step.description}</p>
                  <span
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(190,255,0,0.07)',
                      border: '1px solid rgba(190,255,0,0.15)',
                      color: 'rgba(190,255,0,0.7)',
                    }}
                  >
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
