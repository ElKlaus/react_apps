import React from 'react';

export default class DefinitionList extends React.Component {
  render() {
    const definitions = this.props.data;

    if(definitions.length === 0) return null;

    const defList = definitions.map(({ dt, dd, id }) => (
      <React.Fragment key={id}>
        <dt>{dt}</dt>
        <dd>{dd}</dd>
      </React.Fragment>
    ));

    return (
      <dl>
        {defList}
      </dl>
    )
  }
}