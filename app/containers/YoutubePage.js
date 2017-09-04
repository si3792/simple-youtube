import React, { Component } from 'react';
import { connect } from 'react-redux';
import youtubeAPI from '../utils/youtube_api';
import PlaybackButtons from '../components/PlaybackButtons';
import YoutubeIframe from './YoutubeIframe';
import { playVideo, pauseVideo, stopVideo } from '../actions/playback';

class YoutubePage extends Component {

  props: {
    sendAction: () => void,
    playback: string,
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
      videoId,
      playerVars: {
        controls: 0,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        modestbranding: 1
      }
    });
    return player;
  }

  handlePlaybackButtonsClick = (val) => {
    if (val === 'play') {
      this.props.sendAction(playVideo());
      this.player.playVideo();
    } else if (val === 'pause') {
      this.props.sendAction(pauseVideo());
      this.player.pauseVideo();
    } else if (val === 'stop') {
      this.props.sendAction(stopVideo());
      this.player.stopVideo();
    }
  }

  render() {
    return (
      <div>
        <h1>Youtube page</h1>
        <YoutubeIframe videoId={'M7lc1UVf-VE'} />
        <PlaybackButtons onClick={this.handlePlaybackButtonsClick} playback={this.props.playback} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playback: state.playback,
  videoId: state.videoId
});

const mapDispatchToProps = (dispatch) => ({
  sendAction: (action) => { dispatch(action); }
});


export default connect(mapStateToProps, mapDispatchToProps)(YoutubePage);
