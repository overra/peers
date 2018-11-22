import { html } from "htm/preact/standalone";
import "./layout.less";
import Posts from "./posts";
import CreatePost from "./create-post";

export default () => {
  return html`
    <div class="layout">
        <header>peers</header>
        <aside>
            <${CreatePost} />
        </aside>
        <section>
            <${Posts} />
        </section>
    </div>
  `;
};
