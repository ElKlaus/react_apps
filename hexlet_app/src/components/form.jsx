import React from "react";
import cn from "classnames";

export default class Form extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <form>
        <label htmlFor="">
          Is going
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label htmlFor="">
          Number of guests
          <br />
          <input
            name="numberOfGests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <select name="" id="" multiple={true} value={['2', '4']}>
          <option value="">Some Val</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </form>
    )
  }
}