// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

let store = createStore(todoApp);

render(
    <MuiThemeProvider>
    <Provider store={store}>
        <App />
    </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);