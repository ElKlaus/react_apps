import React from 'react';
import { Navigate } from "react-router-dom";
import Buttons from './components/buttons';
import Collapse from './components/collapse';
import Form from './components/form';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
          <Buttons />
          <Collapse text={'Collapse me'}/>
          <Form />
      </div>
    );
  }
}

export default App;
