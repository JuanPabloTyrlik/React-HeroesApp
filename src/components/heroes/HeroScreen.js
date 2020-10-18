import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
    const { heroId } = useParams();
    const hero = getHeroById(heroId);

    const history = useHistory();

    if (!hero) return <Redirect to={history.goBack()} />;

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div>
            <h1>Hero Screen</h1>
            <h5>{heroId}</h5>
        </div>
    );
};
