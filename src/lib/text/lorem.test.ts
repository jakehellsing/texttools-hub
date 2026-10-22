import { describe, expect, it } from "vitest";
import { generateLorem } from "@/lib/text/lorem";

describe("generateLorem", () => {
  it("generates the requested number of words", () => {
    const output = generateLorem({ unit: "words", count: 20 });
    expect(output.split(" ")).toHaveLength(20);
  });

  it("generates the requested number of sentences", () => {
    const output = generateLorem({ unit: "sentences", count: 3 });
    expect(output.match(/\./g)).toHaveLength(3);
  });

  it("generates the requested number of paragraphs", () => {
    const output = generateLorem({ unit: "paragraphs", count: 2 });
    expect(output.split("\n\n")).toHaveLength(2);
  });

  it("is deterministic for the same seed", () => {
    const a = generateLorem({ unit: "paragraphs", count: 2, seed: 7 });
    const b = generateLorem({ unit: "paragraphs", count: 2, seed: 7 });
    const c = generateLorem({ unit: "paragraphs", count: 2, seed: 8 });
    expect(a).toBe(b);
    expect(a).not.toBe(c);
  });

  it("can start with the classic opening", () => {
    const output = generateLorem({
      unit: "words",
      count: 10,
      startWithLorem: true,
    });
    expect(output.toLowerCase().startsWith("lorem ipsum dolor sit amet")).toBe(
      true,
    );
  });

  it("returns empty string for non-positive counts", () => {
    expect(generateLorem({ unit: "words", count: 0 })).toBe("");
    expect(generateLorem({ unit: "sentences", count: -2 })).toBe("");
  });
});
