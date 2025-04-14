// define types
export type MockMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface MockRoute {
  url: string;
  method: MockMethod;
  useAI?: boolean;
  description?: string;
  mockData?: () => Promise<any> | any;
}
