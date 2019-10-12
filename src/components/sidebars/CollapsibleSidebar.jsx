import React from 'react';
import { Box, Collapsible } from 'grommet';
import SidebarContent from '../sidebars/SidebarContent';

const CollapsibleSidebar = props => {
  const { showSidebar } = props;
  return (
    <Collapsible direction='horizontal' open={showSidebar}>
      <Box
        flex
        width='medium'
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
      >
        <SidebarContent />
      </Box>
    </Collapsible>
  );
};

export default CollapsibleSidebar;
