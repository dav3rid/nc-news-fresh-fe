import React, { Component } from 'react';
import { Box, Button } from 'grommet';
import { navigate } from '@reach/router';
import { Article } from 'grommet-icons';

class TopicCard extends Component {
  state = {
    currentHover: ''
  };
  render() {
    const {
      topic: { slug, description },
      setAxiosParams
    } = this.props;
    const { currentHover } = this.state;
    return (
      // MAIN CARD BOX
      <Box
        round={{ size: 'small', corner: 'top-left' }}
        pad='small'
        direction='row'
        border={{ color: 'darkred', size: 'medium' }}
        background={slug === currentHover ? 'dark-3' : 'light-4'}
        width={{ max: 'large' }}
        onMouseEnter={() => this.handleMouseEnter(slug)}
        onMouseLeave={this.handleMouseLeave}
      >
        {/* SLUG BOX */}
        <Box
          round={{ size: 'small', corner: 'top-left' }}
          width={{ min: 'small' }}
          align='center'
          justify='center'
          pad='small'
          background='rgb(44, 43, 43)'
        >
          {slug === currentHover ? (
            <Button
              label='Articles'
              icon={<Article />}
              onClick={() => {
                setAxiosParams('articles', 'topic', slug);
                navigate('/articles');
              }}
            ></Button>
          ) : (
            slug
          )}
        </Box>
        <Box
          width='stretch'
          align='center'
          justify='center'
          pad='small'
          background='light-5'
        >
          <strong>{description}</strong>
        </Box>
      </Box>
    );
  }

  // HANDLES HIGHLIGHTING OF CURRENTLY HOVERED TOPIC CARD
  handleMouseEnter = slug => {
    this.setState({ currentHover: slug });
  };
  handleMouseLeave = () => {
    this.setState({ currentHover: '' });
  };

  // handleClick = slug => {
  //   this.setState(currentState => {
  //     return article_id !== currentState.currentClicked
  //       ? { currentClicked: article_id }
  //       : { currentClicked: 0, currentHover: 0 };
  //   });
  // };
}

export default TopicCard;
