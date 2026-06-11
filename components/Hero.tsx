export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs uppercase tracking-[0.18em] mb-6">
            Premium Web Design Studio
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 max-w-3xl">
            I design and build websites that help businesses look credible,
            attract clients, and grow online.
          </h1>

          <p className="text-slate-400 text-base leading-relaxed max-w-xl mb-8">
            Frontend developer and website designer helping startups,
            businesses, and founders launch modern websites, ecommerce stores,
            job boards, and SaaS platforms using WordPress, Next.js, Shopify,
            Bubble, and Framer.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white font-medium text-sm"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition text-sm"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="border border-white/10 rounded-[32px] p-7 bg-white/[0.03]">
          <div className="border border-white/10 rounded-3xl p-6 mb-5 bg-[#0B1220]">
            <p className="text-slate-400 text-sm mb-4">Main Stack</p>

            <div className="flex flex-wrap gap-3">
              {["Next.js", "WordPress", "Shopify", "Bubble", "Framer", "Tailwind"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="border border-white/10 rounded-3xl p-6 bg-[#0B1220]">
              <p className="text-slate-500 text-sm mb-2">Projects Delivered</p>
              <h3 className="text-4xl font-bold">20+</h3>
            </div>

            <div className="border border-white/10 rounded-3xl p-6 bg-[#0B1220]">
              <p className="text-slate-500 text-sm mb-2">Years Experience</p>
              <h3 className="text-4xl font-bold">4+</h3>
            </div>
          </div>

          <div className="border border-white/10 rounded-3xl p-6 bg-[#0B1220]">
            <p className="text-slate-400 leading-relaxed text-sm">
              Building modern websites, dashboards, ecommerce platforms, SaaS
              applications, and frontend systems with clean UI, responsive
              layouts, and performance-focused development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}