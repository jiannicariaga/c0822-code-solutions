import React from 'react';

export class ValidatedInput extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-100'>
            <label>Password</label>
          </div>
        </div>
        <div className='row align-center'>
          <div className='col-80'>
            <input type='password'></input>
          </div>
          <div className='col-20'>
            <span className='fas fa-xmark'></span>
          </div>
        </div>
        <div className='row'>
          <div className='col-100'>
            <p>A password is required.</p>
          </div>
        </div>
      </div>
    );
  }
}
