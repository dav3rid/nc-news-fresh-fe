import React from 'react';
import { Heading } from 'grommet';

const FooterContent = props => {
  const { currentUser } = props;
  return (
    <>
      <Heading level='3' margin='none'>
        NC News
      </Heading>
      <Heading level='3' margin='none'>
        You are logged in as {currentUser}
      </Heading>
      <Heading level='3' margin='none'>
        Copyright Dave LTD.
      </Heading>
    </>
  );
};

export default FooterContent;
