import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div>
        <h1>Content</h1>
        <hr/>
        <div>
          <p>Camera Input</p>
          <input type="file" accept="image/*;capture=camera" />
          <p>Camcorder Input</p>
          <input type="file" accept="video/*;capture=camcorder" />
          <p>Microphone Input</p>
          <input type="file" accept="audio/*;capture=microphone" />
        </div>
      </div>
    )
  };
}

export default Content;
