const FILTERS = [
  { label: 'Social Media Prefetch', sub: 'Blocks auto-playing videos & preloading' },
  { label: 'Analytics & Crash Reports', sub: 'Stops background telemetry to servers' },
  { label: 'Advertising Networks', sub: 'Blocks ad tracking domains and scripts' },
]

function AppMockup() {
  return (
    <div className="relative">
      {/* Phone Frame — flat, no float/glow animation */}
      <div
        className="relative w-[270px] h-[560px] md:w-[290px] md:h-[600px] rounded-[52px] bg-[#111] overflow-hidden"
        style={{
          border: '1.5px solid rgba(255,255,255,0.12)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Subtle edge highlight */}
        <div
          className="absolute inset-0 rounded-[52px] pointer-events-none z-30"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)',
          }}
        />

        {/* Dynamic Island */}
        <div
          className="absolute top-3 left-1/2 z-30"
          style={{
            transform: 'translateX(-50%)',
            width: '110px',
            height: '34px',
            background: '#000',
            borderRadius: '20px',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.07)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{
            width: '9px', height: '9px', borderRadius: '50%',
            background: '#1c1c1e',
            boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.05)',
            position: 'absolute', right: '16px',
          }} />
        </div>

        {/* Screen Content */}
        <div className="relative z-10 flex flex-col pt-14 px-4 h-full">

          {/* Stats Row */}
          <div className="flex gap-2 w-full mb-3 mt-1">
            <div
              className="flex-1 rounded-2xl py-3 px-3 text-left"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="text-[8px] uppercase tracking-widest text-bb-gray mb-1">Packets Sent</div>
              <div className="text-white font-bold text-base">1,240,820</div>
            </div>
            <div
              className="flex-1 rounded-2xl py-3 px-3 text-left"
              style={{ background: 'rgba(190,255,0,0.07)', border: '1px solid rgba(190,255,0,0.2)' }}
            >
              <div className="text-[8px] uppercase tracking-widest text-bb-lime mb-1">Blocked</div>
              <div className="text-bb-lime font-bold text-base">342,156</div>
            </div>
          </div>

          {/* Data Saved */}
          <div className="text-center mb-3">
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-black text-white tracking-tight">2.4</span>
              <span className="text-xl font-bold text-bb-gray ml-1.5">GB</span>
            </div>
            <div className="text-[10px] text-bb-gray mt-0.5">Saved from background trackers this week</div>
          </div>

          {/* Active Toggle */}
          <div
            className="flex items-center justify-between w-full rounded-full px-5 mb-3"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              height: '58px',
            }}
          >
            <span className="text-sm font-bold tracking-widest text-white">ACTIVE</span>
            <div
              className="rounded-full bg-[#2a2a2a] flex items-center justify-center"
              style={{
                width: '48px', height: '48px',
                border: '2px solid rgba(255,255,255,0.15)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              <div className="w-9 h-9 rounded-full bg-white" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }} />
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6V12C4 16.42 7.38 20.52 12 21.5C16.62 20.52 20 16.42 20 12V6L12 2Z" fill="rgba(190,255,0,0.2)" stroke="#BEFF00" strokeWidth="1.5" />
              <path d="M9 12L11 14L15 10" stroke="#BEFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] text-bb-lime font-medium">Firewall is actively guarding</span>
          </div>

          {/* Traffic Filters */}
          <div className="w-full flex-1">
            <div className="text-[8px] uppercase tracking-widest text-bb-gray mb-2 px-0.5">Traffic Filters</div>
            <div className="flex flex-col gap-2">
              {FILTERS.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between rounded-2xl px-3 py-2.5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="mr-2">
                    <div className="text-[11px] font-semibold text-white leading-tight">{f.label}</div>
                    <div className="text-[9px] text-bb-gray leading-tight mt-0.5">{f.sub}</div>
                  </div>
                  <div className="flex-shrink-0 w-9 h-[22px] bg-bb-lime rounded-full relative">
                    <div
                      className="w-[18px] h-[18px] rounded-full bg-white absolute top-[2px] right-[2px]"
                      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.25)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Nav */}
          <div
            className="flex items-center justify-around py-3 mt-2"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(0,0,0,0.4)',
              marginLeft: '-16px', marginRight: '-16px', paddingLeft: '16px', paddingRight: '16px',
            }}
          >
            <div className="flex flex-col items-center gap-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#BEFF00" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#BEFF00" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#BEFF00" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#BEFF00" />
              </svg>
              <span className="text-[9px] font-medium text-bb-lime">Dashboard</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6V12C4 16.42 7.38 20.52 12 21.5C16.62 20.52 20 16.42 20 12V6L12 2Z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" />
              </svg>
              <span className="text-[9px] font-medium text-[rgba(255,255,255,0.35)]">Logs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute left-[-3px] top-[105px] w-[3px] h-[26px] bg-[rgba(255,255,255,0.1)] rounded-l-sm" />
      <div className="absolute left-[-3px] top-[140px] w-[3px] h-[36px] bg-[rgba(255,255,255,0.1)] rounded-l-sm" />
      <div className="absolute left-[-3px] top-[185px] w-[3px] h-[36px] bg-[rgba(255,255,255,0.1)] rounded-l-sm" />
      <div className="absolute right-[-3px] top-[130px] w-[3px] h-[60px] bg-[rgba(255,255,255,0.1)] rounded-r-sm" />
    </div>
  )
}

export default AppMockup
