import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050814]/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="James Studio"
            width={170}
            height={50}
            priority
            className="h-auto w-auto"
          />

        </a>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-sm text-slate-400">

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

        {/* CTA */}
        <a
          href="#contact"
          className="bg-white text-[#050814] hover:bg-blue-500 hover:text-white transition px-5 py-2.5 rounded-full text-sm font-semibold"
        >
          Start a Project
        </a>

      </nav>
    </header>
  );
}