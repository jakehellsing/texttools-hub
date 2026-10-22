import { describe, expect, it } from "vitest";
import {
  toLowerCase,
  toSentenceCase,
  toStartCase,
  toTitleCase,
  toUpperCase,
} from "@/lib/text/casing";

describe("toUpperCase / toLowerCase", () => {
  it("converts case while preserving non-letters", () => {
    expect(toUpperCase("hello world 123!")).toBe("HELLO WORLD 123!");
    expect(toLowerCase("HeLLo WoRLD")).toBe("hello world");
  });
});

describe("toStartCase", () => {
  it("capitalises the first letter of every word", () => {
    expect(toStartCase("the quick brown fox")).toBe(
      "The Quick Brown Fox",
    );
    expect(toStartCase("ALREADY SHOUTING")).toBe("Already Shouting");
  });

  it("keeps apostrophes within words", () => {
    expect(toStartCase("don't stop")).toBe("Don't Stop");
  });
});

describe("toTitleCase", () => {
  it("keeps minor words lowercase", () => {
    expect(toTitleCase("the lord of the rings")).toBe(
      "The Lord of the Rings",
    );
  });

  it("capitalises minor words when first or last", () => {
    expect(toTitleCase("the best of the best")).toBe(
      "The Best of the Best",
    );
    expect(toTitleCase("what to look for")).toBe("What to Look For");
  });

  it("handles each line independently", () => {
    expect(toTitleCase("song of ice\na tale of two cities")).toBe(
      "Song of Ice\nA Tale of Two Cities",
    );
  });
});

describe("toSentenceCase", () => {
  it("capitalises the first letter of each sentence", () => {
    expect(toSentenceCase("hello world. how are you?")).toBe(
      "Hello world. How are you?",
    );
  });

  it("lowercases the rest of the text", () => {
    expect(toSentenceCase("THIS IS LOUD. THIS TOO.")).toBe(
      "This is loud. This too.",
    );
  });
});
