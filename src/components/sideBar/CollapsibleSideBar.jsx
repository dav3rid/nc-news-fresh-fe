import React from 'react';
import { Box, Collapsible } from 'grommet';
import CurrentSideBarContent from './CurrentSideBarContent';

const CollapsibleSideBar = props => {
  const {
    showSideBar,
    currentPageTitle,
    setAxiosParams,
    resetAxiosParams
  } = props;
  return (
    <Collapsible direction='horizontal' open={showSideBar}>
      <Box
        flex
        width='medium'
        background='dark-1'
        elevation='medium'
        align='center'
        justify='center'
      >
        <CurrentSideBarContent
          currentPageTitle={currentPageTitle}
          setAxiosParams={setAxiosParams}
          resetAxiosParams={resetAxiosParams}
        />
      </Box>
    </Collapsible>
  );
};

export default CollapsibleSideBar;
