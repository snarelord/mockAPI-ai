import { describe, test, expect, vi } from "vitest";
import { genMockData, openai } from "../genMockData.js";

describe("genMockData", () => {
  //   test("Returns fallback if OpenAI API fails", async () => {
  //     vi.spyOn(openai.chat.completions, "create").mockRejectedValue(new Error("Mock API fail"));

  //     const data = await genMockData("this is impossible");

  //     expect(data).toEqual({ error: "Unable to generate mock data." });
  //   }),
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
    } as any); // `as any` to bypass strict typing on the mocked value

    const result = await genMockData("2 blog posts with id and title");

    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("title");
    expect(result.length).toBe(2);
  });
});
