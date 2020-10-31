import React from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../routers/DashboardRouter';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    let heroes = getHeroesByPublisher(publisher);
    const { searchValue } = useContext(SearchContext);
    if (searchValue) {
        heroes = heroes.filter((value) =>
            new RegExp(searchValue, 'gi').test(value.superhero)
        );
    }
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    );
};
