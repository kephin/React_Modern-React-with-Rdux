import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBRLw_tEu9-hz8hNlaH9K_Do_Bk7O-jcDU';
// Create a new component. This component should produce some HTML
const App = () => (
  <div>
    <SearchBar />
  </div>
);

// Take this component's generated HTML and put it in the DOM
ReactDom.render(<App />, document.querySelector('.container'));
