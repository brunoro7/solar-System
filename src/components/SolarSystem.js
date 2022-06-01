import React from 'react';
import CardBoxPlanets from './CardBoxPlanets';
// import Title from './Title';
import TitlePlanets from './TitlePlanets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="boxSolarSytem" data-testid="solar-system">
        <TitlePlanets headline="Planetas" />
        <CardBoxPlanets />
      </div>
    );
  }
}

export default SolarSystem;
