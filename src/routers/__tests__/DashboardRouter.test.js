import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { DashboardRouter } from '../DashboardRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Tests on DashboardRouter', () => {
    test('should render correctly', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'Juan',
            },
            dispatch: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <DashboardRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span.navbar-text.text-success').text()).toMatch(
            contextValue.user.name
        );
    });
});
