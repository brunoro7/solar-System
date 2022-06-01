import React from 'react';
import PropTypes from 'prop-types';

class TitlePlanets extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="titlePlanets">
        { headline }
      </h2>
    );
  }
}

TitlePlanets.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default TitlePlanets;
