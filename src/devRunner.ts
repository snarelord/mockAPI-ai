import { mockAPI } from "./index.js";
import "dotenv/config";
import type { MockRoute } from "./types.js";

const routes: MockRoute[] = [
  {
    url: "/todos",
    method: "GET",
    useAI: true,
    description:
      "Return a list of computer parts needed to build a workhorse pc items with id, title, isComplete fields.",
  },
  {
    url: "/profile",
    method: "GET",
    description: "Return 10 user profiles with name, email, and account creation date.",
  },
];

(async () => {
  const data = await mockAPI(routes);
  console.log("MOCK DATA:\n", JSON.stringify(data, null, 2));
})();
