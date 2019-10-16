import React from 'react';
import NavHome from '../../components/navButtons/NavHome';
import NavTopics from '../../components/navButtons/NavTopics';
import NavArticles from '../../components/navButtons/NavArticles';
import NavUsers from '../../components/navButtons/NavUsers';
import NavLogin from '../../components/navButtons/NavLogin';

const MainMenuBarContent = props => {
  const { currentUser, toggleUserLogin } = props;
  return (
    <>
      <NavHome />
      <NavTopics />
      <NavArticles />
      <NavUsers />
      <NavLogin currentUser={currentUser} toggleUserLogin={toggleUserLogin} />
    </>
  );
};

export default MainMenuBarContent;
