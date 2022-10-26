import React from 'react';

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  openDrawer() {
    this.setState({ drawerOpen: true });
  }

  closeDrawer() {
    this.setState({ drawerOpen: false });
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
      <div>
        <span className='fas fa-bars' onClick={this.openDrawer}></span>
        <div className={overlay} onClick={this.closeDrawer}>
          <div className={drawer}>
            <h3>Menu</h3>
            <a href="#" onClick={this.closeDrawer}>About</a>
            <a href="#" onClick={this.closeDrawer}>Get Started</a>
            <a href="#" onClick={this.closeDrawer}>Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}
