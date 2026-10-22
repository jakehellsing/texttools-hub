import { expect, test } from "@playwright/test";

const tools = [
  { slug: "word-counter", name: "Word Counter" },
  { slug: "character-counter", name: "Character Counter" },
  { slug: "sentence-counter", name: "Sentence & Paragraph Counter" },
  { slug: "reading-time-calculator", name: "Reading Time Calculator" },
  { slug: "case-converter", name: "Case Converter" },
  { slug: "title-case-converter", name: "Title Case Converter" },
  { slug: "remove-duplicate-lines", name: "Remove Duplicate Lines" },
  { slug: "remove-extra-spaces", name: "Remove Extra Spaces" },
  { slug: "text-to-slug", name: "Text to Slug Converter" },
  { slug: "lorem-ipsum-generator", name: "Lorem Ipsum Generator" },
];

test.describe("home page", () => {
  test("lists all ten tools with working links", async ({ page }) => {
    await page.goto("/");
    for (const tool of tools) {
      const link = page.getByRole("link", { name: tool.name }).first();
      await expect(link).toBeVisible();
    }
  });

  test("navigates to a tool page", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: "Word Counter" })
      .first()
      .click();
    await expect(page).toHaveURL(/\/tools\/word-counter$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Word Counter" }),
    ).toBeVisible();
  });
});

test.describe("tool pages", () => {
  for (const tool of tools) {
    test(`${tool.name} page loads with unique title and canonical`, async ({
      page,
    }) => {
      await page.goto(`/tools/${tool.slug}`);
      await expect(page).toHaveTitle(new RegExp("TextTools Hub$"));
      await expect(
        page.getByRole("heading", { level: 1, name: tool.name }),
      ).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`/tools/${tool.slug}$`),
      );
      // Related tools provide internal links.
      await expect(
        page.getByRole("navigation", { name: "Related tools" }),
      ).toBeVisible();
    });
  }
});

test.describe("word counter", () => {
  test("counts words as you type", async ({ page }) => {
    await page.goto("/tools/word-counter");
    await page
      .getByLabel("Your text")
      .fill("The quick brown fox jumps over the lazy dog.");
    await expect(
      page.locator("dl").getByText("9", { exact: true }),
    ).toBeVisible();
  });

  test("shows zeroes for empty input and resets on Clear", async ({
    page,
  }) => {
    await page.goto("/tools/word-counter");
    const textarea = page.getByLabel("Your text");
    await textarea.fill("hello world");
    await page.getByRole("button", { name: "Clear" }).click();
    await expect(textarea).toHaveValue("");
  });
});

test.describe("case converter", () => {
  test("converts to lowercase", async ({ page }) => {
    await page.goto("/tools/case-converter");
    await page.getByRole("button", { name: "lowercase" }).click();
    await page.getByLabel("Your text").fill("HELLO World");
    await expect(page.getByLabel("Result")).toHaveValue("hello world");
  });

  test("defaults to uppercase", async ({ page }) => {
    await page.goto("/tools/case-converter");
    await page.getByLabel("Your text").fill("shout this");
    await expect(page.getByLabel("Result")).toHaveValue("SHOUT THIS");
  });
});

test.describe("other tools", () => {
  test("title case keeps minor words lowercase", async ({ page }) => {
    await page.goto("/tools/title-case-converter");
    await page.getByLabel("Your text").fill("the lord of the rings");
    await expect(page.getByLabel("Result")).toHaveValue(
      "The Lord of the Rings",
    );
  });

  test("remove duplicate lines dedupes", async ({ page }) => {
    await page.goto("/tools/remove-duplicate-lines");
    await page.getByLabel("Your text").fill("apple\nbanana\napple");
    await expect(page.getByLabel("Result")).toHaveValue("apple\nbanana");
  });

  test("remove extra spaces collapses whitespace", async ({ page }) => {
    await page.goto("/tools/remove-extra-spaces");
    await page.getByLabel("Your text").fill("too    many    spaces");
    await expect(page.getByLabel("Result")).toHaveValue("too many spaces");
  });

  test("text-to-slug produces a slug per line", async ({ page }) => {
    await page.goto("/tools/text-to-slug");
    await page.getByLabel("Your text").fill("Hello World!\nCafé Menu");
    await expect(page.getByLabel("Result")).toHaveValue(
      "hello-world\ncafe-menu",
    );
  });

  test("lorem ipsum generator produces paragraphs", async ({ page }) => {
    await page.goto("/tools/lorem-ipsum-generator");
    const output = page.getByLabel("Generated text");
    await expect(output).not.toHaveValue("");
    await expect(output).toHaveValue(/^Lorem ipsum/);
  });

  test("reading time estimates minutes", async ({ page }) => {
    await page.goto("/tools/reading-time-calculator");
    await page
      .getByLabel("Your text")
      .fill(Array(400).fill("word").join(" "));
    await expect(page.getByText("2 min")).toBeVisible();
  });
});

test.describe("static and SEO files", () => {
  test("sitemap.xml lists tool pages", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
    const body = await response?.text();
    expect(body).toContain("/tools/word-counter");
  });

  test("robots.txt references the sitemap", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);
    expect(await response?.text()).toContain("sitemap.xml");
  });

  test("privacy, terms, and contact pages load", async ({ page }) => {
    for (const path of ["/privacy-policy", "/terms-of-service", "/contact"]) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });

  test("404 page renders for unknown routes", async ({ page }) => {
    const response = await page.goto("/tools/does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { name: "Page not found" }),
    ).toBeVisible();
  });
});
