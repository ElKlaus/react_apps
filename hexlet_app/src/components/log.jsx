import React from "react";
import { get, uniqueId } from "lodash";

export default class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  handleCount = (value) => {
    const { items } = this.state;
    const currentValue = get(items, [0, 'value'], 0) + value;
    const current = { id: uniqueId(), value: currentValue };
    
    this.setState({ items: [current, ...items] });
  }

  handleDec = () => this.handleCount(-1);

  handleInc = () => this.handleCount(1);

  handleRemove = (currentId) => () => {
    const { items } = this.state;
    this.setState({ items: items.filter(({ id }) => id !== currentId) });
  }

  renderLog() {
    const { items } = this.state;

    if (items.length === 0) {
      return null;
    }

    return (
      <div className="list-group">
        {items.map(({ id, value }) => (
          <button type="button" className="list-group-item list-group-item-action" key={id} onClick={this.handleRemove(id)}>
            {value}
          </button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button className="btn btn-outline-success" onClick={this.handleInc}>+</button>
          <button className="btn btn-outline-danger" onClick={this.handleDec}>-</button>
        </div>
        {this.renderLog()}
      </div>
    );
  }
}