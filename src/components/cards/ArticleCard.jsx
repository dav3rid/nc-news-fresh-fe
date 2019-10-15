import React, { Component } from 'react';
import { Box, Button } from 'grommet';
import {
  Announce,
  AddCircle,
  Dislike,
  Like,
  SubtractCircle
} from 'grommet-icons';

class ArticleCard extends Component {
  state = {
    currentHover: 0,
    currentClicked: 0
  };
  render() {
    const {
      article: {
        article_id,
        author,
        body,
        comment_count,
        title,
        topic,
        postTimeDifference,
        votes
      }
    } = this.props;
    const { currentHover, currentClicked } = this.state;
    return (
      // MAIN CARD BOX
      <Box
        round={{ size: 'small', corner: 'top-left' }}
        pad='small'
        direction='row'
        border={{ color: 'darkred', size: 'medium' }}
        background={article_id === currentHover ? 'dark-3' : 'light-4'}
        width='large'
        onMouseEnter={() => this.handleMouseEnter(article_id)}
        onMouseLeave={this.handleMouseLeave}
      >
        {/* AUTHOR BOX */}
        <Box
          round={{ size: 'small', corner: 'top-left' }}
          width={{ min: 'small' }}
          align='center'
          justify='center'
          pad='small'
          background='rgb(44, 43, 43)'
        >
          {article_id === currentHover ? (
            currentClicked !== 0 ? (
              <>
                <Button
                  gap='small'
                  label='comment'
                  icon={<Announce />}
                  onClick={() => {
                    console.log('comment button');
                  }}
                />
                <br />
                <Button
                  gap='small'
                  label='Vote!'
                  icon={<Like />}
                  onClick={() => this.handleVote(article_id, 1)}
                />
                <br />
                <Button
                  gap='small'
                  label='Nope'
                  icon={<Dislike />}
                  onClick={() => this.handleVote(article_id, -1)}
                />
                <br />
                <Button
                  label='Less'
                  icon={<SubtractCircle />}
                  onClick={() => this.handleClick(article_id)}
                />
              </>
            ) : (
              <Button
                label='More'
                icon={<AddCircle />}
                onClick={() => this.handleClick(article_id)}
              />
            )
          ) : (
            author
          )}
        </Box>
        <Box
          width='stretch'
          align='center'
          justify='center'
          pad='small'
          background='light-5'
        >
          <strong>{title}</strong>
          <br />
          <span>
            <strong>topic</strong> {topic}
            {'  |  '}
            <strong>votes</strong> {votes}
            {'  |  '}
            <strong>comments</strong> {comment_count}
            {currentClicked !== 0 ? <p>{body}</p> : <br />}
            <strong>posted</strong> {postTimeDifference} ago
            {currentClicked !== 0 && (
              <p>
                <strong>by</strong> {author}
              </p>
            )}
          </span>
        </Box>
      </Box>
    );
  }

  // HANDLES HIGHLIGHTING OF CURRENTLY HOVERED ARTICLE CARD
  handleMouseEnter = article_id => {
    this.setState({ currentHover: article_id });
  };
  handleMouseLeave = () => {
    this.setState({ currentHover: 0 });
  };

  handleClick = article_id => {
    this.setState(currentState => {
      return article_id !== currentState.currentClicked
        ? { currentClicked: article_id }
        : { currentClicked: 0, currentHover: 0 };
    });
  };
}

export default ArticleCard;
