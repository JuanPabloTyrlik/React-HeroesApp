import React, { useState } from 'react';
import { createContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/serach/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const SearchContext = createContext();

export const DashboardRouter = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <>
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <Navbar />
                <div className="container mt-2">
                    <Switch>
                        <Route exact path="/marvel" component={MarvelScreen} />
                        <Route exact path="/dc" component={DcScreen} />
                        <Route exact path="/search" component={SearchScreen} />
                        <Route
                            exact
                            path="/hero/:heroId"
                            component={HeroScreen}
                        />
                        <Redirect to="/marvel" />
                    </Switch>
                </div>
            </SearchContext.Provider>
        </>
    );
};
