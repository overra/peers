import { html, Component } from "htm/preact/standalone";
import { Mutation } from "./gql";
import gql from "nanographql";
import { Formik, Field } from "formik";

const createPost = `
  mutation($title: String!, $body: String!, $authorId: ID!) {
    createPost(title: $title, body: $body, authorId: $authorId) {
      id
      title
      body
      author {
        name
      }
    }
  }
`;

export default class extends Component {
  render() {
    return html`
      <${Mutation} mutation=${gql(createPost)}>
        ${mutate => {
          const handleSubmit = ({ title, body }, actions) => {
            actions.resetForm();
            mutate({ title, body, authorId: 1 });
          };
          const renderForm = ({ handleSubmit, values }) => html`
            <form onSubmit="${handleSubmit}">
              <div>
                <label for="title">Title</label>
                <${Field} type="text" name="title" />
              </div>
              <div>
                <label for="body">Body</label>
                <${Field} component="textarea" name="body" />
              </div>
              <button type="submit">create post</button>
            </form>              
          `;

          return html`
            <${Formik} onSubmit="${handleSubmit}" render=${renderForm} />
          `;
        }}
      <//> 
    `;
  }
}
