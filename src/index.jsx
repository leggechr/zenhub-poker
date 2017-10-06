import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

const socket = io();

import EstimateList from './EstimateList.jsx';
import EstimateInput from './EstimateInput.jsx';

function submitEstimate(e) {
  console.log('submitEstimate');
  socket.emit('submit estimate', 0);
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
      <button onClick={submitEstimate} >submit</button>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
