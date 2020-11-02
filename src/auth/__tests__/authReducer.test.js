import { TYPES } from '../../types/types';
import { authReducer } from '../authReducer';

describe('Tests on authReducer', () => {
    test('should return default state', () => {
        const initialState = {
            logged: false,
        };
        expect(authReducer(initialState, {})).toEqual(initialState);
    });
    test('should log an user', () => {
        const state = {
            name: 'Juan Pablo',
            logged: true,
        };
        const action = {
            type: TYPES.LOGIN,
            payload: { name: 'Juan Pablo' },
        };
        expect(authReducer(undefined, action)).toEqual(state);
    });
    test('should log out an user', () => {
        const state = {
            logged: false,
        };
        const action = {
            type: TYPES.LOGOUT,
            payload: { name: 'Juan Pablo' },
        };
        expect(authReducer(undefined, action)).toEqual(state);
    });
});
