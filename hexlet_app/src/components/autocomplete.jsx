import axios from 'axios';
import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: [], text: ''};
  }

  HashChangeText = async ({ target: { value }}) => {
    if (value === '') {
      this.setState({ text: '', countries: [] });

      return;
    }

    this.setState({ text: value });
    const res = await axios.get('/countries', { params: { term: value }});
    this.setState({ countries: res.data })
  }

  renderCountries() {
    const { countries } = this.state;

    return (
      <ul>
        {countries.map((c) => <li key={c}>{c}</li>)}
      </ul>
    );
  }

  render() {
    const { countries, text } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.HashChangeText}
            value={text}
            className="form-control"
            placeholder='Enter Country'
          />
        </form>
        {countries.length > 0 && this.renderCountries()}
      </div>
    );
  }
}