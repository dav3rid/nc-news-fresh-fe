import React from 'react';
import { Box, Button, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import MainMenuBarContent from './MainMenuBarContent';

const LayeredMainMenuBar = props => {
  const { hideMenuBar } = props;
  return (
    <Layer>
      <Box
        background='light-2'
        tag='header'
        justify='end'
        align='center'
        direction='row'
      >
        <Button icon={<FormClose />} onClick={hideMenuBar} />
      </Box>
      <Box fill background='light-2' align='center' justify='center'>
        <MainMenuBarContent />
      </Box>
    </Layer>
  );
};

export default LayeredMainMenuBar;
