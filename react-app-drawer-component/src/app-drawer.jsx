import React from 'react';

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    let overlay;
    let drawer;

    if (this.state.drawerOpen) {
      overlay = 'overlay-open';
      drawer = 'drawer-open';
    } else {
      overlay = 'overlay-closed';
      drawer = 'drawer-closed';
    }

    return (
      <div className={overlay}>
        <div className={drawer}>
          <h3>Menu</h3>
          <a href="#" onClick={this.handleClick}>About</a>
          <a href="#" onClick={this.handleClick}>Get Started</a>
          <a href="#" onClick={this.handleClick}>Sign Up</a>
        </div>
      </div>
    );
  }
}
