import { TYPES } from '../types/types';

const initialState = {
    logged: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOGIN:
            return { ...payload, logged: true };
        case TYPES.LOGOUT:
            return { logged: false };
        default:
            return state;
    }
};
