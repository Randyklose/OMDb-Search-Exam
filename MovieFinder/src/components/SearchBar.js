import React from 'react';
import { browserHistory as history } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    e.preventDefault();
    history.push(`/movie/${this.refs.userInput.value}`);
}

  render() {
    return (
        <div className="search-page">
          <form>
            <input ref="userInput"
              className="search-movie__input"
              placeholder="Enter a movie title"
              type="text"
              onChange={this._handleChange}/>
          </form>
        </div>
    )
  }
}

export default SearchBar;
