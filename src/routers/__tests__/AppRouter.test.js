import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Tests on AppRouter', () => {
    test('should render login page if unauthorized', () => {
        const contextValue = {
            user: {
                logged: false,
            },
            dispatch: jest.fn(),
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper.find('h1').text()).toMatch('Login Screen');
        expect(wrapper.find('input').prop('placeholder')).toMatch('Username');
        expect(wrapper.find('button').text()).toMatch('Login');
    });
    test('should render Marvel Screen if authorized', () => {
        const contextValue = {
            user: {
                name: 'Juan Pablo',
                logged: true,
            },
            dispatch: jest.fn(),
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
