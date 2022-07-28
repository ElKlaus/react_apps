import React from "react";

export default class List extends React.Component {
  removeItem = (id) => (e) => {
    e.preventDefault();

    const newItems = this.state.items.filter((item) => item.id !== id);

    this.setState({ items: newItems });
  };

  constructor(props) {
    super(props);
    
    const items = props.items.map((item, index) => ({ item, id: index + 1 }));

    this.state ={ items };
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item) => this.removeItem(item))}
      </ul>
    )
  }

  renderItem({ id }) {
    return <li><a href="#" onClick={this.removeItem(id)}>{id}</a></li>
  }
}

// List.defaultProps = {
//   items: [1, 2, 3, 4, 5, 6],
// }