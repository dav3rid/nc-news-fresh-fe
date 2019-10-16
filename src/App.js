import React, { Component } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { theme } from './styles/theme';
import TitleBar from './components/titleBar/TitleBar';
import TitleBarContent from './components/titleBar/TitleBarContent';
import Footer from './components/footer/Footer';
import FooterContent from './components/footer/FooterContent';
import AppBody from './components/AppBody';
import CollapsibleMainMenuBar from './components/mainMenuBar/CollapsibleMainMenuBar';
import LayeredMainMenuBar from './components/mainMenuBar/LayeredMainMenuBar';
import CollapsibleSideBar from './components/sideBar/CollapsibleSideBar';

class App extends Component {
  state = {
    showMainMenuBar: false,
    showSideBar: false,
    currentPageTitle: 'Welcome!',
    currentUser: 'Guest',
    articlesParams: {
      sort_by: undefined,
      order: undefined,
      author: undefined,
      topic: undefined
    },
    commentsParams: { sort_by: undefined, order: undefined }
  };
  render() {
    const {
      showMainMenuBar,
      showSideBar,
      currentPageTitle,
      currentUser,
      articlesParams,
      commentsParams
    } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <TitleBar>
                <TitleBarContent
                  showMainMenuBar={showMainMenuBar}
                  toggleMainMenuBar={this.toggleMainMenuBar}
                  showSideBar={showSideBar}
                  toggleSideBar={this.toggleSideBar}
                  currentPageTitle={currentPageTitle}
                />
              </TitleBar>
              <Box direction='column' flex overflow={{ vertical: 'hidden' }}>
                {!showMainMenuBar || size !== 'small' ? (
                  <>
                    <CollapsibleMainMenuBar showMainMenuBar={showMainMenuBar} />
                  </>
                ) : (
                  <LayeredMainMenuBar hideMainMenuBar={this.hideMainMenuBar} />
                )}
                <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                  <CollapsibleSideBar
                    showSideBar={showSideBar}
                    currentPageTitle={currentPageTitle}
                    articlesParams={articlesParams}
                    setAxiosParams={this.setAxiosParams}
                    resetAxiosParams={this.resetAxiosParams}
                  />
                  <AppBody
                    currentPageTitle={currentPageTitle}
                    changeCurrentPageTitle={this.changeCurrentPageTitle}
                    articlesParams={articlesParams}
                    setAxiosParams={this.setAxiosParams}
                  />
                </Box>
              </Box>
              <Footer>
                <FooterContent currentUser={currentUser} />
              </Footer>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }

  // TOGGLING VISIBILITY FOR MAIN MENU BAR
  toggleMainMenuBar = () => {
    this.setState(currentState => {
      return { showMainMenuBar: !currentState.showMainMenuBar };
    });
  };
  hideMainMenuBar = () => {
    this.setState({ showMainMenuBar: false });
  };

  // TOGGLING VISIBILITY FOR SIDE BAR
  toggleSideBar = () => {
    this.setState(currentState => {
      return { showSideBar: !currentState.showSideBar };
    });
  };
  hideSideBar = () => {
    this.setState({ showSideBar: false });
  };

  // CHANGE PAGE TITLE
  changeCurrentPageTitle = currentPageTitle => {
    this.setState({ currentPageTitle });
  };

  // CHANGE PARAMS OBJECT HELD IN STATE TO BE PASSED TO ANY PAGE TO ADD TO AXIOS REQUEST
  setAxiosParams = (endpoint, param, value) => {
    this.setState(currentState => {
      if (endpoint === 'articles') {
        return {
          articlesParams: { ...currentState.articlesParams, [param]: value }
        };
      } else if (endpoint === 'comments') {
        return {
          commentsParams: { ...currentState.commentsParams, [param]: value }
        };
      }
    });
  };

  resetAxiosParams = () => {
    this.setState({
      articlesParams: {
        sort_by: undefined,
        order: undefined,
        author: undefined,
        topic: undefined
      }
    });
  };
}

export default App;
