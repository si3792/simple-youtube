const initialState = 'DbDnKG8Nd2A';

const videoId = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.videoId;
    default:
      return state;
  }
};

export default videoId;
