const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6V12C4 16.42 7.38 20.52 12 21.5C16.62 20.52 20 16.42 20 12V6L12 2Z" fill="rgba(190,255,0,0.15)" stroke="#BEFF00" strokeWidth="1.5" />
        <path d="M9 12L11 14L15 10" stroke="#BEFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No VPN. No servers.",
    description: "ByteBouncer uses iOS's Network Extension framework to filter traffic locally. Your data never touches our infrastructure. Not even for a millisecond.",
    badge: "Privacy-first architecture",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="rgba(190,255,0,0.3)" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="rgba(190,255,0,0.15)" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="rgba(190,255,0,0.15)" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" fill="rgba(190,255,0,0.3)" />
      </svg>
    ),
    title: 'Real-time connection logs.',
    description: 'Every blocked request is logged with the app name, destination domain, and timestamp. Finally, see what Instagram is actually doing in the background.',
    badge: 'Full transparency',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="rgba(190,255,0,0.4)" strokeWidth="1.5" fill="none" />
        <path d="M12 6v6l4 2" stroke="#BEFF00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Smart pre-built filters.',
    description: 'One tap to block social media prefetching, ad networks, or analytics SDK traffic. Filters are maintained and updated as new trackers emerge.',
    badge: 'Always up to date',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="rgba(190,255,0,0.15)" stroke="#BEFF00" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Battery & data friendly.',
    description: 'Blocking background requests means apps run leaner. Beta users report 10–18% better battery life and measurable savings on limited data plans.',
    badge: '10–18% better battery in beta',
  },
]

function Features() {
  return (
    <section className="border-t border-bb-border py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">

        <div className="reveal flex items-center gap-3 mb-4 md:mb-6 justify-center">
          <div className="h-px w-8 bg-bb-lime" />
          <span className="text-xs uppercase tracking-widest text-bb-lime font-semibold">What You Get</span>
          <div className="h-px w-8 bg-bb-lime" />
        </div>

        <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight mb-3 md:mb-4">
          Built for people who{' '}
          <span className="text-gradient-lime">actually care.</span>
        </h2>

        <p className="reveal reveal-delay-2 text-bb-gray text-base md:text-lg text-center max-w-xl mx-auto mb-8 md:mb-14">
          Not another settings panel you'll never open. ByteBouncer works silently and shows you exactly what it stopped.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''} rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-7`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(190,255,0,0.07)',
                  border: '1px solid rgba(190,255,0,0.15)',
                }}
              >
                {f.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-bb-gray leading-relaxed text-sm mb-3 md:mb-4">{f.description}</p>
              <span
                className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(190,255,0,0.07)',
                  border: '1px solid rgba(190,255,0,0.15)',
                  color: 'rgba(190,255,0,0.7)',
                }}
              >
                {f.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
