import React from "react";
import cn from "classnames";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name"/>
        </label>
        <input type="submit"  value="Send" />
      </form>
    );
  }
}