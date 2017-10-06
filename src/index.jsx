import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

const socket = io();

function submitEstimate(e) {
  console.log('submitEstimate');
  socket.emit('submit estimate', 0);
}

class Index extends React.Component {
  render() {
    return (
      <form onSubmit={submitEstimate}>
      <input type='submit' />
      </form>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
