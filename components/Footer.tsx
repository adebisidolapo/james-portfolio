export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-12">

      <div className="border-t border-white/10 pt-10">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Brand */}

          <div>
            <h3 className="text-2xl font-bold mb-4">
              JamesStudio
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Web Designer & Frontend Developer helping businesses,
              startups, ecommerce brands and SaaS companies build
              modern digital experiences that convert.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-slate-400">

              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>

              <a href="#services" className="hover:text-white transition">
                Services
              </a>

              <a href="#about" className="hover:text-white transition">
                About
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <div className="flex flex-col gap-3 text-slate-400">

              <a
                href="mailto:jamesdaveson001@gmail.com"
                className="hover:text-white transition"
              >
                jamesdaveson001@gmail.com
              </a>

              <a
                href="tel:09017577873"
                className="hover:text-white transition"
              >
                09017577873
              </a>

              <p>Akure, Nigeria</p>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 JamesStudio. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="https://www.upwork.com/freelancers/~01cf43ef4af369fc8a?mp_source=share"
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              Upwork
            </a>

            <a
              href="https://www.fiverr.com/s/XLq7Yx0"
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              Fiverr
            </a>

            <a
              href="https://contra.com/james_dave_hg4ygu6d"
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              Contra
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}