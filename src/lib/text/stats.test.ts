import { describe, expect, it } from "vitest";
import {
  countCharacters,
  countLines,
  countParagraphs,
  countSentences,
  countWords,
  estimateTime,
} from "@/lib/text/stats";

describe("countWords", () => {
  it("returns 0 for empty and whitespace-only input", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   \n\t  ")).toBe(0);
  });

  it("counts words separated by any whitespace", () => {
    expect(countWords("hello world")).toBe(2);
    expect(countWords("one  two\nthree\tfour")).toBe(4);
    expect(countWords("  padded  ")).toBe(1);
  });

  it("counts numbers and hyphenated words as single words", () => {
    expect(countWords("well-known fact 42")).toBe(3);
  });
});

describe("countCharacters", () => {
  it("counts all characters including spaces by default", () => {
    expect(countCharacters("a b c")).toBe(5);
    expect(countCharacters("")).toBe(0);
  });

  it("excludes all whitespace when includeSpaces is false", () => {
    expect(countCharacters("a b\nc\td", false)).toBe(4);
    expect(countCharacters("   ", false)).toBe(0);
  });
});

describe("countSentences", () => {
  it("returns 0 for empty input", () => {
    expect(countSentences("")).toBe(0);
    expect(countSentences("   ")).toBe(0);
    expect(countSentences("...")).toBe(0);
  });

  it("counts sentences ending in ., !, or ?", () => {
    expect(countSentences("One. Two! Three?")).toBe(3);
  });

  it("counts a final sentence without terminal punctuation", () => {
    expect(countSentences("First. Second")).toBe(2);
  });

  it("handles punctuation followed by quotes or brackets", () => {
    expect(countSentences('She said "hi." He left.')).toBe(2);
  });

  it("treats newlines and multiple spaces as separators", () => {
    expect(countSentences("One.\n\nTwo.   Three.")).toBe(3);
  });
});

describe("countParagraphs", () => {
  it("returns 0 for empty input", () => {
    expect(countParagraphs("")).toBe(0);
    expect(countParagraphs("  \n \n ")).toBe(0);
  });

  it("counts blocks separated by blank lines", () => {
    expect(countParagraphs("Para one.\n\nPara two.")).toBe(2);
    expect(countParagraphs("A\n\nB\n\n\nC")).toBe(3);
  });

  it("does not split on single line breaks", () => {
    expect(countParagraphs("line one\nline two")).toBe(1);
  });
});

describe("countLines", () => {
  it("counts non-empty lines only", () => {
    expect(countLines("a\nb\nc")).toBe(3);
    expect(countLines("a\n\n  \nb")).toBe(2);
    expect(countLines("")).toBe(0);
  });
});

describe("estimateTime", () => {
  it("returns zero for empty input", () => {
    expect(estimateTime("")).toEqual({ minutes: 0, seconds: 0 });
  });

  it("rounds up so short texts still show a time", () => {
    expect(estimateTime("one", 200)).toEqual({ minutes: 0, seconds: 1 });
  });

  it("estimates 200 words as one minute at 200 wpm", () => {
    const text = Array(200).fill("word").join(" ");
    expect(estimateTime(text, 200)).toEqual({ minutes: 1, seconds: 0 });
  });

  it("splits long times into minutes and seconds", () => {
    const text = Array(500).fill("word").join(" ");
    // 500 words at 200 wpm = 150 seconds = 2 min 30 sec
    expect(estimateTime(text, 200)).toEqual({ minutes: 2, seconds: 30 });
  });
});
