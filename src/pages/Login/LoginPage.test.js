import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LoginPage } from './';

const mockStore = configureMockStore([thunk]);

it('renders without crashing', () => {
    const store = mockStore({});
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <LoginPage />
        </Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
