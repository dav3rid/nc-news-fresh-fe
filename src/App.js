import React, { Component } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { theme } from './styles/theme';
import TitleBar from './components/titleBar/TitleBar';
import TitleBarContent from './components/titleBar/TitleBarContent';
import AppBody from './components/AppBody';
import CollapsibleMainMenuBar from './components/mainMenuBar/CollapsibleMainMenuBar';
import LayeredMainMenuBar from './components/mainMenuBar/LayeredMainMenuBar';

class App extends Component {
  state = {
    showMenuBar: false
  };
  render() {
    const { showMenuBar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <TitleBar>
                <TitleBarContent
                  showMenuBar={showMenuBar}
                  toggleMenuBar={this.toggleMenuBar}
                />
              </TitleBar>
              <Box direction='column' flex overflow={{ vertical: 'hidden' }}>
                {!showMenuBar || size !== 'small' ? (
                  <CollapsibleMainMenuBar showMenuBar={showMenuBar} />
                ) : (
                  <LayeredMainMenuBar hideMenuBar={this.hideMenuBar} />
                )}
                <AppBody />
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }

  toggleMenuBar = () => {
    this.setState(currentState => {
      return { showMenuBar: !currentState.showMenuBar };
    });
  };
  hideMenuBar = () => {
    this.setState({ showMenuBar: false });
  };
}

export default App;
