import React from 'react';

class EstimateInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      estimate: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEstimate = this.handleChangeEstimate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeEstimate(e) {
    this.setState({ estimate: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitEstimate(this.state);
    this.setState({ name: '', estimate: ''});
  }

  render() {
    const { submitEstimate } = this.props;
    return(
      <form onSubmit={this.handleSubmit}>
        Name: <input type='text' value={this.state.name} onChange={this.handleChangeName} />
        Estimate: <input type='text' value={this.state.estimate} onChange={this.handleChangeEstimate} />
        <input type='submit' value='Submit' />
      </form>
    );
  };
}

export default EstimateInput;
