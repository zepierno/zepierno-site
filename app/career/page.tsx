import Link from "next/link";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { recentRoles, earlierRoles, skills, personalProjects } from "@/lib/career";

export const metadata = {
  title: "Career — Zé Pierno",
};

export default function CareerPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="font-mono-data text-xs text-bone-dim hover:text-amber transition-colors"
      >
        ← Home
      </Link>

      <p className="font-mono-data text-xs uppercase tracking-[0.2em] text-amber mt-8 mb-4">
        Career
      </p>
      <h1 className="font-display text-4xl text-bone mb-4">Zé Pierno</h1>
      <p className="text-bone-dim max-w-xl leading-relaxed mb-3">
        Senior Operations Leader — B2B & CX Operations, Vendor Management,
        scaling global teams across EMEA & APAC for companies including
        LinkedIn, Google, and Meta.
      </p>
      <p className="text-bone-dim max-w-xl leading-relaxed mb-10">
        Most of my career has been defined by the operations nobody wanted to
        touch — the ones losing the client, missing every KPI, or too complex
        to stabilize. That's where I do my best work. Based in Barcelona.
      </p>

      {/* Experience */}
      <section>
        <h2 className="font-display text-2xl text-bone mb-6">Experience</h2>
        <ExperienceTimeline recentRoles={recentRoles} earlierRoles={earlierRoles} />
      </section>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="font-display text-2xl text-bone mb-6">Tools</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-mono-data text-xs text-bone border border-graphite-line rounded-sm px-3 py-1.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Personal projects */}
      <section className="mt-16">
        <h2 className="font-display text-2xl text-bone mb-6">
          Personal projects
        </h2>
        <ul className="space-y-4">
          {personalProjects.map((p) => (
            <li key={p.name} className="text-bone-dim leading-relaxed text-sm">
              <strong className="text-bone">{p.name}</strong> — {p.description}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16">
        <a
          href="/cv-ze-pierno.pdf"
          className="inline-flex items-center gap-2 rounded-sm border border-graphite-line px-5 py-3 font-body text-bone hover:border-amber hover:text-amber transition-colors"
        >
          Download CV (PDF)
        </a>
      </div>
    </div>
  );
}
