import React from 'react';
import { Box, Heading } from 'grommet';

const Footer = props => {
  const { currentUser } = props;
  return (
    <Box
      tag='footer'
      direction='row'
      align='center'
      justify='between'
      background='dark-2'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    >
      <Heading level='3' margin='none'>
        NC News
      </Heading>
      <Heading level='3' margin='none'>
        You are logged in as {currentUser}
      </Heading>
      <Heading level='3' margin='none'>
        Copyright Dave LTD.
      </Heading>
    </Box>
  );
};

export default Footer;
