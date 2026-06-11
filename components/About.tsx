import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="border border-white/10 bg-white/[0.03] rounded-[32px] p-8 lg:p-12">

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-center">

          {/* Image */}

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220] p-2">
              <Image
                src="/james-profile.jpg"
                alt="Adebisi Dolapo James"
                width={320}
                height={420}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>

          {/* Content */}

          <div>

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Building websites that help businesses grow online.
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-5">
              I'm <span className="text-white font-semibold">Adebisi Dolapo James</span>,
              a Web Designer and Frontend Developer focused on creating
              modern, conversion-focused websites for startups,
              businesses, ecommerce brands, recruiters, coaches,
              and SaaS companies.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              Over the last 4+ years, I've worked with WordPress,
              Shopify, Next.js, Bubble, Framer, Wix and Squarespace
              to build websites, dashboards, ecommerce platforms,
              job boards and digital products that help businesses
              attract customers, generate leads and grow online.
            </p>

            <div className="mb-8 p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5">
              <p className="text-slate-300">
                Trusted by startups, ecommerce brands, recruiters,
                coaches and growing businesses looking for modern,
                professional and high-converting websites.
              </p>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

              <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-bold">4+</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Years Experience
                </p>
              </div>

              <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-bold">20+</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Projects Delivered
                </p>
              </div>

              <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-bold">6+</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Platforms
                </p>
              </div>

              <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Responsive
                </p>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <a
                href="https://www.upwork.com/freelancers/~01cf43ef4af369fc8a?mp_source=share"
                target="_blank"
                className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
              >
                Upwork
              </a>

              <a
                href="https://www.fiverr.com/s/XLq7Yx0"
                target="_blank"
                className="px-5 py-3 rounded-full border border-white/10 hover:border-blue-500 transition"
              >
                Fiverr
              </a>

              <a
                href="https://contra.com/james_dave_hg4ygu6d"
                target="_blank"
                className="px-5 py-3 rounded-full border border-white/10 hover:border-blue-500 transition"
              >
                Contra
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}