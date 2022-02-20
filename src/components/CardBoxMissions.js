import React from 'react';
import MissionCard from './MissionCard';
import Missions from '../data/missions';

class CardBoxMissions extends React.Component {
  render() {
    return (
      <div className="box-cardsMissions">
        {
          Missions
            .map((travel) => (<MissionCard
              key={ travel.name }
              name={ travel.name }
              year={ travel.year }
              country={ travel.country }
              destination={ travel.destination }
            />))
        }
      </div>
    );
  }
}

export default CardBoxMissions;
