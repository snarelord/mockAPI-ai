import { describe, test, expect, vi } from "vitest";
import { genMockData, openai } from "../genMockData.js";

describe("genMockData", () => {
  test("returns valid JSON when OpenAI responds correctly", async () => {
    const fakeResponse = [
      { id: 1, title: "Fake Post" },
      { id: 2, title: "Another Post" },
    ];

    vi.spyOn(openai.chat.completions, "create").mockResolvedValue({
      choices: [
        {
          message: {
            content: JSON.stringify(fakeResponse),
          },
        },
      ],
    } as any);

    const result = await genMockData("2 blog posts with id and title");

    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("title");
    expect(result.length).toBe(2);
  });
});
