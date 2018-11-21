import { html } from "htm/preact/standalone";
import "./layout.less";
import Users from "./users";

export default () => {
  return html`
    <div class="layout">
        <header>peers</header>
        <aside>
            navigation
        </aside>
        <section>
            <${Users} />
        </section>
    </div>
  `;
};
