import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { AuthContext } from '../../../auth/AuthContext';
import { SearchContext } from '../../../routers/DashboardRouter';
import { TYPES } from '../../../types/types';
import { createMemoryHistory } from 'history';

describe('Tests on Navbar', () => {
    const searchContextValue = {
        searchValue: '',
        setSearchValue: jest.fn(),
    };

    const authContextValue = {
        user: {
            logged: true,
            name: 'Juan Pablo',
        },
        dispatch: jest.fn(),
    };

    const history = createMemoryHistory();
    history.push('/marvel');
    history.replace = jest.fn();

    const wrapper = mount(
        <AuthContext.Provider value={authContextValue}>
            <SearchContext.Provider value={searchContextValue}>
                <Router history={history}>
                    <Navbar />
                </Router>
            </SearchContext.Provider>
        </AuthContext.Provider>
    );

    beforeAll(() => jest.clearAllMocks());

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("should display logged user's name", () => {
        expect(wrapper.find('span.navbar-text.text-success').text()).toMatch(
            authContextValue.user.name
        );
    });
    test('should logout user', () => {
        wrapper.find('button').simulate('click');
        expect(authContextValue.dispatch).toHaveBeenCalledWith({
            type: TYPES.LOGOUT,
        });
        expect(history.replace).toHaveBeenCalledWith('/login');
    });
});
