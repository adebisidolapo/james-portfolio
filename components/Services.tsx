export default function Services() {
  const services = [
    {
      title: "WordPress Development",
      description:
        "Modern business websites, job boards, dashboards, and CMS systems built with scalability in mind.",
    },
    {
      title: "Next.js Frontend",
      description:
        "Fast frontend systems with clean UI, responsive layouts, and modern architecture.",
    },
    {
      title: "Shopify Ecommerce",
      description:
        "Conversion-focused ecommerce stores designed for trust, speed, and better customer experience.",
    },
    {
      title: "Bubble MVP Development",
      description:
        "Startup MVPs and SaaS platforms built quickly for testing, launching, and validating ideas.",
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-4">
          Services
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold mb-5">
          Built for modern brands.
        </h2>

        <p className="text-slate-400 text-base leading-relaxed">
          I help startups, businesses, and founders build premium digital
          experiences that look professional and perform properly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-white/10 bg-white/[0.03] rounded-3xl p-7 hover:border-blue-500/30 transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-7"></div>

            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-slate-400 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}