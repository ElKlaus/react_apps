import React from "react";
import cn from "classnames";

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened,
    }
  };

  handleClick() {
    this.setState(({ opened }) => ({ opened: !opened }))
  }

  render() {
    const { text } = this.props
    const { opened } = this.state;
    const collapseClass = cn('collapse', {
      show: opened,
    });

    return (
      <div>
        <p>
          <a href="#" className="btn btn-primary" data-bs-toggle="collapse" role="button" aria-expanded={opened} onClick={this.handleClick.bind(this)}>Link with href</a>
        </p>
        <div className={collapseClass}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

Collapse.defaultState = {
  opened: false,
}