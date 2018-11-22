import { html, render } from "htm/preact/standalone";
import Layout from "../components/layout";
import GraphQL from "../components/gql";

render(
  html`
    <${GraphQL} url="https://1prlzv487.sse.codesandbox.io">
      <${Layout} />
    <//>
  `,
  document.getElementById("app")
);
