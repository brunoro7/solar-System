import React from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class CardBoxPlanets extends React.Component {
  render() {
    return (
      <div className="box-cardsPlanet">
        {
          Planets
            .map((sat) => (<PlanetCard
              key={ sat.name }
              planetName={ sat.name }
              planetImage={ sat.image }
            />))
        }
        <p>até aqui ta indo</p>
      </div>
    );
  }
}

export default CardBoxPlanets;
