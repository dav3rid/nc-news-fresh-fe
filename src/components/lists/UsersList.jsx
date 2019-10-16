import React from 'react';
import UserCard from '../cards/UserCard';
import { Heading } from 'grommet';

const UsersList = props => {
  const { users, toggleUserLogin } = props;
  return (
    <>
      <Heading level='2' margin='none'>
        Select a user to log in
      </Heading>
      {users.map((user, ind) => {
        return (
          <div key={user + ind}>
            <br />
            <UserCard user={user} toggleUserLogin={toggleUserLogin} />
          </div>
        );
      })}
    </>
  );
};

export default UsersList;
