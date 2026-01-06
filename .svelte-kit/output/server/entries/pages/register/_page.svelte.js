import { V as head, X as attr, Z as bind_props, _ as stringify } from "../../../chunks/index2.js";
import "../../../chunks/config.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  const prerender = true;
  let email = "";
  let password = "";
  let confirmPassword = "";
  let success = false;
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>SSR Editor - registrering</title>`);
    });
  });
  Header($$renderer);
  $$renderer.push(`<!----> <main><h2>Registera användare</h2> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <form class="auth-form"><div class="form-group"><label for="email">E-post:</label> <input type="email" id="email"${attr("value", email)} required${attr("disabled", success, true)} placeholder="E-post"/></div> <div class="form-group"><label for="password">Lösenord:</label> <input type="password" id="password"${attr("value", password)} required${attr("disabled", success, true)} placeholder="Lösenord"/></div> <div class="form-group"><label for="confirmPassword">Lösenord:</label> <input type="confirmPassword" id="confirmPassword"${attr("value", confirmPassword)} required${attr("disabled", success, true)} placeholder="Upprepa lösenord"/></div> <button type="submit"${attr("disabled", success, true)} class="submit-btn">${escape_html("Registrera")}</button></form> <p class="auth-link">Har du redan ett konto? <a${attr("href", `${stringify(base)}/login`)}>logga in</a></p></main> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
  bind_props($$props, { prerender });
}
export {
  _page as default
};
