import React from 'react';
import { Button } from 'grommet';
import {
  Article,
  AddCircle,
  Dislike,
  Like,
  SubtractCircle,
  Trash
} from 'grommet-icons';

const iconRef = {
  Article: <Article />,
  AddCircle: <AddCircle />,
  Dislike: <Dislike />,
  Like: <Like />,
  SubtractCircle: <SubtractCircle />,
  Trash: <Trash />
};

const CustomButton = ({ func, label, icon }) => {
  return <Button label={label} icon={iconRef[icon]} onClick={func} />;
};

export default CustomButton;
