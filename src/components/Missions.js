import React from 'react';
import CardBoxMissions from './CardBoxMissions';
// import Title from './Title';
import TitleMissions from './TitleMissions';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions-content" data-testid="missions">
        <TitleMissions headline="Missões" />
        <CardBoxMissions />
      </div>
    );
  }
}

export default Missions;
