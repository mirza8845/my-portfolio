// src/data/testimonials.ts
//
// ⚠️ OWNER ACTION REQUIRED — DO NOT FABRICATE.
// Replace each {{TODO}} below with a REAL quote/recommendation (e.g. pulled from
// LinkedIn recommendations or written client feedback). Add 2–3 genuine entries.
//
// Entries that still contain "{{TODO}}" are treated as placeholders and are
// filtered out at render time. If NO real entries remain, the Testimonials
// section is hidden entirely (it will not render an empty section in production).

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "{{TODO: 1–2 sentence real quote}}",
    name: "{{TODO}}",
    role: "{{TODO}}",
    company: "{{TODO}}",
  },
  {
    quote: "{{TODO}}",
    name: "{{TODO}}",
    role: "{{TODO}}",
    company: "{{TODO}}",
  },
];

// Helper: a testimonial is "real" only if none of its fields still contain a TODO marker.
export const isRealTestimonial = (t: Testimonial): boolean =>
  ![t.quote, t.name, t.role, t.company].some((v) => v.includes("{{TODO"));

export const realTestimonials: Testimonial[] = testimonials.filter(isRealTestimonial);
