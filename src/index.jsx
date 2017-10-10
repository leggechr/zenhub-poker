import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

const socket = io();

import EstimateList from './EstimateList.jsx';
import EstimateInput from './EstimateInput.jsx';

function submitEstimate(estimateInfo) {
  console.log('submitEstimate');
  socket.emit('submit estimate', estimateInfo);
}

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      estimates: []
    }

    this.updateEstimates = this.updateEstimates.bind(this);
  }

  componentDidMount() {
    socket.on('estimates updated', (payload) => {
      this.updateEstimates(payload);
    });
  }

  updateEstimates(estimates) {
    this.setState({ estimates: estimates });
  }

  render() {
    return (
      <div>
      <EstimateList estimates={this.state.estimates} />
      <EstimateInput submitEstimate={submitEstimate} />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
