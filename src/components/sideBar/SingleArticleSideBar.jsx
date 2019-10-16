import React from 'react';
import NavLogin from '../navButtons/NavLogin';

const SingleArticleSideBar = props => {
  const { currentUser } = props;
  if (currentUser === 'Guest') {
    return (
      <>
        <h2>Login to have your say!</h2>
        <br />
        <NavLogin currentUser={currentUser} />
      </>
    );
  }
};

export default SingleArticleSideBar;
