import React from 'react';
import { Box, Collapsible } from 'grommet';
import MainMenuBarContent from './MainMenuBarContent';

const CollapsibleMainMenuBar = props => {
  const { showMainMenuBar, currentUser, toggleUserLogin } = props;
  return (
    <Collapsible direction='vertical' open={showMainMenuBar}>
      <Box
        flex
        direction='row'
        background='dark-2'
        elevation='small'
        align='center'
        justify='around'
        pad='small'
      >
        <MainMenuBarContent
          currentUser={currentUser}
          toggleUserLogin={toggleUserLogin}
        />
      </Box>
    </Collapsible>
  );
};

export default CollapsibleMainMenuBar;
