import React from 'react';

const PlaybackButtons = (playback) => (
  <div className="playback-buttons">
    <button><span className="glyphicon glyphicon-play" aria-hidden="true" /> </button>
    <button><span className="glyphicon glyphicon-pause" aria-hidden="true" /> </button>
    <button><span className="glyphicon glyphicon-stop" aria-hidden="true" /> </button>
  </div>
);

export default PlaybackButtons;
