import React from 'react';
import { Box, Collapsible } from 'grommet';
import MenuBarContent from './MenuBarContent';

const CollapsibleMenuBar = props => {
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
        <MenuBarContent />
      </Box>
    </Collapsible>
  );
};

export default CollapsibleMenuBar;
