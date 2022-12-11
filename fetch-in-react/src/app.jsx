import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       users: data,
  //       isLoading: false
  //     }))
  //     .catch(err => console.error(err));
  // }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) throw Error(response.statusText);
      const data = await response.json();
      this.setState({
        users: data,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
