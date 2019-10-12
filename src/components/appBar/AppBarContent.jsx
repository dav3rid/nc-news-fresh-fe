import React from 'react';
import { Button, Heading } from 'grommet';
import { Close, Menu } from 'grommet-icons';

const AppBarContent = props => {
  const { showSidebar, toggleSidebar } = props;
  return (
    <>
      <Button
        icon={
          !showSidebar ? (
            <Menu onClick={toggleSidebar} />
          ) : (
            <Close onClick={toggleSidebar} />
          )
        }
      />
      <Heading level='3' margin='none'>
        NC News
      </Heading>
    </>
  );
};

export default AppBarContent;
