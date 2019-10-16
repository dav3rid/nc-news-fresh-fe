import React from 'react';
import ArticlesSideBar from './ArticlesSideBar';
import SingleArticleSideBar from './SingleArticleSideBar';

const CurrentSideBarContent = props => {
  const {
    currentPageTitle,
    currentUser,
    setAxiosParams,
    resetAxiosParams,
    triggerRender
  } = props;
  if (currentPageTitle === 'Articles') {
    return (
      <ArticlesSideBar
        setAxiosParams={setAxiosParams}
        resetAxiosParams={resetAxiosParams}
      />
    );
  } else if (currentPageTitle === 'Article') {
    return (
      <SingleArticleSideBar
        currentUser={currentUser}
        triggerRender={triggerRender}
      />
    );
  } else {
    return <></>;
  }
};

export default CurrentSideBarContent;
