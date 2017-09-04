import React, { Component } from 'react';

class PlaybackButtons extends Component {

  props: {
    onClick: () => void,
    playback: string
  }

  handleClick = (e) => {
    this.props.onClick(e.currentTarget.value);
  }

  render() {
    return (
      <div className="playback-buttons">
        <button className={this.props.playback === 'PLAYING' ? 'active' : ''} value="play" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-play" aria-hidden="true" />
        </button>
        <button className={this.props.playback === 'PAUSED' ? 'active' : ''} value="pause" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-pause" aria-hidden="true" />
        </button>
        <button className={this.props.playback === 'STOPPED' ? 'active' : ''} value="stop" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-stop" aria-hidden="true" />
        </button>
      </div>
    );
  }
}
export default PlaybackButtons;
