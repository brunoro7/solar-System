import React from 'react';
import PropTypes from 'prop-types';

class TitleMissions extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="titleMission">
        { headline }
      </h2>
    );
  }
}

TitleMissions.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default TitleMissions;
