import React from 'react';
import cn from 'classnames';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

// import update from 'immutability-helper'

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  )
}

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.ligth,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
        state.theme === themes.dark
          ? themes.ligth
          : themes.dark,
      }));
    }
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton>Click me</ThemedButton>
        </section>
      </div>
    )
  }
};