import React from 'react';

export class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      elapsedTime: 0,
      timerId: null
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  resetStopwatch() {
    if (!this.state.timerOn) {
      this.setState({ elapsedTime: 0 });
    }
  }

  toggleTimer() {
    this.setState({ timerOn: !this.state.timerOn });

    if (!this.state.timerId) {
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

    if (this.state.timerOn) {
      icon = 'fa-solid fa-pause';
    } else {
      icon = 'fa-solid fa-play';
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-100'>
            <div className='row stop-watch' onClick={this.resetStopwatch}>
              <h1>{this.state.elapsedTime}</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-100'>
            <span className={icon} onClick={this.toggleTimer}></span>
          </div>
        </div>
      </div>
    );
  }
}
