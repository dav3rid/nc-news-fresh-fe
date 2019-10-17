import React, { Component } from 'react';
import { Box } from 'grommet';
import * as api from '../../utils/api';
import CustomButton from '../CustomButton';

class CommentCard extends Component {
  state = {
    currentHover: 0,
    currentClicked: 0,
    isDeleted: false,
    voted: 0
  };
  render() {
    const {
      comment: { comment_id, author, body, postTimeDifference, votes },
      currentUser
    } = this.props;
    const { currentHover, currentClicked, isDeleted, voted } = this.state;
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
          {!isDeleted && (
            <>
              {comment_id === currentHover ? (
                currentClicked !== 0 ? (
                  <>
                    {currentUser !== 'Guest' && (
                      <>
                        {voted < 1 && (
                          <>
                            <CustomButton
                              label='Vote!'
                              icon='Like'
                              func={() => this.handleVote(1)}
                            />
                            <br />
                          </>
                        )}

                        {voted > -1 && (
                          <>
                            <CustomButton
                              label='Nope'
                              icon='Dislike'
                              func={() => this.handleVote(-1)}
                            />
                            <br />
                          </>
                        )}

                        {author === currentUser && (
                          <>
                            <CustomButton
                              label='Delete'
                              icon='Trash'
                              func={this.handleDeleteComment}
                            />
                            <br />
                          </>
                        )}
                      </>
                    )}

                    <CustomButton
                      label='Less'
                      icon='SubtractCircle'
                      func={() => this.handleClick(comment_id)}
                    />
                  </>
                ) : (
                  <CustomButton
                    label='More'
                    icon='AddCircle'
                    func={() => this.handleClick(comment_id)}
                  />
                )
              ) : (
                author
              )}
            </>
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
            {!isDeleted ? (
              <>
                <strong>votes</strong> {votes + voted}
                {currentClicked !== 0 ? <p>{body}</p> : <br />}
                <strong>posted</strong> {postTimeDifference} ago
                {currentClicked !== 0 && (
                  <p>
                    <strong>by</strong> {author}
                  </p>
                )}
              </>
            ) : (
              <h2>Comment Deleted!</h2>
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

  // HANDLE COMMENT VOTING
  handleVote = vote => {
    const { comment_id } = this.props.comment;
    api.patchComment(comment_id, { inc_votes: vote });
    this.setState(currentState => {
      return { voted: currentState.voted + vote };
    });
  };

  // DELETING COMMENT
  handleDeleteComment = () => {
    const { comment_id } = this.props.comment;
    api.deleteComment(comment_id);
    this.setState({ isDeleted: true });
  };
}

export default CommentCard;
