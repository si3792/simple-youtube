// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import playback from './playback';

const rootReducer = combineReducers({
  counter,
  router,
  playback
});

export default rootReducer;
