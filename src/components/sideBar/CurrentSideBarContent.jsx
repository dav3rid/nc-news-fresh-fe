import React from 'react';
import ArticlesSideBar from './ArticlesSideBar';

const CurrentSideBarContent = props => {
  const {
    currentPageTitle,
    axiosParams,
    setAxiosParams,
    resetAxiosParams
  } = props;
  return currentPageTitle === 'Articles' ? (
    <ArticlesSideBar
      axiosParams={axiosParams}
      setAxiosParams={setAxiosParams}
      resetAxiosParams={resetAxiosParams}
    />
  ) : (
    <h2>Options relating to {currentPageTitle}</h2>
  );
};

export default CurrentSideBarContent;
