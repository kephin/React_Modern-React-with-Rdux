import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBRLw_tEu9-hz8hNlaH9K_Do_Bk7O-jcDU';
// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    YTSearch({key: API_KEY, term: 'Peek-A-Boo'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
} 

// Take this component's generated HTML and put it in the DOM
ReactDom.render(<App />, document.querySelector('.container'));
