// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import playback from './playback';
import videoId from './videoId';

const rootReducer = combineReducers({
  counter,
  router,
  playback,
  videoId
});

export default rootReducer;
