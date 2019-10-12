import React, { Component } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { theme } from './styles/theme';
import AppBar from './components/appBar/AppBar';
import AppBarContent from './components/appBar/AppBarContent';
import AppBody from './components/AppBody';
import CollapsibleSidebar from './components/sidebar/CollapsibleSidebar';
import LayeredSidebar from './components/sidebar/LayeredSidebar';

class App extends Component {
  state = {
    showSidebar: false
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <AppBarContent
                  showSidebar={showSidebar}
                  toggleSidebar={this.toggleSidebar}
                />
              </AppBar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                {!showSidebar || size !== 'small' ? (
                  <CollapsibleSidebar showSidebar={showSidebar} />
                ) : (
                  <LayeredSidebar hideSidebar={this.hideSidebar} />
                )}
                <AppBody />
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }

  toggleSidebar = () => {
    this.setState(currentState => {
      return { showSidebar: !currentState.showSidebar };
    });
  };
  hideSidebar = () => {
    this.setState({ showSidebar: false });
  };
}

export default App;
