import "clsx";
function Header($$renderer) {
  $$renderer.push(`<header><h1>SSR Editor</h1> <navigation><a href="/documents">Start</a> <a href="/documents/list">Lista</a> <a href="/documents/create">Nytt dokument</a></navigation></header>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer><p class="copyright">© Alexander Högfeldt</p></footer>`);
}
export {
  Footer as F,
  Header as H
};
