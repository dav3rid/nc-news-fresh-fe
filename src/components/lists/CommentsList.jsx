import React, { Component } from 'react';
import * as api from '../../utils/api';
import * as utils from '../../utils/utils';
import CommentCard from '../cards/CommentCard';

class CommentsList extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    const { currentUser } = this.props;
    const formattedComments = utils.formatComments(comments);
    return formattedComments.map(comment => {
      return (
        <div key={comment.comment_id}>
          <br />
          <CommentCard comment={comment} currentUser={currentUser} />
        </div>
      );
    });
  }

  componentDidMount = async () => {
    const { article_id } = this.props;
    const comments = await api.getComments(article_id);
    this.setState({ comments });
  };
}

export default CommentsList;
