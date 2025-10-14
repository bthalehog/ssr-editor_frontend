import { x as head, y as attr } from "../../../../chunks/index2.js";
import { H as Header, F as Footer } from "../../../../chunks/Footer.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer) {
  let title = "";
  let content = "";
  let submits = false;
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>SSR-Editor</title>`);
    });
    $$renderer2.push(`<meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>`);
  });
  Header($$renderer);
  $$renderer.push(`<!----> <main><h2>Skapa dokument</h2> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <form class="new-doc"><label for="title">Titel</label> <input type="text" name="title"${attr("value", title)} required${attr("disabled", submits, true)}/> <label for="content">Innehåll</label> <textarea name="content"${attr("disabled", submits, true)}>`);
  const $$body = escape_html(content);
  if ($$body) {
    $$renderer.push(`${$$body}`);
  }
  $$renderer.push(`</textarea> <input type="submit"${attr("value", "Skapa")}${attr("disabled", submits, true)}/></form></main> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
