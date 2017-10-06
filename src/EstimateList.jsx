import R from 'ramda';
import React from 'react';

class EstimateList extends React.PureComponent {
  render() {
    const { estimates } = this.props;
    return (
      R.map((estimate) => (
        <div>{estimate.value}</div>
      ), estimates)
    );
  }
}

export default EstimateList;
