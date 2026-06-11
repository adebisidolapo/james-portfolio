import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12 max-w-2xl">
        <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-4">
          Featured Work
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold mb-5">
          Selected projects & interface systems.
        </h2>

        <p className="text-slate-400 leading-relaxed">
          Premium websites, dashboards, ecommerce systems, and frontend
          experiences built for modern businesses.
        </p>
      </div>

      <div className="border border-white/10 rounded-[36px] overflow-hidden bg-white/[0.03] mb-6">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="p-10 lg:p-14">
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-5">
              Recruitment Platform
            </p>

            <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              HireFlow Job Board System
            </h3>

            <p className="text-slate-400 leading-relaxed mb-8">
              A modern recruitment platform with employer dashboards,
              candidate systems, analytics, messaging, and responsive UI.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Next.js", "Dashboard UI", "Job Board", "Responsive Design"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-slate-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

   <div className="flex gap-4">
  <button
    className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-full font-medium"
  >
    Project Overview
  </button>

  <button
    className="border border-white/10 hover:border-blue-500 transition px-6 py-3 rounded-full font-medium"
  >
    Recruitment Platform
  </button>
</div>
          </div>

          <div className="relative min-h-[500px] bg-[#0B1220]">
            <Image
              src="/hireflow.png"
              alt="HireFlow Job Board Platform"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <ProjectCard
          image="/veloura.png"
          label="Shopify Ecommerce"
          title="Veloura Skincare"
          description="Luxury skincare ecommerce experience with premium branding, responsive shopping flow, and conversion-focused UI."
        />

        <ProjectCard
          image="/coaching.png"
          label="Coaching Platform"
          title="Elevate Coaching"
          description="Elegant coaching website focused on clarity, trust, booking flow, and personal brand positioning."
        />

        <ProjectCard
          image="/saas.png"
          label="SaaS Dashboard"
          title="FlowBoard SaaS"
          description="No-code SaaS dashboard concept with analytics, user management, tasks, revenue tracking, and clean product UI."
        />
      </div>
    </section>
  );
}

function ProjectCard({
  image,
  label,
  title,
  description,
}: {
  image: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-white/10 rounded-[28px] overflow-hidden bg-white/[0.03] hover:border-blue-500/40 hover:-translate-y-1 transition duration-300">
      <div className="relative h-[260px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-7">
        <p className="text-blue-400 uppercase tracking-[0.2em] text-xs mb-3">
          {label}
        </p>

        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

<div className="space-y-4">

  <div className="flex flex-wrap gap-2">

    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
      Responsive
    </span>

    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
      UI/UX
    </span>

    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
      Conversion Focused
    </span>

  </div>

  <div className="flex gap-3">

    <button
      className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-full text-sm"
    >
      Project Overview
    </button>

    <button
      className="border border-white/10 hover:border-blue-500 transition px-4 py-2 rounded-full text-sm"
    >
      Design Showcase
    </button>

  </div>

</div>
      </div>
    </div>
  );
}