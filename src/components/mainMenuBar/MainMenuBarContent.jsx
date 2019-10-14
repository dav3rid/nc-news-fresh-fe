import React from 'react';
import NavHome from '../../components/navButtons/NavHome';
import NavTopics from '../../components/navButtons/NavTopics';
import NavArticles from '../../components/navButtons/NavArticles';
import NavUsers from '../../components/navButtons/NavUsers';
import NavLogin from '../../components/navButtons/NavLogin';

const MainMenuBarContent = () => {
  return (
    <>
      <NavHome />
      <NavTopics />
      <NavArticles />
      <NavUsers />
      <NavLogin />
    </>
  );
};

export default MainMenuBarContent;
