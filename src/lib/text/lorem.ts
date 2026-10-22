const WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing",
  "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore",
  "et", "dolore", "magna", "aliqua", "enim", "ad", "minim", "veniam",
  "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi",
  "aliquip", "ex", "ea", "commodo", "consequat", "duis", "aute", "irure",
  "in", "reprehenderit", "voluptate", "velit", "esse", "cillum",
  "fugiat", "nulla", "pariatur", "excepteur", "sint", "occaecat",
  "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum", "perspiciatis",
  "unde", "omnis", "iste", "natus", "error", "voluptatem", "accusantium",
  "doloremque", "laudantium", "totam", "rem", "aperiam", "eaque", "ipsa",
  "quae", "ab", "illo", "inventore", "veritatis", "quasi", "architecto",
  "beatae", "vitae", "dicta", "explicabo", "nemo", "ipsam", "quia",
  "voluptas", "aspernatur", "aut", "odit", "fugit", "consequuntur",
  "magni", "dolores", "eos", "ratione", "sequi", "nesciunt", "neque",
  "porro", "quisquam", "dolorem", "adipisci", "numquam", "eius", "modi",
  "tempora", "magnam", "quaerat",
];

const CLASSIC_OPENING =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

/** Deterministic PRNG (mulberry32) so output is stable and testable. */
function createRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type LoremUnit = "words" | "sentences" | "paragraphs";

export interface LoremOptions {
  unit: LoremUnit;
  count: number;
  /** Begin output with the classic "Lorem ipsum dolor sit amet…" opening. */
  startWithLorem?: boolean;
  /** Seed for deterministic output. */
  seed?: number;
}

function capitalize(sentence: string): string {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

function makeSentence(rand: () => number): string {
  const length = 6 + Math.floor(rand() * 10); // 6–15 words
  const words: string[] = [];
  for (let i = 0; i < length; i++) {
    words.push(WORDS[Math.floor(rand() * WORDS.length)]);
  }
  return `${capitalize(words.join(" "))}.`;
}

function makeParagraph(rand: () => number): string {
  const length = 3 + Math.floor(rand() * 4); // 3–6 sentences
  const sentences: string[] = [];
  for (let i = 0; i < length; i++) {
    sentences.push(makeSentence(rand));
  }
  return sentences.join(" ");
}

/**
 * Generates lorem ipsum placeholder text.
 */
export function generateLorem({
  unit,
  count,
  startWithLorem = false,
  seed = 1,
}: LoremOptions): string {
  const safeCount = Math.max(0, Math.floor(count));
  if (safeCount === 0) return "";

  const rand = createRandom(seed);

  if (unit === "words") {
    const words: string[] = [];
    for (let i = 0; i < safeCount; i++) {
      words.push(WORDS[Math.floor(rand() * WORDS.length)]);
    }
    if (startWithLorem) {
      const opening = CLASSIC_OPENING.replace(",", "").split(" ");
      for (let i = 0; i < Math.min(opening.length, words.length); i++) {
        words[i] = opening[i].toLowerCase();
      }
    }
    return words.join(" ");
  }

  if (unit === "sentences") {
    const sentences: string[] = [];
    for (let i = 0; i < safeCount; i++) {
      sentences.push(makeSentence(rand));
    }
    let output = sentences.join(" ");
    if (startWithLorem) {
      output = `${CLASSIC_OPENING}, ${output
        .charAt(0)
        .toLowerCase()}${output.slice(1)}`;
    }
    return output;
  }

  const paragraphs: string[] = [];
  for (let i = 0; i < safeCount; i++) {
    paragraphs.push(makeParagraph(rand));
  }
  let output = paragraphs.join("\n\n");
  if (startWithLorem) {
    output = `${CLASSIC_OPENING}, ${output
      .charAt(0)
      .toLowerCase()}${output.slice(1)}`;
  }
  return output;
}
