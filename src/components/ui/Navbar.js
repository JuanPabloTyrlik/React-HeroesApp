import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { SearchContext } from '../../routers/DashboardRouter';
import { TYPES } from '../../types/types';

export const Navbar = () => {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    };

    const handleReset = () => {
        setSearchValue('');
    };

    const handleLogOut = () => {
        dispatch({ type: TYPES.LOGOUT });
        history.replace('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/" onClick={handleReset}>
                Comics
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                        onClick={handleReset}
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                        onClick={handleReset}
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <form
                        className="form-inline my-2 my-lg-0"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search Hero"
                            aria-label="Search"
                            onChange={handleChange}
                            value={searchValue}
                        />
                    </form>
                    <span className="navbar-text text-success">
                        {user.name}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
