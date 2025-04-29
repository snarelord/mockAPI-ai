# 🧠 mockAPI-ai

A lightweight Node + TypeScript tool that generates **realistic mock API responses** using **OpenRouter LLMs**. Built for testing and prototyping.

---

## 🚀 Features

- 🔁 Custom mock endpoints with any URL and method
- 🤖 AI-generated JSON responses via OpenRouter (e.g. Mistral, Mixtral, etc.)
- 🛠️ Easy to plug into frontend prototypes or test suites

## Usage

```javascript
import { mockAPI } from "ai-mock-api";

const routes = [
  {
    url: "/todos",
    method: "GET",
    useAI: true,
    description: "Return a list of todos with id, title, isComplete.",
  },
];

(async () => {
  const data = await mockAPI(routes);
  console.log(data);
})();
```

---
