import React, { Component } from 'react';
import { Button, Form, FormField, TextArea } from 'grommet';
import { Announce, Like, Dislike } from 'grommet-icons';
import NavLogin from '../navButtons/NavLogin';
import * as api from '../../utils/api';

class SingleArticleSideBar extends Component {
  state = {
    showCommentForm: false,
    commentSubmitted: false,
    voted: 0
  };
  render() {
    const { currentUser } = this.props;
    const { showCommentForm, commentSubmitted, voted } = this.state;

    if (currentUser === 'Guest') {
      return (
        <>
          <h2>Login to have your say!</h2>
          <br />
          <NavLogin currentUser={currentUser} />
        </>
      );
    } else {
      return (
        <>
          <h2>Have your say on this article!</h2>
          <br />
          <Button
            gap='small'
            label='comment'
            icon={<Announce />}
            onClick={this.toggleCommentForm}
          />
          <br />
          {showCommentForm && (
            <>
              <Form onSubmit={this.handleSubmitComment}>
                <FormField label='comment'>
                  <TextArea placeholder='type here' />
                </FormField>
                <Button type='submit' primary label='Post' />
              </Form>
              <br />
            </>
          )}
          {commentSubmitted && (
            <>
              <h2>Comment posted!</h2>
              <br />
            </>
          )}
          {voted < 1 && (
            <>
              <Button
                gap='small'
                label='Vote!'
                icon={<Like />}
                onClick={() => this.handleVote(1)}
              />
              <br />
            </>
          )}
          {voted !== 0 && (
            <>
              <h2>Vote Submitted!</h2>
              <br />
            </>
          )}
          {voted > -1 && (
            <Button
              gap='small'
              label='Nope'
              icon={<Dislike />}
              onClick={() => this.handleVote(-1)}
            />
          )}
        </>
      );
    }
  }

  // TOGGLES VISIBILITY OF FORM TO ADD COMMENT
  toggleCommentForm = () => {
    this.setState(currentState => {
      return { showCommentForm: !currentState.showCommentForm };
    });
  };

  handleSubmitComment = async event => {
    // INSTEAD OF MOVING CURRENT ARTICLE TO APP LEVEL STATE
    const article_id = +window.location.pathname.split('/').pop();
    const { currentUser } = this.props;
    const body = event.target[0].value;
    if (body.length > 0) {
      await api.postComment(currentUser, body, article_id);
      this.setState({ showCommentForm: false, commentSubmitted: true });
    }
  };

  // HANDLE ARTICLE VOTING
  handleVote = vote => {
    const article_id = +window.location.pathname.split('/').pop();
    api.patchArticle(article_id, { inc_votes: vote });
    this.setState(currentState => {
      return { voted: currentState.voted + vote };
    });
  };
}

export default SingleArticleSideBar;
