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
        <Log />
        <Buttons />
        <Collapse text={'Collapse me'} />
        <Form text="loremru" />
        <List items={[1, 2, 3, 4, 5]} />
      </div>
    );
  }
}

export default App;
