import React from 'react';
import CardBoxMissions from './CardBoxMissions';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions-content" data-testid="missions">
        <Title headline="Missões" />
        <CardBoxMissions />
      </div>
    );
  }
}

export default Missions;
