import { x as head } from "../../../../chunks/index2.js";
import { H as Header, F as Footer } from "../../../../chunks/Footer.js";
import "../../../../chunks/config.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>SSR-Editor</title>`);
      });
      $$renderer3.push(`<meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>`);
    });
    Header($$renderer2);
    $$renderer2.push(`<!----> <main><h2>Dokumentbibliotek</h2> <p>Här är en lista över alla dokument i databasen. Du kan klicka på ett dokumentnamn för att läsa eller uppdatera dokumentet. Skapa nytt dokument genom att trycka på "Skapa" i menyfältet ovan.</p> `);
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
