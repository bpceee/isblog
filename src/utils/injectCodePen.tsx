import { JSDOM } from "jsdom";

export const injectCodePen = (originalHtml: string) => {
  const dom = new JSDOM(originalHtml);

  const links = dom.window.document.querySelectorAll("a");
  links.forEach((link) => {
    if (link.textContent !== "View on CodePen") {
      return;
    }
    const href = link.href;
    const [, , , user, , slugHash] = href.split("/");
    const div = dom.window.document.createElement("div");
    div.innerHTML = `
      <p
        class="codepen"
        data-height="300"
        data-default-tab="html,result"
        data-slug-hash="${slugHash}"
        data-user="${user}"
        style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
      >
        <a href="">Refresh page to view</a>
        <span>&nbsp;or&nbsp;</span> 
        <a href="${href}">
          View on CodePen
        </a>.
      </p>
      <script
        async
        src="https://cpwebassets.codepen.io/assets/embed/ei.js"
      ></script>`;
    link.replaceWith(div);
  });

  return dom.serialize();
};
