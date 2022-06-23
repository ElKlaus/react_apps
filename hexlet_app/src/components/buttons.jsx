import React from 'react';
import cn from 'classnames';
import update from 'immutability-helper'

export default class Buttons extends React.Component {

  render() {
    const divStyle = {
      color: 'red',
      fontSize: '50px',
    };

    const myData = {
      x: { y: {z: 5} },
      a: { b: [1, 2] },
    };

    const newData = update(myData, {
      x: { y: {z: { $set: 7 } } },
      a: { b: { $push: [9] } },
    })

    
    console.log(newData);
  

    return <div style={divStyle}>Hello World</div> 
  };
};