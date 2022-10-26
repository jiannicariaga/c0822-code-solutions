import React from 'react';

export class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchIsClicked: false,
      startTimer: false,
      elapsedTime: 0,
      timerId: null
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  resetHandler() {
    this.setState({ stopwatchIsClicked: !this.state.stopwatchIsClicked });

    if (this.state.stopwatchIsClicked && this.state.startTimer) {
      this.setState({ elapsedTime: 0 });
    }
  }

  clickHandler() {
    this.setState({ startTimer: !this.state.startTimer });

    if (this.state.startTimer) {
      this.setState({
        timerId: setInterval(() => {
          this.setState({ elapsedTime: this.state.elapsedTime + 1 });
        }, 1000)
      });
    } else {
      this.setState({ timerId: clearInterval(this.state.timerId) });
    }
  }

  render() {
    let icon;

    if (this.state.startTimer) {
      icon = 'fa-solid fa-pause';
    } else {
      icon = 'fa-solid fa-play';
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-100'>
            <div className='row stop-watch' onClick={this.resetHandler}>
              <h1>{this.state.elapsedTime}</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-100'>
            <span className={icon} onClick={this.clickHandler}></span>
          </div>
        </div>
      </div>
    );
  }
}
