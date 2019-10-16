import React, { Component } from 'react';
import { Box, Button } from 'grommet';
import { AddCircle, SubtractCircle } from 'grommet-icons';

class CommentCard extends Component {
  state = {
    currentHover: 0,
    currentClicked: 0
  };
  render() {
    const {
      comment: {
        article_id,
        comment_id,
        author,
        body,
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
        background={comment_id === currentHover ? 'dark-3' : 'light-4'}
        width={{ max: 'large' }}
        onMouseEnter={() => this.handleMouseEnter(comment_id)}
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
          {comment_id === currentHover ? (
            currentClicked !== 0 ? (
              <>
                <Button
                  label='Less'
                  icon={<SubtractCircle />}
                  onClick={() => this.handleClick(comment_id)}
                />
              </>
            ) : (
              <Button
                label='More'
                icon={<AddCircle />}
                onClick={() => this.handleClick(comment_id)}
              />
            )
          ) : (
            author
          )}
        </Box>
        <Box
          width='stretch'
          align='start'
          justify='center'
          pad='small'
          background='light-5'
        >
          <span>
            <strong>votes</strong> {votes}
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
  handleMouseEnter = comment_id => {
    this.setState({ currentHover: comment_id });
  };
  handleMouseLeave = () => {
    this.setState({ currentHover: 0 });
  };

  handleClick = comment_id => {
    this.setState(currentState => {
      return comment_id !== currentState.currentClicked
        ? { currentClicked: comment_id }
        : { currentClicked: 0, currentHover: 0 };
    });
  };
}

export default CommentCard;
