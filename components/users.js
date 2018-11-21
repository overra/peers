import { html } from "htm/preact/standalone";
import { createQuery } from "blade.macro";
import { Query } from "./gql";
import gql from "nanographql";
import User from "./user";

const getUsers = createQuery();

const renderQueryResults = ({ loading, data }) => {
  if (loading)
    return html`
      <div>loading...</div>
    `;

  const results = getUsers(data);
  const { users } = results;
  const userElems = users.map(
    ({ id, name, email }) =>
      html`
        <${User} name=${name} email=${email} />
      `
  );
  return html`
    <div>${userElems}</div>
  `;
};

export default () => html`
  <${Query} query="${gql(getUsers)}">
    ${renderQueryResults}
  <//>
`;
