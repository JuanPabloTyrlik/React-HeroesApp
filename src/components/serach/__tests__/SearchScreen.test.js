import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import { SearchScreen } from '../SearchScreen';

describe('Tests on SearchScreen', () => {
    const history = createMemoryHistory();
    test('should render correctly', () => {
        history.push('/search');
        const wrapper = mount(
            <Router history={history}>
                <Route exact path="/search" component={SearchScreen} />
            </Router>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('should search Batman and return results using queryString', () => {
        history.push('/search?q=Batman');
        const wrapper = mount(
            <Router history={history}>
                <Route exact path="/search" component={SearchScreen} />
            </Router>
        );
        expect(wrapper.find('input').prop('value')).toMatch('Batman');
        expect(wrapper.find('img').prop('alt')).toMatch('Batman');
    });
    test('should search a hero that does not exist and show a message', () => {
        history.push('/search?q=NotAHero');
        const wrapper = mount(
            <Router history={history}>
                <Route exact path="/search" component={SearchScreen} />
            </Router>
        );
        expect(wrapper.find('input').prop('value')).toMatch('NotAHero');
        expect(wrapper.find('div.alert.alert-warning').text()).toMatch(
            'No results for NotAHero'
        );
    });
    test('should search a hero and update the queryString', () => {
        history.push('/search');
        const wrapper = mount(
            <Router history={history}>
                <Route exact path="/search" component={SearchScreen} />
            </Router>
        );
        history.push = jest.fn();
        wrapper
            .find('input')
            .simulate('change', { target: { value: 'Punisher' } });
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(history.push).toHaveBeenCalledWith('?q=Punisher');
    });
});
