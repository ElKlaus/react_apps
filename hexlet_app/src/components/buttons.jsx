import React from 'react';
import cn from 'classnames';
// import update from 'immutability-helper'

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: true,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState(({ toggleClass }) => ({ toggleClass: !toggleClass }));
  };

  render() {
    const { toggleClass } = this.state;

    const textStyle = cn({
      divStyle: toggleClass,
      divNewStyle: !toggleClass,
    })

    return (
      <React.Fragment>
        <div className="">        
          <p>
            <a href="/test" className="btn btn-primary" data-bs-toggle="collapse" role="button" onClick={this.handleClick}>Recolor</a>
          </p>
        </div>
        <div className={textStyle}>Hello World</div>
      </React.Fragment>
    )
  };
};