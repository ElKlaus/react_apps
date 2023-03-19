/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import cn from 'classnames';

export const CollapseFunc = () => {
//   constructor(props) {
//     super(props);
//     this.state = {
//       opened: props.opened,
//     }
//   }

    const [ opened, setOpened ] = useState(true);

    // handleClick = () => this.setState(({ opened, aria }) => ({ opened: !opened, aria: !aria }));


    const { text } = this.props;
    const collapseClass = cn('collapse', {
        show: opened,
    });

    return (
      <div>
        <p>
          <a
            href="#"
            className="btn btn-primary"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded={setOpened(false)}
            onClick={this.handleClick}
          >
              Link with href
          </a>
        </p>
        <div className={collapseClass}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    )
  
}
