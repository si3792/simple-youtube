import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaybackButtons from '../components/PlaybackButtons';
import YoutubeIframe from './YoutubeIframe';
import { playVideo, pauseVideo, stopVideo } from '../actions/playback';

class YoutubePage extends Component {

  props: {
    sendAction: () => void,
    playback: string
  }

  handlePlaybackButtonsClick = (val) => {
    if (val === 'play') this.props.sendAction(playVideo());
    else if (val === 'pause') this.props.sendAction(pauseVideo());
    else if (val === 'stop') this.props.sendAction(stopVideo());
  }

  render() {
    return (
      <div>
        <h1>Youtube page</h1>
        <YoutubeIframe />
        <PlaybackButtons onClick={this.handlePlaybackButtonsClick} playback={this.props.playback} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playback: state.playback
});

const mapDispatchToProps = (dispatch) => ({
  sendAction: (action) => { dispatch(action); }
});


export default connect(mapStateToProps, mapDispatchToProps)(YoutubePage);
