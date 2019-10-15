import React from 'react';
import TopicCard from '../cards/TopicCard';

const TopicsList = props => {
  const { topics, setAxiosParams } = props;
  return topics.map(topic => {
    return (
      <div key={topic.slug}>
        <br />
        <TopicCard topic={topic} setAxiosParams={setAxiosParams} />
      </div>
    );
  });
};

export default TopicsList;
