import React from 'react';
import { Box, Button, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import CurrentSideBarContent from './CurrentSideBarContent';

const LayeredSideBar = props => {
  const {
    currentPageTitle,
    currentUser,
    setAxiosParams,
    resetAxiosParams,
    hideSideBar
  } = props;
  return (
    <Layer>
      <Box
        background='light-2'
        tag='header'
        justify='end'
        align='center'
        direction='row'
      >
        <Button icon={<FormClose />} onClick={hideSideBar} />
      </Box>
      <Box fill background='light-2' align='center' justify='center'>
        <CurrentSideBarContent
          currentPageTitle={currentPageTitle}
          currentUser={currentUser}
          setAxiosParams={setAxiosParams}
          resetAxiosParams={resetAxiosParams}
        />
      </Box>
    </Layer>
  );
};

export default LayeredSideBar;
