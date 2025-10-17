import { json } from "@sveltejs/kit";
const isDevelopment = typeof window !== "undefined" && window.location.hostname === "localhost";
const API_BASE = isDevelopment ? "http://localhost:1337" : "jsramverk-editor-alhf24.azurewebsites.net";
async function GET() {
  try {
    const response = await fetch(`${API_BASE}/api`);
    const data = await response.json();
    return json(data);
  } catch (error) {
    console.error("Error in svelte router/server.js", error);
  }
}
export {
  GET
};
