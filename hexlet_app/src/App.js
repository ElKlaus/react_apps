import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Navigate } from "react-router-dom";
import Buttons from './components/buttons';
import Collapse from './components/collapse';
import CollapseFunc from './func_components/CollapseFunc';
import Form from './components/form';
import List from './components/list';
import Log from './components/log';
import Card from './components/card';
import Autocomplete from './components/autocomplete';
import Clock from './components/clock';
import DefinitionList from './components/definition_list';
import Editor from './components/editor';
import ListCollback from './components/colback_list';

class App extends React.Component {

  render() {
    const definitions = [
      { dt: 'on', dd: 'two', id: 1 },
      { dt: 'another term', dd: 'another description', id: 2 },
    ];

    const text = 'collapse me';

    const vdom = (
      <Card>
        <Card.Body>
          <Card.Title>What is love? Baby don't hurt me. No more!</Card.Title>
        </Card.Body>
      </Card>
    );

    return (
      <div  className='main'>
        <Autocomplete />
        {vdom}
        {/* <ListCollback items={[1,2,3,4,5]} /> */}
        {/* <Editor text="initial text"/> */}
        <Collapse text={text} opened={false}/>
        <Buttons />
        <DefinitionList data={definitions}/>
        <Log />

      </div>
    );
  }
}

export default App;
