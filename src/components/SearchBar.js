import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="searchBar ui segment">
        <form className="searchBarForm ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
