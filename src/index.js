import { html, render } from "htm/preact/standalone";
import Layout from "../components/layout";
import GraphQL from "../components/gql";

const App = () =>
  html`
    <${GraphQL} url="https://1prlzv487.sse.codesandbox.io">
      <${Layout} />
    <//>
  `;
render(html`<${App} />`, document.getElementById("app"));
