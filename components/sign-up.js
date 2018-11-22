import { html } from "htm/preact/standalone";
import { Mutation } from "./gql";
import gql from "nanographql";

const createUser = `
  mutation($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;

export default () => html`
  <${Mutation} mutation=${gql(createUser)}>
    ${mutate => {
      const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        mutate({ name, email, password });
      };
      return html`
        <form onSubmit="${handleSubmit}">
          <label for="email">Email</label> <input type="email" name="email" />
          <label for="name">Name</label> <input type="text" name="name" />
          <label for="password">Password</label>
          <input type="password" name="password" />
          <button type="submit">create user</button>
        </form>
      `;
    }}
  <//>
`;
