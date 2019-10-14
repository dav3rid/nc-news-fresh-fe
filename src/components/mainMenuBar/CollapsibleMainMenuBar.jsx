import React from 'react';
import { Box, Collapsible } from 'grommet';
import MainMenuBarContent from './MainMenuBarContent';

const CollapsibleMainMenuBar = props => {
  const { showMenuBar } = props;
  return (
    <Collapsible direction='vertical' open={showMenuBar}>
      <Box
        flex
        background='dark-2'
        elevation='small'
        align='center'
        justify='center'
      >
        <MainMenuBarContent />
      </Box>
    </Collapsible>
  );
};

export default CollapsibleMainMenuBar;
