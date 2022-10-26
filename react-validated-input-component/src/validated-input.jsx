import React from 'react';

export class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideErrorMessage: false,
      errorMessage: 'A password is required.',
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });

    if (!event.target.value) {
      this.setState({
        hideErrorMessage: false,
        errorMessage: 'A password is required.'
      });
    } else if (event.target.value.length < 8) {
      this.setState({
        hideErrorMessage: false,
        errorMessage: 'Your password is too short.'
      });
    } else {
      this.setState({
        hideErrorMessage: true
      });
    }
  }

  render() {
    let icon;

    if (this.state.hideErrorMessage) {
      icon = 'fas fa-check green';
    } else {
      icon = 'fas fa-xmark red';
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-100'>
            <label>Password</label>
          </div>
        </div>
        <div className='row align-center'>
          <div className='col-80'>
            <input type='password' onChange={this.handlePasswordChange} value={this.state.password}></input>
          </div>
          <div className='col-20'>
            <span className={icon}></span>
          </div>
        </div>
        <div className='row'>
          <div className='col-100'>
            <p hidden={this.state.hideErrorMessage}>{this.state.errorMessage}</p>
          </div>
        </div>
      </div>
    );
  }
}
