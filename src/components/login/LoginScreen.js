import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { TYPES } from '../../types/types';

export const LoginScreen = () => {
    const history = useHistory();

    const { dispatch } = useContext(AuthContext);

    const [userName, setUserName] = useState('');

    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch({ type: TYPES.LOGIN, payload: { name: userName } });
        history.replace(lastPath);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    };

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />
            <form onSubmit={handleLogin}>
                <input
                    className="form-control col-md-3"
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                    style={{ marginBottom: '1rem' }}
                    onChange={handleChange}
                    value={userName}
                />
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};
