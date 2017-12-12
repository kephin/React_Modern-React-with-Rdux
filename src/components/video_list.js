import React from 'react';

// Remember to update all of our references from 'props' to 'this.props' when refactor component from a function-based component to a class-based component 
const VideoList = (props) => {
  return (
    // using 'className' in order to prevent naming conflict with JavaScript reserved keyword: 'class'
    <ul className='col-md-4 list-group'>
      {props.videos.length}
    </ul>
  );
}

export default VideoList;