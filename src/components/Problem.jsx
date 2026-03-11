const LEAKS = [
  {
    app: 'Instagram',
    action: 'Prefetches your entire feed before you open the app',
    mb: '18 MB',
    color: '#E1306C',
  },
  {
    app: 'Weather App',
    action: 'Pings 4 ad servers every time you check the forecast',
    mb: '6 MB',
    color: '#4A9EFF',
  },
  {
    app: 'News App',
    action: 'Sends behavioral data to 9 third-party analytics domains',
    mb: '11 MB',
    color: '#FF9500',
  },
  {
    app: 'Free Game',
    action: 'Transmits device fingerprint to 12 ad networks while idle',
    mb: '24 MB',
    color: '#FF3B3B',
  },
]

function Problem() {
  return (
    <section className="relative border-t border-bb-border py-16 md:py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[400px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(255,59,59,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">

        <div className="reveal flex items-center gap-3 mb-4 md:mb-6 justify-center">
          <div className="h-px w-8 bg-bb-red" />
          <span className="text-xs uppercase tracking-widest text-bb-red font-semibold">The Problem</span>
          <div className="h-px w-8 bg-bb-red" />
        </div>

        <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight mb-4 md:mb-6">
          Every app has a{' '}
          <span style={{ color: '#FF3B3B' }}>secret life.</span>
        </h2>

        <p className="reveal reveal-delay-2 text-bb-gray text-base md:text-lg lg:text-xl text-center max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
          Right now, your apps are making hundreds of connections you never authorized. They drain your battery, eat your data plan, and feed the surveillance economy — all in the background, while your screen is off.
        </p>

        {/* Leak list */}
        <div className="reveal reveal-delay-2 max-w-2xl mx-auto space-y-2 md:space-y-3 mb-8 md:mb-12">
          {LEAKS.map((item) => (
            <div
              key={item.app}
              className="flex items-center justify-between rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }}
                />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{item.app}</div>
                  <div className="text-xs text-bb-gray mt-0.5 leading-snug">{item.action}</div>
                </div>
              </div>
              <div className="text-sm font-bold flex-shrink-0 ml-3" style={{ color: item.color }}>
                {item.mb}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="reveal reveal-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          {[
            { stat: '3,000+', label: 'Background connections your iPhone makes per day' },
            { stat: '6+', label: 'Third-party domains the average "free" app reports to' },
            { stat: '80%', label: 'Of free apps monetize through behavioral tracking' },
          ].map((item) => (
            <div
              key={item.stat}
              className="text-center rounded-xl md:rounded-2xl p-5 md:p-6"
              style={{
                background: 'rgba(255,59,59,0.04)',
                border: '1px solid rgba(255,59,59,0.12)',
              }}
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-2">{item.stat}</div>
              <div className="text-xs md:text-sm text-bb-gray leading-snug">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
