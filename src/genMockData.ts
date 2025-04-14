// take prompt description
// use openrouter openai to generate realistic json -- made sure to mention arrays in prompt
// parse
// fallback if openai key is missing

import OpenAI from "openai";
import { getFallbackMock } from "./fallbackMock.js";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENROUTER_API_KEY, baseURL: "https://openrouter.ai/api/v1" });

export const genMockData = async (description: string): Promise<any> => {
  if (!openai) {
    console.warn("OpenAI API key is missing. Falling back to default mock data.");
    return getFallbackMock(description);
  }

  try {
    const response = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        {
          role: "user",
          content: `Generate realistic JSON data for the following description: ${description}. Only respond with valid JSON data.
❗IMPORTANT:
- DO NOT include explanations, comments, or markdown.
- Your entire output MUST be a single valid JSON object or array.
- If the description suggests an array, include it as an array.
- Escape all quotes, newlines, and special characters properly.
- Do NOT include backticks, triple quotes, or code blocks.
- Your response should start with '{' or '[' and end with '}' or ']'.

Example output:
{
  "name": "Example",
  "details": {
    "quote": "He said, \\\"Hello!\\\"",
    "code": "const x = 1;"
  }
}

Now, generate the JSON.`,
        },
      ],
    });

    const raw = response.choices[0].message?.content?.trim() || "{}";
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error generating mock data. Using fallback.", error);
    return getFallbackMock(description);
  }
};
