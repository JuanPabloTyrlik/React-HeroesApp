import React, { useState } from 'react';
import { HeroCard } from '../heroes/HeroCard';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroByName } from '../../selectors/getHeroByName';
import { useMemo } from 'react';

export const SearchScreen = () => {
    const history = useHistory();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [searchValue, setSearchValue] = useState(q);

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchValue}`);
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your Hero"
                            className="form-control"
                            style={{ marginBottom: '1rem' }}
                            autoComplete="off"
                            onChange={handleChange}
                            value={searchValue}
                        />
                        <button
                            type="submit"
                            className="btn btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    <div className="animate__animated animate__fadeIn">
                        {q ? (
                            heroesFiltered.length === 0 && (
                                <div className="alert alert-warning">
                                    No results for {q}
                                </div>
                            )
                        ) : (
                            <div className="alert alert-info">
                                {' '}
                                Search a Hero{' '}
                            </div>
                        )}
                        {heroesFiltered.map((hero) => (
                            <div className="mb-3" key={hero.id}>
                                <HeroCard key={hero.id} {...hero} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
