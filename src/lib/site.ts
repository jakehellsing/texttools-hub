export const site = {
  name: "TextTools Hub",
  tagline: "Free online text tools",
  description:
    "Free, fast, privacy-friendly text tools that run entirely in your browser. Count words and characters, convert case, clean up text, generate slugs, and more.",
  /**
   * Canonical origin used for metadata, sitemap, and robots.txt.
   * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.example.com).
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/+$/,
    "",
  ),
  /** Email shown on the contact page. Set NEXT_PUBLIC_CONTACT_EMAIL to override. */
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "jsomongia@gmail.com",
} as const;
