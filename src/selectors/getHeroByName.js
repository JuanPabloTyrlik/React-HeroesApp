import { heroes } from '../data/heroes';

export const getHeroByName = (name = '') => {
    return name
        ? heroes.filter((hero) => new RegExp(name, 'gi').test(hero.superhero))
        : [];
};
