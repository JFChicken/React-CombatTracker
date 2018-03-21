// @flow
import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'http://127.0.0.1:8000/graphql/query' });

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
        <MuiThemeProvider>
          <ApolloProvider client={client}>
            <Provider store={store}>
              <ConnectedRouter history={history}>
                <App />
              </ConnectedRouter>
            </Provider>
          </ApolloProvider>
        </MuiThemeProvider>
    );
  }
}
