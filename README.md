# 🧠 mockAPI-ai

A lightweight Node + TypeScript tool that generates **realistic mock API responses** using **OpenRouter LLMs**. Built for testing and prototyping.

---

## 🚀 Features

- 🔁 Custom mock endpoints with any URL and method
- 🤖 AI-generated JSON responses via OpenRouter (e.g. Mistral, Mixtral, etc.)
- 🛠️ Easy to plug into frontend prototypes or test suites

## 🔑 Environment Variables

To enable AI-powered mock generation, create a `.env` file at the root of your project and include your OpenRouter API key:

```
OPENROUTER_API_KEY=yourkeyhere;
```

If no key is provided, AI mock generation will be disabled or fallback to static data (depending on your setup).

## Usage

```javascript
import { mockAPI } from "mockapi-ai";

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
