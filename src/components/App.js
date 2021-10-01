import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends Component {
  onTermSubmit = async (term) => {
    const results = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(results.data.items);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
