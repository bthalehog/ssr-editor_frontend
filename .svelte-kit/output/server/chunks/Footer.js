import { y as attr, z as stringify } from "./index2.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
import "clsx";
function Header($$renderer) {
  $$renderer.push(`<header><h1>SSR Editor</h1> <navigation><a${attr("href", `${stringify(base)}/documents`)}>Start</a> <a${attr("href", `${stringify(base)}/documents/list`)}>Lista</a> <a${attr("href", `${stringify(base)}/documents/create`)}>Nytt dokument</a></navigation></header>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer><p class="copyright">© Alexander Högfeldt</p></footer>`);
}
export {
  Footer as F,
  Header as H
};
