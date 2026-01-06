import { V as head, W as store_get, X as attr, Y as unsubscribe_stores } from "../../../../chunks/index2.js";
import { H as Header, F as Footer } from "../../../../chunks/Footer.js";
import "../../../../chunks/config.js";
import { i as isAuthenticated } from "../../../../chunks/auth.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let title = "";
    let content = "";
    let submits = false;
    let isAuth = null;
    isAuthenticated.subscribe((value) => {
      isAuth = value;
    });
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>SSR-Editor</title>`);
      });
      $$renderer3.push(`<meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>`);
    });
    Header($$renderer2);
    $$renderer2.push(`<!----> <main><h2>Skapa dokument</h2> `);
    if (!store_get($$store_subs ??= {}, "$isAuth", isAuth)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="auth-required"><p>Du måste vara inloggad för att skapa, redigera eller ta bort dokument.</p> <a href="/login">Logga in</a></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <form class="new-doc"><label for="title">Titel</label> <input type="text" name="title"${attr("value", title)} required${attr("disabled", submits, true)}/> <label for="content">Innehåll</label> <textarea name="content"${attr("disabled", submits, true)}>`);
      const $$body = escape_html(content);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea> <input type="submit"${attr("value", "Skapa")}${attr("disabled", submits, true)}/></form>`);
    }
    $$renderer2.push(`<!--]--></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
