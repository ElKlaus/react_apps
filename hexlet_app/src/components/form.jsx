import React from "react";
import cn from "classnames";

export default class Form extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      value: '',
      text: this.props.text,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    
    event.preventDefault(event);
  }

  onChange = (e) => {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label htmlFor="text">
          Имя:
          <input type="text" name="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <textarea name="" id="" cols="30" rows="10" onChange={this.onChange} value={this.state.text}></textarea>
        <input type="submit" value="Отправить" />
      </form>
    )
  }

  
}