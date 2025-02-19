import React from 'react';
import { Box, Button, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import MainMenuBarContent from './MainMenuBarContent';

const LayeredMainMenuBar = props => {
  const { hideMainMenuBar, currentUser, toggleUserLogin } = props;
  return (
    <Layer>
      <Box
        background='light-2'
        tag='header'
        justify='end'
        align='center'
        direction='row'
      >
        <Button icon={<FormClose />} onClick={hideMainMenuBar} />
      </Box>
      <Box fill background='light-2' align='center' justify='center'>
        <MainMenuBarContent
          currentUser={currentUser}
          toggleUserLogin={toggleUserLogin}
        />
      </Box>
    </Layer>
  );
};

export default LayeredMainMenuBar;
