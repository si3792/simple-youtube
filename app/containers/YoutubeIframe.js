import React, { Component } from 'react';
import youtubeAPI from '../utils/youtube_api';

class YoutubeIframe extends Component {

  props: {
    videoId: string
  }

  componentDidMount() {
    this.setupPlayer();
  }

  async setupPlayer() {
    await youtubeAPI();

    if (this.player) {
      this.player.destroy();
    }

    this.player = await this.createPlayer(this.props.videoId);
  }

  createPlayer = (videoId) => {
    const player = new YT.Player('yt-player', {
      height: 480,
      width: 640,
      videoId
    });
    return player;
  }

  render() {
    return (
      <div id="yt-player" />
    );
  }
}

export default YoutubeIframe;
