import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  // set time state
  state = {
    time: new Date()
  };

  // update time
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }
  
  render() {
    return (
        <div className="clock">
          {this.state.time.toLocaleTimeString()}
        </div>
    
    );
  }
}

export default Clock;