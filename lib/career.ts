export type Role = {
  period: string;
  title: string;
  org: string;
  location?: string;
  bullets: string[];
};

// EDIT HERE: adjust titles, dates, and bullets to reflect your exact history.
// Source: LinkedIn export (Profile.pdf), June 2026.

// Recent / most relevant roles — always visible.
export const recentRoles: Role[] = [
  {
    period: "Mar 2025 — Present",
    title: "Independent Operations & AI Projects",
    org: "Self-directed",
    location: "Barcelona",
    bullets: [
      "Intentional career break to pursue entrepreneurial and technical development, applying operational thinking to product-building.",
      "Built two mobile apps from the ground up: Decidefy (decision-making tool, Android) and HeyChamp (tournament organizer), using React Native and modern automation frameworks.",
      "Developed a SaaS product for service-industry operations management.",
      "Deepened expertise in AI-enabled workflows, operational analytics, and process automation through OpenAI Academy certifications and hands-on projects.",
    ],
  },
  {
    period: "Nov 2022 — Feb 2025",
    title: "Senior Operations Manager",
    org: "TDCX · Client: Global Social Media & Video Platform (NDA-protected)",
    location: "Barcelona",
    bullets: [
      "Brought in to turn around a failing operation on the verge of client termination — transformed it into one of TDCX's most trusted accounts, enabling 500%+ headcount expansion across EMEA and APAC.",
      "Stabilized the operation by increasing buffer staffing from 10% to 25%, ensuring 100% delivery of contracted hours while maintaining ~35% gross profit margin.",
      "Scaled from 40 to 120 FTEs (Barcelona) and 300+ FTEs globally while reducing monthly attrition from 40% to 13%.",
      "Rebuilt QA infrastructure from scratch — automated feedback loops, dispute resolution, continuous improvement. QA: 85% → 96%. CSAT: 83% → 95%.",
      "Co-created the Evergreen Pipeline recruiting process with HR, which became company standard for high-volume hiring.",
      "Led vendor governance: monthly QBRs, capacity planning, SLA management with global stakeholders, Power BI reporting.",
    ],
  },
  {
    period: "Dec 2020 — Oct 2022",
    title: "Operations Manager",
    org: "TDCX · Client: LinkedIn",
    location: "Barcelona",
    bullets: [
      "Scaled LinkedIn's outsourced operations from 25 to 110+ FTEs across five concurrent workstreams, expanding from Talent Solutions into Sales Solutions.",
      "Built and launched a 30-person SDR operation during a period of major organizational transition — hired, trained, and operational in under a month.",
      "Managed 5 concurrent operations (Campaign Strategists, Campaign Consultants, Onboarding Specialists, Associate CSMs, SDR team) with 2 Junior Ops Managers and 110+ FTEs.",
      "Built dashboards, KPI tracking systems, and reporting routines that improved SLA performance across all workstreams.",
    ],
  },
  {
    period: "Jan 2020 — Dec 2020",
    title: "Team Manager",
    org: "TDCX · Client: LinkedIn (Campaign Strategist — NAMER)",
    location: "Greater Barcelona Metropolitan Area",
    bullets: [
      "Led a 15-person team across EMEA and NAMER markets, consistently exceeding KPIs through hands-on coaching.",
      "Built dashboards and KPI infrastructure from scratch for an embryonic operation with no existing reporting.",
      "Became primary client contact, taking full ownership of the relationship as the operation scaled.",
    ],
  },
  {
    period: "Aug 2018 — Dec 2019",
    title: "Team Manager",
    org: "TELUS International Europe · Client: Meta (Facebook) — Content Moderation",
    location: "Barcelona",
    bullets: [
      "Managed a 15-member content moderation team, consistently hitting and exceeding quality targets.",
      "Developed a coaching framework that improved agent engagement, skill development, and operational efficiency.",
      "Built real-time SLA dashboards supporting performance tracking and governance routines.",
    ],
  },
  {
    period: "Nov 2016 — Aug 2018",
    title: "Business Analyst",
    org: "Webhelp · Client: Google for Work (G Suite / Google Workspace)",
    location: "Greater Barcelona Metropolitan Area",
    bullets: [
      "Vendor/partner management role: primary point of contact for Google Resellers, managing partner performance end-to-end.",
      "Analyzed reseller performance data, conducted weekly/monthly QBRs, and identified performance gaps impacting Google's standards.",
      "Organized and delivered training sessions with Google for underperforming resellers.",
      "Career progression within Webhelp: Technical Support Agent → Email Specialist → Mid-Size Business → Enterprise Support → Business Analyst.",
    ],
  },
];

// Earlier roles — collapsed by default, shown via "See earlier experience".
export const earlierRoles: Role[] = [
  {
    period: "Dec 2015 — Nov 2016",
    title: "Technical Support Representative",
    org: "Webhelp · Client: Google for Work (G Suite / Google Workspace)",
    location: "Barcelona",
    bullets: [
      "Supported 5,000+ Google customers on email deliverability, account health, and platform configuration.",
      "Advised customers on best practices tailored to their individual business objectives.",
    ],
  },
  {
    period: "Sep 2015 — Dec 2015",
    title: "Technical Support Analyst — Royal Dutch Shell and Procter & Gamble",
    org: "Hewlett Packard Enterprise",
    location: "Ireland",
    bullets: [
      "Provided IT support and technical troubleshooting for enterprise clients.",
      "Mentored new hires on policies, processes, and performance targets.",
    ],
  },
  {
    period: "Oct 2013 — Oct 2015",
    title: "Cook",
    org: "UmiFalafel",
    location: "Dublin",
    bullets: [],
  },
  {
    period: "Sep 2013 — Oct 2013",
    title: "Brand Sales Consultant",
    org: "FMI Field Management Ireland · Client: Electric Ireland",
    location: "Dublin",
    bullets: ["Door-to-door selling and upselling."],
  },
  {
    period: "Apr 2009 — Feb 2013",
    title: "CRM and Marketing Analyst",
    org: "Whirlpool Latin America",
    location: "São Paulo, Brazil",
    bullets: [
      "4 years of progressive marketing experience across branding, CRM, loyalty programs, and e-commerce.",
      "Managed \"Universo Indica\" — a loyalty program for Whirlpool employees — including reporting, partnerships, and event organization.",
      "Planned and executed direct marketing campaigns across mailer, telemarketing, and email channels.",
      "Led e-commerce initiatives on the Compra Certa direct-to-consumer platform.",
    ],
  },
  {
    period: "Jan 2009 — May 2009",
    title: "Marketing Trainee",
    org: "RSA",
    location: "",
    bullets: ["Rebranding project: website, print materials, and event support."],
  },
  {
    period: "Aug 2008 — Dec 2008",
    title: "Marketing Trainee",
    org: "Freudenberg-NOK",
    location: "Greater São Paulo Area",
    bullets: ["Promotional campaigns, trade marketing materials, and sales events."],
  },
];

export const skills = [
  "Workflow Optimization",
  "Operations Management",
  "Vendor Management",
  "Workforce Planning",
  "Quality Transformation",
  "AI-Enabled Workflows",
  "Power BI",
  "Salesforce",
];

export const personalProjects = [
  {
    name: "Decidefy",
    description: "Decision-making support app for Android, built with React Native.",
  },
  {
    name: "HeyChamp",
    description:
      "Tournament organizer app — React Native/Expo, Firebase, AI-powered result capture.",
  },
];
