const isDevelopment = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const API_BASE = isDevelopment ? "http://localhost:1337" : "https://jsramverk-editor-alhf24.azurewebsites.net";
if (typeof window !== "undefined") {
  console.log("Env found:", {
    hostname: window.location.hostname,
    isDevelopment,
    API_BASE
  });
}
export {
  API_BASE as A
};
