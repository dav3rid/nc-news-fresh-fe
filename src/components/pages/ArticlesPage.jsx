import React, { Component } from 'react';
import { Heading } from 'grommet';

class ArticlesPage extends Component {
  render() {
    return <Heading>Welcome to the Articles Page, bask in its glory!</Heading>;
  }
  componentDidMount() {
    this.props.changeCurrentPageTitle('Articles');
  }
}

export default ArticlesPage;
