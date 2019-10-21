import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Close, Menu } from 'grommet-icons';

const TitleBar = props => {
  const {
    showMainMenuBar,
    toggleMainMenuBar,
    showSideBar,
    toggleSideBar,
    currentPageTitle
  } = props;
  return (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    >
      {currentPageTitle.includes('Article') ? (
        <Button
          icon={!showSideBar ? <Menu /> : <Close />}
          label={
            !showSideBar
              ? currentPageTitle === 'Articles'
                ? 'Filters'
                : 'Social'
              : 'Close'
          }
          onClick={toggleSideBar}
        />
      ) : (
        <p></p>
      )}

      <Button
        icon={!showMainMenuBar ? <Menu /> : <Close />}
        label={!showMainMenuBar ? 'Pages' : 'Close'}
        onClick={toggleMainMenuBar}
      />
      <Heading level='3' margin='none'>
        {currentPageTitle}
      </Heading>
    </Box>
  );
};

export default TitleBar;
