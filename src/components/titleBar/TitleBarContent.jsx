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
      <Button
        icon={!showSideBar ? <Menu /> : <Close />}
        label={!showSideBar ? 'More' : 'Less'}
        onClick={toggleSideBar}
      />
      <Button
        icon={!showMainMenuBar ? <Menu /> : <Close />}
        label={!showMainMenuBar ? 'Where To?' : 'Less'}
        onClick={toggleMainMenuBar}
      />
      <Heading level='3' margin='none'>
        {currentPageTitle}
      </Heading>
    </>
  );
};

export default TitleBarContent;
