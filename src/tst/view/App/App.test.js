import React from 'react';
import {render} from '@testing-library/react';
import AppComponent from 'view/App/AppContainer';
import store from "state/store/Store";
import {Provider} from "react-redux";
import {setUser} from "state/actions/creators/UserActions";

test('When user is logged in, App displays it correctly.', () => {
    store.dispatch(setUser("TestUser"));
    const {getByText} = render(<Provider store={store}>
        <AppComponent/>
    </Provider>);
    const testUserName = getByText(/TestUser/i);
    expect(testUserName).toBeInTheDocument();
});

test('When user is not logged in login is displayed.', () => {
    store.dispatch(setUser(""));
    const {getByText} = render(<Provider store={store}>
        <AppComponent/>
    </Provider>);
    const loginText = getByText(/Login/i);
    expect(loginText).toBeInTheDocument();
});