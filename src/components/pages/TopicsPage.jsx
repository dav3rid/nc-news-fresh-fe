import React, { Component } from 'react';
import { Heading } from 'grommet';
import * as api from '../../utils/api';
import TopicsList from '../lists/TopicsList';

class TopicsPage extends Component {
  state = {
    topics: [],
    isLoaded: false
  };
  render() {
    const { setAxiosParams } = this.props;
    const { topics, isLoaded } = this.state;
    return !isLoaded ? (
      <Heading level='3' margin='none'>
        Loading Topics...
      </Heading>
    ) : (
      <TopicsList topics={topics} setAxiosParams={setAxiosParams} />
    );
  }
  componentDidMount = async () => {
    this.props.changeCurrentPageTitle('Topics');
    const topics = await api.getTopics();
    this.setState({ topics, isLoaded: true });
  };
}

export default TopicsPage;
