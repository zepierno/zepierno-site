"use client";

import { useState } from "react";
import type { Role } from "@/lib/career";

function RoleItem({ role }: { role: Role }) {
  return (
    <li className="relative">
      <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-amber" />
      <p className="font-mono-data text-xs text-bone-dim mb-1">{role.period}</p>
      <h3 className="font-display text-xl text-bone">{role.title}</h3>
      <p className="text-sm text-teal-data mb-3">
        {role.org}
        {role.location ? ` · ${role.location}` : ""}
      </p>
      {role.bullets.length > 0 && (
        <ul className="space-y-2">
          {role.bullets.map((b, j) => (
            <li
              key={j}
              className="text-bone-dim leading-relaxed text-sm pl-4 border-l border-graphite-line"
            >
              {b}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function ExperienceTimeline({
  recentRoles,
  earlierRoles,
}: {
  recentRoles: Role[];
  earlierRoles: Role[];
}) {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <ol className="space-y-10 border-l border-graphite-line pl-6">
      {recentRoles.map((role, i) => (
        <RoleItem key={`recent-${i}`} role={role} />
      ))}

      {showEarlier &&
        earlierRoles.map((role, i) => (
          <RoleItem key={`earlier-${i}`} role={role} />
        ))}

      <li>
        <button
          onClick={() => setShowEarlier((v) => !v)}
          className="font-mono-data text-xs text-amber hover:text-amber-soft transition-colors"
        >
          {showEarlier ? "← Hide earlier experience" : "See earlier experience →"}
        </button>
      </li>
    </ol>
  );
}
