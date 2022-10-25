import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let switchClass = 'switch switch-off';
    let sliderClass = 'slider off';

    if (this.state.isClicked) {
      switchClass = 'switch switch-on';
      sliderClass = 'slider slider-on';
    } else {
      switchClass = 'switch switch-off';
      sliderClass = 'slider slider-off';
    }

    return (
      <div className='wrapper'>
        <span className={ switchClass } onClick={ this.handleClick }>
          <span className={ sliderClass }></span>
        </span>
      </div>
    );
  }
}
