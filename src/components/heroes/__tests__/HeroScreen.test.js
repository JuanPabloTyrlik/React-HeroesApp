import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import { HeroScreen } from '../HeroScreen';

describe('Tests on HeroScreen', () => {
    const history = createMemoryHistory();

    history.push('/hero/marvel-spider');

    history.push = jest.fn();
    history.goBack = jest.fn();
    history.length = 1;

    beforeEach(() => jest.clearAllMocks());

    test('should Redirect to home if no parameters are received', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen />
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });
    test('should Redirect to home if the hero was not found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123123']}>
                <HeroScreen />
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });
    test('should render a Hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route exact path="/hero/:heroId" component={HeroScreen} />
            </MemoryRouter>
        );
        expect(wrapper.find('img').prop('alt')).toMatch('Spider Man');
        expect(wrapper.find('h3').text()).toMatch('Spider Man');
        expect(wrapper.find('button').text('Return'));
    });

    test('should return to home page if Return is clicked', () => {
        const wrapper = mount(
            <Router history={history}>
                <Route exact path="/hero/:heroId" component={HeroScreen} />
            </Router>
        );
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });
    test('should go back to previous page if Return is clicked', () => {
        history.length = 3;
        const wrapper = mount(
            <Router history={history}>
                <Route exact path="/hero/:heroId" component={HeroScreen} />
            </Router>
        );
        wrapper.find('button').prop('onClick')();
        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).not.toHaveBeenCalled();
    });
});
