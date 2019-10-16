import React from 'react';
import { Button, Heading } from 'grommet';
import { History } from 'grommet-icons';

const ArticlesSideBar = props => {
  const { setAxiosParams, resetAxiosParams } = props;
  return (
    <>
      <Heading level='3' margin='none'>
        Filter Articles
      </Heading>
      <br />
      <Button
        label='Reset Filters'
        icon={<History />}
        onClick={resetAxiosParams}
      />
      <br />
      <Button
        label='Newest'
        onClick={() => {
          setAxiosParams('articles', 'sort_by', 'created_at');
          setAxiosParams('articles', 'order', 'desc');
        }}
      />
      <br />
      <Button
        label='Oldest'
        onClick={() => {
          setAxiosParams('articles', 'sort_by', 'created_at');
          setAxiosParams('articles', 'order', 'asc');
        }}
      />
      <br />
      <Button
        label='Most Comments'
        onClick={() => {
          setAxiosParams('articles', 'sort_by', 'comment_count');
          setAxiosParams('articles', 'order', 'desc');
        }}
      />
      <br />
      <Button
        label='Fewest Comments'
        onClick={() => {
          setAxiosParams('articles', 'sort_by', 'comment_count');
          setAxiosParams('articles', 'order', 'asc');
        }}
      />
      <br />
      <Button
        label='Most Votes'
        onClick={() => {
          setAxiosParams('articles', 'sort_by', 'votes');
          setAxiosParams('articles', 'order', 'desc');
        }}
      />
      <br />
      <Button
        label='Fewest Votes'
        onClick={() => {
          setAxiosParams('articles', 'sort_by', 'votes');
          setAxiosParams('articles', 'order', 'asc');
        }}
      />
    </>
  );
};

export default ArticlesSideBar;
