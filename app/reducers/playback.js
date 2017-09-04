const initialState = 'STOPPED';

const playback = (state = initialState, action) => {
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
