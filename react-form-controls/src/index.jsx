import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <label>
          Username
          <input type='text'></input>
        </label>

        <label>
          Password
          <input type='password'></input>
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
