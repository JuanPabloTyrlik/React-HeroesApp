import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { TYPES } from '../../../types/types';
import { LoginScreen } from '../LoginScreen';

describe('Tests on LoginScreen', () => {
    const authContextValue = {
        user: {
            logged: false,
        },
        dispatch: jest.fn(),
    };
    test('should render correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={authContextValue}>
                <LoginScreen />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('should log an user and redirect to website', () => {
        const history = createMemoryHistory();
        history.replace = jest.fn();
        const wrapper = mount(
            <AuthContext.Provider value={authContextValue}>
                <Router history={history}>
                    <LoginScreen />
                </Router>
            </AuthContext.Provider>
        );
        const form = wrapper.find('form');
        form.simulate('submit');
        expect(authContextValue.dispatch).toHaveBeenCalledWith({
            type: TYPES.LOGIN,
            payload: { name: '' },
        });
        expect(history.replace).toHaveBeenCalledWith('/');
    });
    test('should log an user and redirect to lastPath', () => {
        const history = createMemoryHistory();
        history.replace = jest.fn();
        localStorage.setItem('lastPath', '/dc');
        const wrapper = mount(
            <AuthContext.Provider value={authContextValue}>
                <Router history={history}>
                    <LoginScreen />
                </Router>
            </AuthContext.Provider>
        );
        const form = wrapper.find('form');
        form.simulate('submit');
        expect(authContextValue.dispatch).toHaveBeenCalledWith({
            type: TYPES.LOGIN,
            payload: { name: '' },
        });
        expect(history.replace).toHaveBeenCalledWith('/dc');
    });
});
