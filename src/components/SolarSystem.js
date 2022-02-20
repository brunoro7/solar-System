import React from 'react';
import CardBoxPlanets from './CardBoxPlanets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="box-solarSytem" data-testid="solar-system">
        <Title headline="Planetas" />
        <CardBoxPlanets />
      </div>
    );
  }
}

export default SolarSystem;
