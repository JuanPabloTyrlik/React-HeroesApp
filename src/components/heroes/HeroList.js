import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroList = ({ publisher }) => {
    return (
        <ul>
            {getHeroesByPublisher(publisher).map((hero) => (
                <li key={hero.id}>{hero.superhero}</li>
            ))}
        </ul>
    );
};
