export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For CS Educators &amp; Technical Writers
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Turn Any Algorithm Into a{' '}
          <span className="text-[#58a6ff]">Visual Explanation</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Paste your algorithm code and get interactive, step-by-step visual breakdowns with animated data structures — like a SHA-256 demo, but for any algorithm you write.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Visualizing — $29/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required for demo.</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Paste Your Code', desc: 'Drop in any algorithm — sorting, hashing, graph traversal, dynamic programming, and more.' },
            { step: '02', title: 'AI Analyzes It', desc: 'Our engine parses the logic, identifies data structures, and maps out every execution step.' },
            { step: '03', title: 'Get Visual Steps', desc: 'Receive an interactive Canvas/SVG animation showing each step with highlighted state changes.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-3xl font-black mb-3">{step}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-black text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited algorithm visualizations',
              'Canvas & SVG animated steps',
              'Export as shareable link or embed',
              'Supports 20+ algorithm types',
              'Priority AI processing'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-4 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What types of algorithms are supported?',
              a: 'Sorting (bubble, merge, quick), graph traversal (BFS, DFS), hashing (SHA-256, MD5), dynamic programming, tree operations, and more. If it has clear steps, we can visualize it.'
            },
            {
              q: 'Can I embed the visualizations in my course or blog?',
              a: 'Yes. Every generated visualization gets a shareable link and an embeddable iframe snippet you can drop into any LMS, blog, or documentation site.'
            },
            {
              q: 'Do I need to know how to code to use this?',
              a: 'You need to paste algorithm code, but you don\'t need to understand it deeply — that\'s what the visual explanation is for. Great for educators teaching unfamiliar algorithms.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        <p>&copy; {new Date().getFullYear()} Visual Algorithm Explainer. Built for educators who love clarity.</p>
      </footer>
    </main>
  )
}
