import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Tests on PrivateRoute', () => {
    const props = {
        location: {
            pathname: '/',
        },
    };

    Storage.prototype.setItem = jest.fn();

    test('should render the components if authenticated and write on localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated
                    component={() => <span>Rendered!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'lastPath',
            props.location.pathname
        );
    });

    test('should not render the component if unauthorized', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Rendered!</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'lastPath',
            props.location.pathname
        );
    });
});
