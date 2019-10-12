import React from 'react';
import { Box, Button, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import SidebarContent from './SidebarContent';

const LayeredSidebar = props => {
  const { hideSidebar } = props;
  return (
    <Layer>
      <Box
        background='light-2'
        tag='header'
        justify='end'
        align='center'
        direction='row'
      >
        <Button icon={<FormClose />} onClick={hideSidebar} />
      </Box>
      <Box fill background='light-2' align='center' justify='center'>
        <SidebarContent />
      </Box>
    </Layer>
  );
};

export default LayeredSidebar;
