import { h, html, Component } from "htm/preact/standalone";
import { createContext } from "preact-context";

export const GQLContext = createContext();

export const Query = props => {
  const { query, children } = props;
  const executeQuery = ({ url }) => {
    // 2) pass url to execute query
    return html`
      <${ExecuteQuery} url=${url} query=${query}>
        ${({ loading, data }) => children[1]({ loading, data })}
      <//>
    `;
  };

  // 1) get api url from context
  return html`
    <${GQLContext.Consumer} children="${executeQuery}" />
  `;
};

export class ExecuteQuery extends Component {
  componentWillMount() {
    const { url, query, variables } = this.props;
    const fetchOptions = {
      body: query(variables),
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    fetch(url, fetchOptions)
      .then(res => res.json())
      .then(({ data }) => this.setState({ loading: false, data }));

    this.setState({ loading: true, data: null });
  }
  render({ children }, { loading, data }) {
    return children[1]({ loading, data });
  }
}

export default class GraphQL extends Component {
  componentWillMount() {
    this.setState({ url: this.props.url });
  }
  render({ children }, { url }) {
    return html`
      <${GQLContext.Provider} value="${{ url }}">
        ${children[1]}
      <//>
    `;
  }
}
