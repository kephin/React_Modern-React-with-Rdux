import React from 'react';
import VideoListItem from './video_list_item';

// Remember to update all of our references from 'props' to 'this.props' when refactor component from a function-based component to a class-based component 
const VideoList = (props) => {
  const videoItems = props.videos.map(video => (
    // Remember to add unique 'key' props when rendering an array or iterator
    <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
  ));
  return (
    // using 'className' in order to prevent naming conflict with JavaScript reserved keyword: 'class'
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
}

export default VideoList;
