
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './common/configureStore';
import Root from './browser/Root';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line no-underscore-dangle

const store = configureStore({initialState});

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./browser/Root', () => {
        const NewRoot = require('./browser/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}