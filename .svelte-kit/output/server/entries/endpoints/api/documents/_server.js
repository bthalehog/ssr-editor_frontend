import "@sveltejs/kit";
async function GET() {
  try {
    const response = await fetch("http://localhost:1337/api");
  } catch (error) {
    console.error("Error in svelte router/server.js", error);
  }
}
export {
  GET
};
