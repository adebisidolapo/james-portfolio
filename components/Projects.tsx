import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-16"
    >

      {/* HEADER */}
      <div className="mb-12 max-w-2xl">

        <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-4">
          Featured Work
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold mb-5">
          Selected projects & interface systems.
        </h2>

        <p className="text-slate-400 leading-relaxed">
          A collection of premium websites, dashboards,
          ecommerce systems, and frontend experiences.
        </p>

      </div>

      {/* FEATURED PROJECT */}
      <div className="border border-white/10 rounded-[36px] overflow-hidden bg-white/[0.03] mb-8">

        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT */}
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

              {[
                "Next.js",
                "Dashboard UI",
                "Job Board",
                "Responsive Design",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

            <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-full font-medium">
              View Project
            </button>

          </div>

          {/* RIGHT */}
          <div className="relative h-full min-h-[500px] bg-[#0B1220]">

            <Image
              src="/hireflow.png"
              alt="HireFlow Project"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </div>

      {/* SECOND GRID */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* ECOMMERCE */}
        <div className="border border-white/10 rounded-[32px] overflow-hidden bg-white/[0.03]">

          <div className="relative h-[340px]">

            <Image
              src="/veloura.png"
              alt="Veloura Ecommerce"
              fill
              className="object-cover"
            />

          </div>

          <div className="p-8">

            <p className="text-blue-400 uppercase tracking-[0.2em] text-xs mb-3">
              Shopify Ecommerce
            </p>

            <h3 className="text-3xl font-bold mb-4">
              Veloura Skincare
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Luxury skincare ecommerce experience with premium branding,
              responsive shopping flow, and conversion-focused UI.
            </p>

          </div>

        </div>

        {/* COACHING */}
        <div className="border border-white/10 rounded-[32px] overflow-hidden bg-white/[0.03]">

          <div className="relative h-[340px]">

            <Image
              src="/coaching.png"
              alt="Coaching Website"
              fill
              className="object-cover"
            />

          </div>

          <div className="p-8">

            <p className="text-blue-400 uppercase tracking-[0.2em] text-xs mb-3">
              Coaching Platform
            </p>

            <h3 className="text-3xl font-bold mb-4">
              Elevate Coaching
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Elegant coaching website focused on clarity,
              trust, booking flow, and personal brand positioning.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}