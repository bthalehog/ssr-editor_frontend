import { V as head } from "../../../chunks/index2.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import "../../../chunks/config.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>SSR-Editor</title>`);
      });
      $$renderer3.push(`<meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>`);
    });
    Header($$renderer2);
    $$renderer2.push(`<!----> <main><h2>Dokument</h2> <p>Här är en lista över alla dokument i databasen.</p> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p>Loading...</p>`);
    }
    $$renderer2.push(`<!--]--></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
