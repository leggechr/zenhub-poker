import R from 'ramda';
import React from 'react';

var _getEstimateText = R.curry(function(isRevealed, estimate) {
  if (isRevealed) {
    return `${estimate.name}: ${estimate.estimate}`;
  }

  return estimate.name;
});

class EstimateList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isRevealed: false
    };
    
    this.revealEstimates = this.revealEstimates.bind(this);
  }

  revealEstimates() {
    this.setState({ isRevealed: true });
  }

  render() {
    const { estimates } = this.props;
    const { isRevealed } = this.state;

    var getEstimateText = _getEstimateText(isRevealed);
    return (
      <div>
      {R.map((estimate) => (
        <div>{getEstimateText(estimate)}</div>
      ), estimates)}
      {isRevealed ? null : <button onClick={this.revealEstimates}>Reveal Estimates</button>}
      </div>
    );
  }
}

export default EstimateList;
