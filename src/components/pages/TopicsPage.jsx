import React, { Component } from 'react';
import { Heading } from 'grommet';

class TopicsPage extends Component {
  render() {
    return <Heading>Welcome to the Topics Page, tremble at its might!</Heading>;
  }
  componentDidMount() {
    this.props.changeCurrentPageTitle('Topics');
  }
}

export default TopicsPage;
