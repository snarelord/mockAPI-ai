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

// define the routes for the mock API
const routes = [
  {
    url: "/todos", // the endpoint for the todos
    method: "GET", // the HTTP method to use for the request
    useAI: true, // enable AI for generating mock data
    description: "Fetches a list of todos, each with an id, title, and completion status.", // description of the route
  },
];

// asynchronously fetch the mock data 
async function fetchMockData() {
  try {
    const mockData = await mockAPI(routes); // fetch data based on the defined routes
    console.log(mockData); // log the fetched mock data
  } catch (error) {
    console.error("Error fetching mock data:", error); // handle any errors
  }
}

// call the function to fetch
fetchMockData();

```

---
