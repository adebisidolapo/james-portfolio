export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="border border-white/10 bg-white/[0.03] rounded-[40px] p-10 lg:p-16">

        <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-4">
          Contact
        </p>

        <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 max-w-3xl">
          Let’s build something modern, clean, and memorable.
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
          Available for frontend development, startup websites,
          dashboards, ecommerce systems, and premium web experiences.
        </p>

        <div className="flex flex-wrap gap-4">

          <a
            href="mailto:adebisidolapo01@gmail.com"
            className="bg-blue-600 hover:bg-blue-500 px-7 py-3 rounded-full font-medium transition"
          >
            Send Email
          </a>

          <a
            href="https://contra.com/james_dave_hg4ygu6d/work?r=james_dave_hg4ygu6d"
            target="_blank"
            className="border border-white/10 hover:border-white/30 px-7 py-3 rounded-full text-slate-300 hover:text-white transition"
          >
            View Contra
          </a>

        </div>

      </div>
    </section>
  );
}