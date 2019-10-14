import React, { Component } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { theme } from './styles/theme';
import TitleBar from './components/titleBar/TitleBar';
import TitleBarContent from './components/titleBar/TitleBarContent';
import AppBody from './components/AppBody';
import CollapsibleMenuBar from './components/menuBar/CollapsibleMenuBar';
import LayeredMenuBar from './components/menuBar/LayeredMenuBar';

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
                  <CollapsibleMenuBar showMenuBar={showMenuBar} />
                ) : (
                  <LayeredMenuBar hideMenuBar={this.hideMenuBar} />
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
