import React from 'react';
import { Box } from 'grommet';

const Footer = props => (
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
  />
);

export default Footer;
