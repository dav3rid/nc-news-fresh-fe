import React from 'react';
import { Button, Heading } from 'grommet';
import { Close, Menu } from 'grommet-icons';

const TitleBarContent = props => {
  const {
    showMainMenuBar,
    toggleMainMenuBar,
    showSideBar,
    toggleSideBar
  } = props;
  return (
    <>
      <Button
        icon={
          !showSideBar ? (
            <Menu onClick={toggleSideBar} />
          ) : (
            <Close onClick={toggleSideBar} />
          )
        }
      />
      <Button
        icon={
          !showMainMenuBar ? (
            <Menu onClick={toggleMainMenuBar} />
          ) : (
            <Close onClick={toggleMainMenuBar} />
          )
        }
      />
      <Heading level='3' margin='none'>
        NC News
      </Heading>
    </>
  );
};

export default TitleBarContent;
