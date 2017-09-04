const initialState = 'NO_VIDEO';

const playback = (state = initialState, action) => {
  // if (state === 'NO_VIDEO') return state;

  switch (action.type) {
    case 'PLAY_VIDEO':
      return 'PLAYING';
    case 'PAUSE_VIDEO':
      return 'PAUSED';
    case 'STOP_VIDEO':
      return 'STOPPED';
    default:
      return state;
  }
};

export default playback;
