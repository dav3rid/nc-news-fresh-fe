import React from 'react';
import { Button, Heading } from 'grommet';
import { Close, Menu } from 'grommet-icons';

const TitleBarContent = props => {
  const { showMenuBar, toggleMenuBar } = props;
  return (
    <>
      <Button
        icon={
          !showMenuBar ? (
            <Menu onClick={toggleMenuBar} />
          ) : (
            <Close onClick={toggleMenuBar} />
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
