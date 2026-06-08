export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16">
      <div className="border border-white/10 bg-white/[0.03] rounded-[32px] p-8 lg:p-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">

          <div>
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
              I design and build websites that feel premium, clear, and useful.
            </h2>

            <p className="text-slate-400 leading-relaxed">
              I combine design thinking with frontend development to help
              brands turn their ideas into clean digital experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="border border-white/10 rounded-2xl p-6 bg-[#0B1220]">
              <h3 className="text-xl font-semibold mb-3">What I build</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Job boards, dashboards, ecommerce stores, SaaS interfaces,
                landing pages, and business websites.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-[#0B1220]">
              <h3 className="text-xl font-semibold mb-3">How I work</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Strategy first, clean layout, responsive design, strong UI,
                and practical development decisions.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-[#0B1220]">
              <h3 className="text-xl font-semibold mb-3">Platforms</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                WordPress, Next.js, Shopify, Bubble, Framer, Tailwind CSS,
                Elementor, and modern frontend tools.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-[#0B1220]">
              <h3 className="text-xl font-semibold mb-3">Main focus</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Helping brands look trustworthy, modern, and ready for real
                clients online.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}