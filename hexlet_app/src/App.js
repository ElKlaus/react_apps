import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Navigate } from "react-router-dom";
import Buttons from './components/buttons';
import Collapse from './components/collapse';
import Form from './components/form';
import List from './components/list';

class App extends React.Component {

  render() {
    const definitions = [
      { dt: 'on', dd: 'two', id: 1 },
      { dt: 'another term', dd: 'another description', id: 2 },
    ];

    return (
      <div  className='main'>
        <Buttons />
        <Collapse text={'Collapse me'}/>
        <Form text="loremru" />
        <List data={definitions}/>
      </div>
    );
  }
}

export default App;
