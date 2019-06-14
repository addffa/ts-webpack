import React, { Component } from 'react';

type ClockState = {
  time: Date
}

class Clock extends Component<{}, ClockState> {

  tick() {
    this.setState({
      time: new Date
    })
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    this.tick();

  }

  render() {
    return (
    <div style={{color: "red"}}>
      <p>This is a clock</p>
      <p>{this.state.time.toLocaleTimeString()}</p>
      {this.props.children}
    </div>
    )
  }
}

export default Clock;