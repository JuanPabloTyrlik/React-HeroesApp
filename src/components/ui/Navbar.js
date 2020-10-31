import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SearchContext } from '../../routers/DashboardRouter';

export const Navbar = () => {
    const { searchValue, setSearchValue } = useContext(SearchContext);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    };

    const handleReset = (e) => {
        setSearchValue('');
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
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};
