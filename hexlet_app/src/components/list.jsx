import React from "react";
import cn from "classnames";

class Item extends React.Component {
  render() {
    const { value, onRemove } = this.props;

    return (
      <li>
        <a href="#" onClick={onRemove(value)}>{value}</a>
      </li>
    )
  }
}

export default class List extends React.Component {
  constructor(props) {
    super(props);
    const { items } = this.props;
    this.state = { items };
  }

  handleRemove = (value) => (e) => {
    e.preventDefault();

    const newItems = this.state.items.filter(item => item !== value);

    this.setState({ items: newItems })
  }

  render() {
    const { items } = this.state;

    return (
      <ul>
        {items.map(i => 
          <Item onRemove={this.handleRemove} value={i} />
        )}
      </ul>
    )
  }
}