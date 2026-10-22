import { describe, expect, it } from "vitest";
import { removeAllWhitespace, removeExtraSpaces } from "@/lib/text/spaces";

describe("removeExtraSpaces", () => {
  it("collapses runs of spaces and tabs into one space", () => {
    expect(removeExtraSpaces("too   many\t\tspaces")).toBe(
      "too many spaces",
    );
  });

  it("trims whitespace at line boundaries", () => {
    expect(removeExtraSpaces("  indented line  \n  next  ")).toBe(
      "indented line\nnext",
    );
  });

  it("collapses 3+ newlines into a single blank line", () => {
    expect(removeExtraSpaces("a\n\n\n\nb")).toBe("a\n\nb");
  });

  it("preserves single blank lines between paragraphs", () => {
    expect(removeExtraSpaces("a\n\nb")).toBe("a\n\nb");
  });

  it("trims the whole result", () => {
    expect(removeExtraSpaces("\n\n  hello  \n\n")).toBe("hello");
  });
});

describe("removeAllWhitespace", () => {
  it("removes every whitespace character", () => {
    expect(removeAllWhitespace("a b \n c\td")).toBe("abcd");
  });
});
