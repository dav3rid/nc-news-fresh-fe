import React from 'react';
import { Button } from 'grommet';
import { History } from 'grommet-icons';

const ArticlesSideBar = props => {
  const { axiosParams, setAxiosParams, resetAxiosParams } = props;
  return (
    <Button
      label='Reset Filters'
      icon={<History />}
      onClick={resetAxiosParams}
    />
  );
};

export default ArticlesSideBar;
