import React from "react";

const Item = (props) => {
  const { value, onRemove } = props;

  return (
    <li>
      <a href="#" onClick={onRemove(value)}>{value}</a>
    </li>
  )
}

export default class List extends React.Component {
  constructor(props) {
    super(props);
    const { items } = this.props;
    this.state = { items }
  }

  handleRemove = (value) => (e) => {
    e.preventDefault();

    const newItems = this.state.items.filter(item => item !== value);

    this.setState({ items: newItems });
  }

  render() {
    const { items } = this.state;

    return (
      <ul>
        {items.map(i =>
          <Item onRemove={this.handleRemove} key={i} value={i} />
        )}
      </ul>
    )
  }
}

// List.defaultProps = {
//   items: [1, 2, 3, 4, 5, 6],
// }