import "clsx";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<header><h1>SSR Editor</h1> <navigation><a href="/documents">Start</a> <a href="/documents/list">Lista</a> <a href="/documents/create">Nytt dokument</a></navigation></header>`);
  });
}
function Footer($$renderer) {
  $$renderer.push(`<footer><p class="copyright">© Alexander Högfeldt</p></footer>`);
}
export {
  Footer as F,
  Header as H
};
