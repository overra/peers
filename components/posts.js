import { html } from "htm/preact/standalone";
import { createQuery } from "blade.macro";
import { Query } from "./gql";
import gql from "nanographql";

const getPosts = createQuery();

const renderQueryResults = ({ loading, data }) => {
  console.log("rendering posts");
  if (loading)
    return html`
      <div>loading...</div>
    `;

  const results = getPosts(data);
  const { posts } = results;
  const postElems = posts.map(
    ({ id, title, body, author: { name } }) =>
      html`
        <div>
          <h1>${title}</h1>
          <small>by ${name}</small>
          <p>${body}</p>
        </div>
      `
  );
  return html`
    <div>${postElems}</div>
  `;
};

export default () => html`
  <${Query} query="${gql(getPosts)}">
    ${renderQueryResults}
  <//>
`;
