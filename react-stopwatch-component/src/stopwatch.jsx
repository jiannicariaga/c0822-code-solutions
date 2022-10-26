import React from 'react';

export class StopWatch extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-100'>
            <div className='row stop-watch'>
              <h1>0</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-100 '>
            <span className="fa-solid fa-play"></span>
          </div>
        </div>
      </div>
    );
  }
}
