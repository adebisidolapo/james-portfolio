export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          <div className="inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 px-4 py-2 rounded-full mb-6">

            <div className="w-2 h-2 rounded-full bg-blue-500"></div>

            <span className="text-sm text-blue-400 tracking-wide">
              PREMIUM WEB DESIGN STUDIO
            </span>

          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            Websites built for trust, speed, and growth.
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
            I design and develop premium websites, dashboards,
            ecommerce platforms, SaaS interfaces, and modern frontend
            experiences for brands that take their online presence seriously.
          </p>

          <div className="flex flex-wrap gap-4">

            <button className="bg-blue-600 hover:bg-blue-500 px-7 py-3 rounded-full font-medium transition">
              View Projects
            </button>

            <button className="border border-white/10 hover:border-white/30 px-7 py-3 rounded-full text-slate-300 hover:text-white transition">
              About Me
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* GLOW */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          {/* MAIN CARD */}
          <div className="relative border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-[36px] p-8 overflow-hidden">

            {/* TOP CARD */}
            <div className="border border-white/10 rounded-3xl p-7 bg-[#0B1220] mb-6">

              <p className="text-slate-400 mb-5">
                Main Stack
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  "Next.js",
                  "WordPress",
                  "Shopify",
                  "Bubble",
                  "Framer",
                  "Tailwind",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-2 gap-4">

              <div className="border border-white/10 rounded-3xl p-6 bg-[#0B1220]">

                <p className="text-slate-500 text-sm mb-3">
                  Projects
                </p>

                <h3 className="text-4xl font-bold">
                  20+
                </h3>

              </div>

              <div className="border border-white/10 rounded-3xl p-6 bg-[#0B1220]">

                <p className="text-slate-500 text-sm mb-3">
                  Platforms
                </p>

                <h3 className="text-4xl font-bold">
                  5+
                </h3>

              </div>

            </div>

            {/* BOTTOM TEXT */}
            <div className="mt-6 border border-white/10 rounded-3xl p-6 bg-[#0B1220]">

              <p className="text-slate-400 leading-relaxed">
                Building modern frontend systems with clean UI,
                responsive layouts, scalable architecture,
                and premium user experience.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}