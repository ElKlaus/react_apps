import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Navigate } from "react-router-dom";
import Buttons from './components/buttons';
import Collapse from './components/collapse';
import Form from './components/form';
import List from './components/list';
import Log from './components/log';
import Card from './components/card';
import Autocomplete from './components/autocomplete';
import Clock from './components/clock';
import DefinitionList from './components/definition_list';

class App extends React.Component {

  render() {
    const definitions = [
      { dt: 'on', dd: 'two', id: 1 },
      { dt: 'another term', dd: 'another description', id: 2 },
    ];

    const vdom = (
      <Card>
        <Card.Body>
          <Card.Title>What is love? Baby don't hurt me. No more!</Card.Title>
        </Card.Body>
      </Card>
    );

    return (
      <div  className='main'>
        {vdom}
        <Collapse />
        <Buttons />
        <DefinitionList data={definitions}/>
      </div>
    );
  }
}

export default App;
