import React from "react";

export const themes = {
  ligth: {
    foregrount: '#000',
    background: '#eee'
  },
  dark: {
    foregrount: '#fff',
    background: '#222',
    color: '#fff',
  },
};

export const ThemeContext = React.createContext(
  themes.dark
);