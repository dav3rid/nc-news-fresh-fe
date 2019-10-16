import React from 'react';
import { Button, Heading } from 'grommet';
import { Close, Menu } from 'grommet-icons';

const TitleBarContent = props => {
  const {
    showMainMenuBar,
    toggleMainMenuBar,
    showSideBar,
    toggleSideBar,
    currentPageTitle
  } = props;
  return (
    <>
      {currentPageTitle.includes('Article') ? (
        <Button
          icon={!showSideBar ? <Menu /> : <Close />}
          label={
            !showSideBar
              ? currentPageTitle === 'Articles'
                ? 'Filters'
                : 'Social'
              : 'Close'
          }
          onClick={toggleSideBar}
        />
      ) : (
        <p></p>
      )}

      <Button
        icon={!showMainMenuBar ? <Menu /> : <Close />}
        label={!showMainMenuBar ? 'Pages' : 'Close'}
        onClick={toggleMainMenuBar}
      />
      <Heading level='3' margin='none'>
        {currentPageTitle}
      </Heading>
    </>
  );
};

export default TitleBarContent;
