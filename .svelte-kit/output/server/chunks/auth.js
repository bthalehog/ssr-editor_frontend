import { w as writable } from "./index.js";
function getTokenFromStorage() {
  return null;
}
const isAuthenticated = writable(!!getTokenFromStorage());
export {
  isAuthenticated as i
};
