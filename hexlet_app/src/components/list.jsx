import React from "react";
import cn from "classnames";

export default class List extends React.Component {
  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return null;
    }

    const listItem = data.map(({ dt, dd, id }) => 
    <React.Fragment key={id}>
      <dt>{dt}</dt>
      <dd>{dd}</dd>
    </React.Fragment>);

    return (
      <dl>
        {listItem}
      </dl>      
    )
  }
}