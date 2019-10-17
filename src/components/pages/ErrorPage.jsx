import React from 'react';
import { Heading } from 'grommet';

const ErrorPage = props => {
  return (
    <>
      <Heading>Where do you think you're going?</Heading>
      <br />
      {props.errMsg ? (
        <Heading>{props.errMsg}</Heading>
      ) : (
        <Heading>Page not found...</Heading>
      )}
    </>
  );
};

export default ErrorPage;
