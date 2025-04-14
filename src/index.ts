import { genMockData } from "./genMockData.js";
import { MockRoute } from "./types.js";

export const mockAPI = async (routes: MockRoute[]): Promise<Record<string, any>> => {
  const mockResults: Record<string, any> = {};

  for (const route of routes) {
    const key = `${route.method}:${route.url}`;

    if (route.mockData) {
      mockResults[key] = typeof route.mockData === "function" ? await route.mockData() : route.mockData;
    } else if (route.useAI && route.description) {
      mockResults[key] = await genMockData(route.description);
    } else if (route.description) {
      mockResults[key] = await genMockData(route.description);
    } else {
      mockResults[key] = { message: "No description or mock data provided" };
    }
  }

  return mockResults;
};
