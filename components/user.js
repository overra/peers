import { html } from "htm/preact/standalone";

export default ({ id, name, email }) => html`
  <div>
    <img src="https://api.adorable.io/avatars/285/${email}" />
    <h1>${name}</h1>
  </div>
`;
