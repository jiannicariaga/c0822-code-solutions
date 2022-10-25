import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    let className = 'moo';

    if (this.state.count >= 3 && this.state.count < 6) {
      className = 'rare';
    } else if (this.state.count >= 6 && this.state.count < 9) {
      className = 'medium-rare';
    } else if (this.state.count >= 9 && this.state.count < 12) {
      className = 'medium';
    } else if (this.state.count >= 12 && this.state.count < 15) {
      className = 'medium-well';
    } else if (this.state.count >= 15 && this.state.count < 18) {
      className = 'well-done';
    } else if (this.state.count >= 18) {
      className = 'congrats';
    }

    return (
      <button className={ className } onClick={ this.handleClick }>Hot Button</button>
    );
  }
}
