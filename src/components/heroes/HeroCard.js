import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/style.css';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const history = useHistory();

    const handleClick = () => history.push(`/hero/${id}`);

    return (
        <div className="card ms-3" style={{ maxWidth: 540, cursor: 'pointer' }}>
            <div className="row no-gutters" onClick={handleClick}>
                <div className="col-md-4">
                    <img
                        src={`./assets/heroes/${id}.jpg`}
                        alt={superhero}
                        className="card-img"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {alter_ego !== characters && (
                            <p className="card-text">{characters}</p>
                        )}
                        <p className="card-text">
                            <small className="text-muted">
                                {first_appearance}
                            </small>
                        </p>
                        <span className="link">Más...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
