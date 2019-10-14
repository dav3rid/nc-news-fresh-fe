import React from 'react';
import { Box, Collapsible } from 'grommet';
// import MainMenuBarContent from './MainMenuBarContent';

const CollapsibleMainMenuBar = props => {
  const { showSideBar } = props;
  return (
    <Collapsible direction='horizontal' open={showSideBar}>
      <Box
        flex
        width='medium'
        background='dark-1'
        elevation='small'
        align='center'
        justify='center'
      >
        {/* <MainMenuBarContent /> */}
        hello
      </Box>
    </Collapsible>
  );
};

export default CollapsibleMainMenuBar;
