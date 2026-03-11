import { useState } from 'react'

const QUESTIONS = [
  {
    q: "Is ByteBouncer a VPN?",
    a: "No. ByteBouncer uses iOS's Network Extension framework to inspect and filter traffic locally on your device. No VPN profile is created, no tunnel is opened, and your traffic is never routed through our servers. We have zero visibility into what you do online.",
  },
  {
    q: "Will it break my apps?",
    a: "No. ByteBouncer only blocks background connections — the invisible requests apps make when you're not actively using them. App functionality, content loading, and push notifications all continue to work normally. If you ever block something you shouldn't, you can whitelist it in seconds.",
  },
  {
    q: "Can I see what gets blocked?",
    a: "Yes — that's one of the core features. Every blocked connection is logged with the app name, destination domain, tracker category, and timestamp. You get a full picture of what was being exfiltrated from your device.",
  },
  {
    q: "Is my data sent to ByteBouncer's servers?",
    a: "Never. The firewall runs entirely on your iPhone. We don't have a backend that processes your traffic, and we don't collect behavioral analytics. The only thing we store is your waitlist email — and that's in your control.",
  },
  {
    q: "How is this different from a DNS blocker like AdGuard or NextDNS?",
    a: "DNS blockers work at the network level and require a VPN profile or a custom DNS server. ByteBouncer runs at the app layer using iOS Network Extensions, which means it can identify which specific app is making a connection — not just the domain — and it works 100% on-device with no external dependencies.",
  },
  {
    q: "When is the public launch?",
    a: "We're currently in closed beta with a small group of testers. Joining the waitlist gets you early access before the App Store launch, plus a founding member badge and input into the feature roadmap.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-b border-bb-border"
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold text-white group-hover:text-bb-lime transition-colors duration-200">
          {question}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`text-bb-gray flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <p className="text-bb-gray leading-relaxed pb-5 text-sm md:text-base pr-8">
          {answer}
        </p>
      )}
    </div>
  )
}

function FAQ() {
  return (
    <section className="border-t border-bb-border py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-6 justify-center">
          <div className="h-px w-8 bg-bb-lime" />
          <span className="text-xs uppercase tracking-widest text-bb-lime font-semibold">Common Questions</span>
          <div className="h-px w-8 bg-bb-lime" />
        </div>

        <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl font-black text-center tracking-tight mb-4">
          Everything you want{' '}
          <span className="text-gradient-lime">to know.</span>
        </h2>

        <p className="reveal reveal-delay-2 text-bb-gray text-center mb-12">
          Still have questions? Email us at hello@bytebouncer.app
        </p>

        <div className="reveal reveal-delay-2">
          {QUESTIONS.map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
