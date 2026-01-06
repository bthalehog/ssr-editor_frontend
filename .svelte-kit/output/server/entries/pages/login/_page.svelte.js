import { V as head, X as attr, Z as bind_props, _ as stringify } from "../../../chunks/index2.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import "../../../chunks/config.js";
import { i as isAuthenticated } from "../../../chunks/auth.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const prerender = true;
    let email = "";
    let password = "";
    let loading = false;
    isAuthenticated.subscribe((value) => {
    });
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>SSR-Editor - access</title>`);
      });
      $$renderer3.push(`<meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>`);
    });
    Header($$renderer2);
    $$renderer2.push(`<!----> <main><h2>Logga in</h2> <p>Logga in för att kunna skapa, redigera och radera dokument.</p> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <form class="auth-form"><div class="form-group"><label for="email">E-post:</label> <input type="email" id="email"${attr("value", email)} required${attr("disabled", loading, true)} placeholder="E-post"/></div> <div class="form-group"><label for="password">Lösenord:</label> <input type="password" id="password"${attr("value", password)} required${attr("disabled", loading, true)} placeholder="Lösenord"/></div> <button type="submit"${attr("disabled", loading, true)} class="submit-btn">${escape_html("Logga in")}</button></form> <p class="auth-link">Har du inget konto? <a href="/register">Registrera dig</a>!</p> <p class="auth-link">Du kan läsa <a${attr("href", `${stringify(base)}/documents`)}>dokumenten i databasen</a> som gäst.</p></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { prerender });
  });
}
export {
  _page as default
};
