import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';

class YoutubeIframe extends Component {

  componentDidMount() {
    window.onYouTubeIframeAPIReady = () => {
      const player = new YT.Player('yt-player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
      });
      console.log(player);
    };
  }

  render() {
    return (
      <div id="yt-player">Hello</div>
    );
  }
}

export default (scriptLoader([
  'https://www.youtube.com/iframe_api'
])(YoutubeIframe));
