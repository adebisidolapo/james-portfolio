export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="border border-white/10 bg-white/[0.03] rounded-[32px] p-8 lg:p-12">

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">

          {/* Left Side */}

          <div>

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-4">
              Contact
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Let's build something modern, clean, and memorable.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Looking for a website, ecommerce store, SaaS platform,
              landing page, job board, or complete redesign?
              I'm available for freelance projects, startup
              collaborations, and long-term partnerships.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span>Freelance Projects</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span>Contract Work</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span>Website Redesigns</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span>Startup Collaborations</span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="border border-white/10 bg-[#0B1220] rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-8">

              <div>
                <p className="text-slate-500 text-sm mb-1">
                  Email
                </p>

                <a
                  href="mailto:jamesdaveson001@gmail.com"
                  className="text-white hover:text-blue-400 transition"
                >
                  jamesdaveson001@gmail.com
                </a>
              </div>

              <div>
                <p className="text-slate-500 text-sm mb-1">
                  Phone
                </p>

                <a
                  href="tel:09017577873"
                  className="text-white hover:text-blue-400 transition"
                >
                  09017577873
                </a>
              </div>

              <div>
                <p className="text-slate-500 text-sm mb-1">
                  Location
                </p>

                <p className="text-white">
                  Akure, Nigeria
                </p>
              </div>

            </div>

            <div className="flex flex-col gap-3">

              <a
                href="mailto:jamesdaveson001@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-center py-3 rounded-full transition"
              >
                Send Email
              </a>

              <a
                href="https://www.upwork.com/freelancers/~01cf43ef4af369fc8a?mp_source=share"
                target="_blank"
                className="border border-white/10 hover:border-blue-500 py-3 rounded-full text-center transition"
              >
                Upwork Profile
              </a>

              <a
                href="https://www.fiverr.com/s/XLq7Yx0"
                target="_blank"
                className="border border-white/10 hover:border-blue-500 py-3 rounded-full text-center transition"
              >
                Fiverr Profile
              </a>

              <a
                href="https://contra.com/james_dave_hg4ygu6d"
                target="_blank"
                className="border border-white/10 hover:border-blue-500 py-3 rounded-full text-center transition"
              >
                Contra Profile
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}