import React, { Component } from 'react';

// 'State' is a plain object to record and react to user event
// each class-based component that we defined has its own state object 
// whenever a component state is changed, the component immediately re-renders and also forces all of its children to re-renders as well
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // only set a object inside constructor, in other places we only use this.setState({...}) to update our state object
    this.state = { term: 'hello'};
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})} />
        <p>Value of the input is: {this.state.term}</p>
      </div>
    )

  }
}

export default SearchBar;
