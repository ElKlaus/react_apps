import React from "react";
import cn from "classnames";

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(({ opened }) => ({opened: !opened}));
  }

  render() {
    const { opened } = this.state;
    const collapseClass = cn('collapse', {
      show: this.state.opened,
    });

    return (
      <div>
        <p>
          <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded={opened} onClick={this.handleClick}>Link with href</a>
        </p>
        <div className={collapseClass}>
          <div className="card card-body">
            collapse me
          </div>
        </div>
      </div>
    )
  }

}