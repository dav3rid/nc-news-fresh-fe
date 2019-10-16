import React from 'react';
import { Heading } from 'grommet';
import { navigate } from '@reach/router';

const UserCard = props => {
  const { user, toggleUserLogin } = props;
  return (
    <div
      onClick={() => {
        toggleUserLogin(user.username);
        navigate('/');
      }}
    >
      <Heading level='3' margin='none'>
        {user.username}
      </Heading>
      <img src={user.avatar_url} alt='user avatar' width='300px' />
    </div>
  );
};

export default UserCard;
