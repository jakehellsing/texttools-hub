import type { Metadata } from "next";
import { site } from "@/lib/site";

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface Tool {
  slug: string;
  /** Short name used in cards and navigation. */
  name: string;
  /** Full page title (also used for the <title> tag via the layout template). */
  title: string;
  /** Meta description and card blurb. */
  description: string;
  /** One-sentence summary shown on cards. */
  cardBlurb: string;
  /** Introductory paragraph shown under the H1 — unique content per tool. */
  intro: string;
  keywords: string[];
  /** Slugs of related tools for internal linking. */
  related: string[];
  faqs: ToolFaq[];
}

export const tools: Tool[] = [
  {
    slug: "word-counter",
    name: "Word Counter",
    title: "Word Counter — Count Words in Your Text Online",
    description:
      "Free online word counter. Paste your text to instantly count words, characters, sentences, and paragraphs — all in your browser, nothing is uploaded.",
    cardBlurb: "Count words, characters, sentences, and paragraphs instantly.",
    intro:
      "Paste or type your text below and the word counter updates in real time. Alongside the word count you also get character, sentence, paragraph, and line counts — useful for essays, articles, social posts, and anywhere a word limit applies. Everything is calculated in your browser: your text is never sent to a server.",
    keywords: [
      "word counter",
      "count words",
      "word count online",
      "essay word counter",
    ],
    related: ["character-counter", "reading-time-calculator", "sentence-counter"],
    faqs: [
      {
        question: "How are words counted?",
        answer:
          "A word is counted as any run of characters separated by whitespace. Numbers and hyphenated terms each count as one word.",
      },
      {
        question: "Is my text uploaded or stored?",
        answer:
          "No. All counting happens locally in your browser with JavaScript. Your text never leaves your device.",
      },
    ],
  },
  {
    slug: "character-counter",
    name: "Character Counter",
    title: "Character Counter — Count Characters With and Without Spaces",
    description:
      "Free online character counter. See character counts with and without spaces, plus word and line counts, as you type. Runs entirely in your browser.",
    cardBlurb: "Count characters with and without spaces in real time.",
    intro:
      "Character limits are everywhere — meta descriptions, tweets, SMS messages, form fields. This counter shows the length of your text both including and excluding spaces, so you always know where you stand. The counts update live as you type or paste, and nothing you enter ever leaves your browser.",
    keywords: [
      "character counter",
      "count characters",
      "characters without spaces",
      "letter counter",
    ],
    related: ["word-counter", "sentence-counter", "remove-extra-spaces"],
    faqs: [
      {
        question: "What counts as a character?",
        answer:
          "Every letter, digit, punctuation mark, emoji, and whitespace character. The \"without spaces\" figure excludes spaces, tabs, and line breaks.",
      },
      {
        question: "Does it work with emoji and non-Latin text?",
        answer:
          "Counts are based on JavaScript string length, which counts UTF-16 code units. Most emoji count as two units — the same way many platforms count them.",
      },
    ],
  },
  {
    slug: "sentence-counter",
    name: "Sentence & Paragraph Counter",
    title: "Sentence and Paragraph Counter Online",
    description:
      "Count sentences and paragraphs in any text instantly. Free online tool that runs in your browser — paste your text and get immediate counts.",
    cardBlurb: "See how many sentences and paragraphs your text contains.",
    intro:
      "Knowing your sentence and paragraph counts helps you keep writing readable — long blocks of text and sprawling sentences are hard on readers. Paste your text below to see sentence, paragraph, word, and average sentence length figures update instantly.",
    keywords: [
      "sentence counter",
      "paragraph counter",
      "count sentences",
      "average sentence length",
    ],
    related: ["word-counter", "reading-time-calculator", "character-counter"],
    faqs: [
      {
        question: "How does the tool detect sentences?",
        answer:
          "A sentence is counted whenever text ends with a period, question mark, or exclamation mark followed by a space or the end of the text. A final sentence without punctuation is counted too.",
      },
      {
        question: "What counts as a paragraph?",
        answer:
          "A paragraph is a block of text separated from other blocks by one or more blank lines.",
      },
    ],
  },
  {
    slug: "reading-time-calculator",
    name: "Reading Time Calculator",
    title: "Reading Time Calculator — Estimate Read and Speaking Time",
    description:
      "Estimate how long your text takes to read or speak aloud. Free reading time calculator based on average reading speed — paste text, get instant results.",
    cardBlurb: "Estimate reading and speaking time for any text.",
    intro:
      "Blog posts, speeches, video scripts, and newsletters all benefit from a realistic time estimate. This tool estimates silent reading time at an average of 200 words per minute and speaking time at 130 words per minute, so you can label articles or rehearse presentations with confidence.",
    keywords: [
      "reading time calculator",
      "read time estimator",
      "speaking time",
      "how long to read",
    ],
    related: ["word-counter", "sentence-counter", "character-counter"],
    faqs: [
      {
        question: "What reading speed is used?",
        answer:
          "Silent reading time is estimated at 200 words per minute, a widely cited average for adults. Speaking time uses 130 words per minute, a typical presentation pace.",
      },
      {
        question: "Why does my CMS show a different time?",
        answer:
          "Platforms use different words-per-minute assumptions, typically anywhere between 200 and 265 wpm, so small differences are expected.",
      },
    ],
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    title: "Case Converter — Uppercase, Lowercase & Sentence Case Online",
    description:
      "Convert text to UPPERCASE, lowercase, Capitalized, or Sentence case in one click. Free online case converter that runs entirely in your browser.",
    cardBlurb: "Switch text between upper, lower, capitalized, and sentence case.",
    intro:
      "Accidentally typed a paragraph in caps lock? Need a heading normalized to lowercase? Paste your text, choose a case, and copy the result. You can convert to uppercase, lowercase, capitalized (every word), or sentence case — all processed locally in your browser.",
    keywords: [
      "case converter",
      "uppercase converter",
      "lowercase converter",
      "sentence case",
      "caps lock fix",
    ],
    related: ["title-case-converter", "remove-extra-spaces", "text-to-slug"],
    faqs: [
      {
        question: "What is the difference between Capitalized and Title Case?",
        answer:
          "Capitalized uppercases the first letter of every word. Title Case additionally leaves small words like \"and\", \"the\", and \"of\" lowercase. Use the Title Case Converter for headline-style capitalization.",
      },
      {
        question: "Will it change numbers or punctuation?",
        answer:
          "No — only letter casing changes. Numbers, punctuation, and line breaks are preserved.",
      },
    ],
  },
  {
    slug: "title-case-converter",
    name: "Title Case Converter",
    title: "Title Case Converter — Capitalize Headlines Correctly",
    description:
      "Convert headlines and titles to proper title case. Small words like and, the, and of stay lowercase. Free, instant, and private — runs in your browser.",
    cardBlurb: "Capitalize headlines with proper title case rules.",
    intro:
      "Title case isn't just capitalizing every word — style guides keep articles, short prepositions, and conjunctions lowercase. This converter applies headline-style rules: major words are capitalized, minor words like “and”, “of”, and “the” stay lowercase unless they appear first or last. Paste one headline or a whole list.",
    keywords: [
      "title case converter",
      "capitalize title",
      "headline capitalization",
      "title capitalization",
    ],
    related: ["case-converter", "text-to-slug", "remove-extra-spaces"],
    faqs: [
      {
        question: "Which words stay lowercase?",
        answer:
          "Articles (a, an, the), coordinating conjunctions (and, but, or, nor, for, so, yet), and short prepositions (in, on, at, to, of, and similar) — unless they are the first or last word.",
      },
      {
        question: "Can I convert a list of titles at once?",
        answer:
          "Yes. Each line is treated as a separate title, so paste as many as you like.",
      },
    ],
  },
  {
    slug: "remove-duplicate-lines",
    name: "Remove Duplicate Lines",
    title: "Remove Duplicate Lines — Free Online Dedup Tool",
    description:
      "Remove duplicate lines from any text or list instantly. Keeps the first occurrence of each line, with an optional case-insensitive mode.",
    cardBlurb: "Deduplicate lines while preserving their original order.",
    intro:
      "Cleaning a mailing list, deduplicating keywords, or tidying exported data? Paste your lines below and duplicates disappear while the original order is preserved. Turn on case-insensitive matching to treat “Apple” and “apple” as the same line.",
    keywords: [
      "remove duplicate lines",
      "dedupe text",
      "remove repeated lines",
      "unique lines",
    ],
    related: ["remove-extra-spaces", "word-counter", "text-to-slug"],
    faqs: [
      {
        question: "Is the original order kept?",
        answer:
          "Yes. The first occurrence of every line is kept in place and later duplicates are removed — nothing is re-sorted.",
      },
      {
        question: "Can I ignore letter case when comparing?",
        answer:
          "Yes. Enable case-insensitive matching and lines that differ only by capitalization are treated as duplicates. The first occurrence's original casing is kept.",
      },
    ],
  },
  {
    slug: "remove-extra-spaces",
    name: "Remove Extra Spaces",
    title: "Remove Extra Spaces — Clean Up Whitespace in Text",
    description:
      "Remove double spaces, trailing spaces, and extra blank lines from text. Free online whitespace cleaner — paste text, click once, copy the result.",
    cardBlurb: "Collapse double spaces, stray tabs, and extra blank lines.",
    intro:
      "Text copied from PDFs, emails, and websites often comes with double spaces, trailing whitespace, and stray blank lines. This cleaner collapses runs of spaces and tabs into one space, trims every line, reduces repeated blank lines to a single blank line, and trims the whole result — in one click.",
    keywords: [
      "remove extra spaces",
      "remove double spaces",
      "whitespace remover",
      "clean text",
    ],
    related: ["remove-duplicate-lines", "case-converter", "character-counter"],
    faqs: [
      {
        question: "What exactly gets removed?",
        answer:
          "Runs of spaces and tabs become one space, whitespace at the start and end of each line is trimmed, three or more consecutive line breaks become a single blank line, and the result is trimmed.",
      },
      {
        question: "Will it join my paragraphs into one block?",
        answer:
          "No. Single line breaks and one blank line between paragraphs are preserved — only excess whitespace is removed.",
      },
    ],
  },
  {
    slug: "text-to-slug",
    name: "Text to Slug Converter",
    title: "Text to Slug Converter — Generate URL-Friendly Slugs",
    description:
      "Convert titles and text into clean, URL-friendly slugs. Handles accents, punctuation, and special characters. Free and instant, in your browser.",
    cardBlurb: "Turn titles into clean, URL-safe slugs instantly.",
    intro:
      "A good slug is short, lowercase, and free of special characters. Paste a title or phrase and get a URL-ready slug: accents are transliterated (é becomes e), punctuation is removed, and spaces become single hyphens. Paste multiple lines to generate a slug per line.",
    keywords: [
      "text to slug",
      "slug generator",
      "url slug",
      "permalink generator",
    ],
    related: ["case-converter", "title-case-converter", "remove-extra-spaces"],
    faqs: [
      {
        question: "What makes a good URL slug?",
        answer:
          "Lowercase letters, numbers, and hyphens only — no spaces or special characters. Keep it short and close to the page title for the best SEO.",
      },
      {
        question: "How are accented characters handled?",
        answer:
          "Diacritics are stripped, so \"Café au lait\" becomes \"cafe-au-lait\". Characters that can't be transliterated are treated as separators.",
      },
    ],
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    title: "Lorem Ipsum Generator — Placeholder Text by Word, Sentence, or Paragraph",
    description:
      "Generate lorem ipsum placeholder text by words, sentences, or paragraphs. Free dummy text generator for designs, mockups, and layouts.",
    cardBlurb: "Generate placeholder text in any length you need.",
    intro:
      "Placeholder text lets you judge a layout without being distracted by real content. Choose how much you need — words, sentences, or full paragraphs — optionally start with the classic “Lorem ipsum dolor sit amet” opening, then copy the result straight into your mockup.",
    keywords: [
      "lorem ipsum generator",
      "placeholder text",
      "dummy text generator",
      "filler text",
    ],
    related: ["word-counter", "character-counter", "remove-extra-spaces"],
    faqs: [
      {
        question: "What is lorem ipsum?",
        answer:
          "Lorem ipsum is scrambled Latin derived from Cicero's \"de Finibus Bonorum et Malorum\" (45 BC). It has been used as placeholder text in printing and design since the 1500s.",
      },
      {
        question: "Is the generated text safe to publish?",
        answer:
          "It's standard placeholder text, but it looks like nonsense to visitors — always replace it with real content before publishing.",
      },
    ],
  },
];

const toolsBySlug = new Map(tools.map((tool) => [tool.slug, tool]));

export function getTool(slug: string): Tool | undefined {
  return toolsBySlug.get(slug);
}

export function getRelatedTools(tool: Tool): Tool[] {
  return tool.related
    .map((slug) => toolsBySlug.get(slug))
    .filter((t): t is Tool => Boolean(t));
}

export function toolUrl(tool: Tool): string {
  return `${site.url}/tools/${tool.slug}`;
}

export function toolMetadata(tool: Tool): Metadata {
  const url = `/tools/${tool.slug}`;
  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${tool.title} | ${site.name}`,
      description: tool.description,
      url,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.title} | ${site.name}`,
      description: tool.description,
    },
  };
}
