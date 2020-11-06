import React from 'react';
import { mount } from 'enzyme';
import { PublicRoute } from '../PublicRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Tests on Public Route', () => {
    test('should render a public component', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute
                    isAuthenticated={false}
                    component={() => <span>Rendered!</span>}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(true);
    });
    test('should not render a public component if already logged', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute
                    isAuthenticated
                    component={() => <span>Rendered!</span>}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(false);
    });
});
