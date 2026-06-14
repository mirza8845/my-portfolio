// src/data/projects.ts — order matters (AI projects first).
// Owner TODO: fill in `liveUrl` once a public demo exists, and set `repoUrl`
// to a real GitHub URL or "private". Replace `image` paths if you add new shots.
// This array is rendered via map() in src/app/page.tsx — keep it extensible.

export type Project = {
  title: string;
  problem: string;
  built: string;
  result: string;
  tags: string[];
  liveUrl: string | null; // null => "Live demo coming soon"
  repoUrl: string | "private" | null; // "private" => "Code private"
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "AI-SEO & Analytics Platform",
    problem:
      "Businesses needed to improve search visibility without slow, manual SEO work.",
    built:
      "Built keyword-research automation, competitor analysis, content-optimization suggestions, backlink tracking, and real-time performance monitoring, plus an AI-powered business-analytics layer for revenue forecasting and intelligent reporting.",
    result:
      "Automated insights and reporting that replaced manual analysis and enabled faster, data-driven decisions.",
    tags: ["React", "Next.js", "Node.js", "LLM integration"],
    liveUrl: null, // {{TODO: live demo URL}}
    repoUrl: "private",
    image: "/images/AiSeoTool.avif",
    featured: true,
  },
  {
    title: "AI-Powered Learning Management System (LMS)",
    problem: "Generic course delivery didn't adapt to individual learners.",
    built:
      "Cross-platform (web + React Native) LMS with personalized course recommendations, smart content delivery, and performance analytics, built with a distributed team of designers, PMs, and AI engineers.",
    result: "A personalized learning experience driven by intelligent automation.",
    tags: ["React", "React Native", "Node.js", "AI"],
    liveUrl: null, // {{TODO}}
    repoUrl: "private",
    image: "/images/sostudy.png",
    featured: true,
  },
  {
    title: "Event Management Platform (Wosom)",
    problem:
      "Organizers needed faster setup and real-time visibility into attendance and sales.",
    built:
      "React platform with real-time attendee tracking (WebSockets), drag-and-drop event categorization, Recharts dashboards, and Stripe/PayPal + Google Calendar integrations.",
    result: "Cut event setup time by ~40% and reduced load times by ~30%.",
    tags: ["React", "Redux", "WebSockets", "Stripe/PayPal"],
    liveUrl: null, // {{TODO}}
    repoUrl: "private",
    image: "/images/wosom.png",
    featured: false,
  },
  {
    title: "RentArround — E-commerce Marketplace",
    problem:
      "A services marketplace needed consistent web + mobile experiences and reliable inventory.",
    built:
      "React + React Native e-commerce platform with a full inventory system and REST API integration, following TypeScript best practices.",
    result: "Unified web and mobile apps on a shared, type-safe codebase.",
    tags: ["React", "React Native", "TypeScript"],
    liveUrl: null, // {{TODO}}
    repoUrl: "private",
    image: "/images/rentarround.png",
    featured: false,
  },
  // Optional extras the owner may add: "SEOTools Marketplace", food/fitness mobile apps.
];
