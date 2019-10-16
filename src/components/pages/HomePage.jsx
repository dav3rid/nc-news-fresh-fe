import React, { Component } from 'react';
import { Heading } from 'grommet';

class HomePage extends Component {
  render() {
    return <Heading>Welcome {this.props.currentUser}!</Heading>;
  }
  componentDidMount() {
    this.props.changeCurrentPageTitle('Home');
  }
}

export default HomePage;
