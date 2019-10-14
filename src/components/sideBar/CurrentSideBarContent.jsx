import React from 'react';

const CurrentSideBarContent = props => {
  const { currentPageTitle } = props;
  return <h2>Options relating to {currentPageTitle}</h2>;
};

export default CurrentSideBarContent;
