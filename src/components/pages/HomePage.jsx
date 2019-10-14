import React, { Component } from 'react';
import { Heading } from 'grommet';

class HomePage extends Component {
  render() {
    return <Heading>Welcome to the Home Page, take it in!</Heading>;
  }
  componentDidMount() {
    this.props.changeCurrentPageTitle('Home');
  }
}

export default HomePage;
