const TESTIMONIALS = [
  {
    quote: "I had no idea Instagram was making 200+ background connections every hour. ByteBouncer showed me in the first 10 minutes. I blocked everything and my battery actually improved.",
    name: 'Marcus T.',
    role: 'iOS Developer, Berlin',
    initials: 'MT',
  },
  {
    quote: "Finally an app that doesn't just say 'we care about privacy' — it actually proves it by showing you a live log of everything it blocked. This should be built into iOS.",
    name: 'Sara K.',
    role: 'Security Researcher',
    initials: 'SK',
  },
  {
    quote: "I'm on a limited data plan. ByteBouncer saved me 2.4 GB in my first week. That's real money. The background ad network traffic was absolutely wild to see.",
    name: 'James O.',
    role: 'Freelancer, Lagos',
    initials: 'JO',
  },
]

function SocialProof() {
  return (
    <section className="border-t border-bb-border py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">

        <div className="reveal flex items-center gap-3 mb-4 md:mb-6 justify-center">
          <div className="h-px w-8 bg-bb-lime" />
          <span className="text-xs uppercase tracking-widest text-bb-lime font-semibold">Early Beta Feedback</span>
          <div className="h-px w-8 bg-bb-lime" />
        </div>

        <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl font-black text-center tracking-tight mb-8 md:mb-12">
          What beta testers are{' '}
          <span className="text-gradient-lime">saying.</span>
        </h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-8 md:mb-14">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal ${i > 0 ? `reveal-delay-${i}` : ''} rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#BEFF00">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-bb-gray leading-relaxed text-sm flex-1 mb-5">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-bb-black flex-shrink-0"
                  style={{ background: '#BEFF00' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-bb-gray">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            { value: '847', label: 'Users on the waitlist' },
            { value: '2.4 GB', label: 'Avg. data saved per week' },
            { value: '342K+', label: 'Requests blocked daily' },
            { value: '4.9★', label: 'Avg. beta satisfaction score' },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center rounded-xl md:rounded-2xl py-5 md:py-6 px-3 md:px-4"
              style={{
                background: 'rgba(190,255,0,0.04)',
                border: '1px solid rgba(190,255,0,0.1)',
              }}
            >
              <div className="text-2xl md:text-3xl font-black text-white mb-1">{item.value}</div>
              <div className="text-xs text-bb-gray">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
