// @flow
import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <MuiThemeProvider>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
            </MuiThemeProvider>
        );
    }
}
